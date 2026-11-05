// ============================================================
//  HAWKER CHATBOT — Main Application Logic
//  Uses Groq API (llama-3.3-70b-versatile) — FREE tier available
//  Free tier: https://console.groq.com/keys
// ============================================================

import { buildSystemPrompt } from './hawker-data.js';

// ---- DOM refs ----
const messagesArea  = document.getElementById('messagesArea');
const messageInput  = document.getElementById('messageInput');
const sendBtn       = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const botStatus     = document.getElementById('botStatus');
const apiBanner     = document.getElementById('apiBanner');
const apiKeyInput   = document.getElementById('apiKeyInput');
const lastMsgPreview= document.getElementById('lastMsgPreview');
const lastMsgTime   = document.getElementById('lastMsgTime');

// ---- State ----
let conversationHistory = [];  // {role, content}[]
let apiKey = sessionStorage.getItem('hawker_groq_key') || '';

// ---- Init ----
window.addEventListener('DOMContentLoaded', () => {
  if (apiKey) {
    apiBanner.classList.add('hidden');
  } else {
    apiBanner.classList.remove('hidden');
  }
  showDateDivider('Today');
  appendMessage('bot', `👋 *Selamat datang!* Welcome to **Pasar Malam Jaya Food Centre**!\n\nI'm **Kopi Bot** 🤖 — your friendly guide to all 8 of our amazing food stalls.\n\nYou can ask me about:\n• 🍜 Menus & prices\n• 🌙 Halal food options\n• 📍 How to get here\n• ⭐ My top recommendations\n\nWhat can I help you with today?`);
});

// ---- API Key ----
window.saveApiKey = function () {
  const val = apiKeyInput.value.trim();
  if (!val.startsWith('gsk_')) {
    apiKeyInput.style.borderColor = '#e74c3c';
    apiKeyInput.placeholder = 'Key must start with gsk_...';
    return;
  }
  apiKey = val;
  sessionStorage.setItem('hawker_groq_key', apiKey);
  apiBanner.classList.add('hidden');
  setBotStatus('🟢 Kopi Bot is online');
};

// ---- Send message ----
window.sendMessage = async function () {
  const text = messageInput.value.trim();
  if (!text) return;

  messageInput.value = '';
  autoResize(messageInput);
  appendMessage('user', text);
  updateSidebarPreview(text);

  if (!apiKey) {
    appendMessage('bot', '⚠️ Please enter your Groq API key in the yellow banner above to enable AI responses.\n\nGet a free key at https://console.groq.com/keys', true);
    return;
  }

  setBotStatus('✍️ Kopi Bot is typing…');
  showTyping(true);
  sendBtn.disabled = true;

  try {
    const reply = await callGroq(text);
    showTyping(false);
    appendMessage('bot', reply);
    updateSidebarPreview(reply);
    setBotStatus('🟢 Kopi Bot is online');
  } catch (err) {
    showTyping(false);
    setBotStatus('🟢 Kopi Bot is online');
    appendMessage('bot', `❌ *Error:* ${err.message}\n\nPlease check your API key and try again.`, true);
  } finally {
    sendBtn.disabled = false;
  }
};

// ---- Quick replies ----
window.sendQuick = function (text) {
  messageInput.value = text;
  sendMessage();
};

// ---- Reset chat ----
window.resetChat = function () {
  messagesArea.innerHTML = '';
  conversationHistory = [];
  showDateDivider('Today');
  appendMessage('bot', `👋 Chat reset! I\'m **Kopi Bot** — ready to help you explore **Pasar Malam Jaya Food Centre**. What would you like to know?`);
};

// ---- Groq API call ----
async function callGroq(userMessage) {
  // Groq uses the same message format as OpenAI
  conversationHistory.push({ role: 'user', content: userMessage });

  // Keep last 24 entries (12 user+assistant turns)
  const recentHistory = conversationHistory.slice(-24);

  const payload = {
    model: 'llama-3.3-70b-versatile',  // fast, free, very capable
    messages: [
      { role: 'system', content: buildSystemPrompt() },
      ...recentHistory
    ],
    temperature: 0.75,
    max_tokens: 800
  };

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    const msg = errBody?.error?.message || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  const data = await response.json();
  const reply = data.choices[0].message.content;
  conversationHistory.push({ role: 'assistant', content: reply });
  return reply;
}

// ---- Render message bubble ----
function appendMessage(sender, text, isError = false) {
  const isBot = sender === 'bot';

  const row = document.createElement('div');
  row.className = `msg-row ${isBot ? 'incoming' : 'outgoing'}`;

  const bubble = document.createElement('div');
  bubble.className = `bubble${isError ? ' error' : ''}`;
  bubble.innerHTML = formatMarkdown(text);

  const timeLine = document.createElement('div');
  timeLine.className = 'msg-time';

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (isBot) {
    timeLine.textContent = timeStr;
  } else {
    timeLine.innerHTML = `${timeStr} <span class="tick read">✓✓</span>`;
  }

  row.appendChild(bubble);
  row.appendChild(timeLine);
  messagesArea.appendChild(row);
  scrollToBottom();
}

// ---- Date divider ----
function showDateDivider(label) {
  const div = document.createElement('div');
  div.className = 'date-divider';
  div.textContent = label;
  messagesArea.appendChild(div);
}

// ---- Helpers ----
function scrollToBottom() {
  requestAnimationFrame(() => {
    messagesArea.scrollTop = messagesArea.scrollHeight;
  });
}

function showTyping(show) {
  typingIndicator.style.display = show ? 'flex' : 'none';
  if (show) messagesArea.scrollTop = messagesArea.scrollHeight;
}

function setBotStatus(msg) {
  botStatus.textContent = msg;
}

function updateSidebarPreview(text) {
  const plainText = text.replace(/\*/g, '').replace(/\n/g, ' ').substring(0, 60);
  lastMsgPreview.textContent = plainText + (text.length > 60 ? '…' : '');
  lastMsgTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ---- Minimal Markdown renderer ----
function formatMarkdown(text) {
  // Escape HTML first
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold: **text** or *text*
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*\n]+?)\*/g, '<strong>$1</strong>');

  // Italic: _text_
  html = html.replace(/\b_(.+?)_\b/g, '<em>$1</em>');

  // Code: `text`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Newlines → <br>
  html = html.replace(/\n/g, '<br>');

  // Bullet points: • or - at line start
  html = html.replace(/(^|<br>)[•\-] (.+?)(?=<br>|$)/g, '$1<span style="margin-left:8px">• $2</span>');

  return html;
}

// ---- Input resize ----
window.autoResize = function (el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
};

// ---- Key handling ----
window.handleKeyDown = function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};
