# 🍜 Kopi Bot — Hawker Stall AI Chatbot

A WhatsApp-style AI chatbot for **Pasar Malam Jaya Food Centre** built with vanilla HTML/CSS/JS and OpenAI's API.

---

## 📁 Project Structure

```
hawker-chatbot/
├── index.html        ← Main app (WhatsApp-style UI)
├── style.css         ← WhatsApp-inspired styling
├── app.js            ← Chat logic & OpenAI API integration
├── hawker-data.js    ← 📝 YOUR KNOWLEDGE BASE (edit this!)
└── README.md
```

---

## 🚀 How to Run

Because the app uses ES Modules (`import/export`), it **must be served over HTTP** — not opened directly as a file.

### Option 1 — VS Code Live Server (easiest)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 2 — Python (built-in)
```bash
cd hawker-chatbot
python -m http.server 8080
```
Then open: http://localhost:8080

### Option 3 — Node.js `serve`
```bash
npx serve hawker-chatbot
```

---

## 🔑 Setting Up the AI (OpenAI API Key)

1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. When the chatbot loads, paste your key into the **yellow banner** at the top
4. Click **Save** — your key is stored in `sessionStorage` (browser only, not sent anywhere except OpenAI)

### AI Model Used
The app uses **`gpt-4o-mini`** by default (fast, low cost).  
To upgrade to GPT-4o, edit line in `app.js`:
```js
model: 'gpt-4o-mini',   // ← change to 'gpt-4o'
```

---

## ✏️ Customising the Knowledge Base

All hawker stall data lives in **`hawker-data.js`**. Edit this file to:

- Change the food centre name, address, and operating hours
- Add / remove stalls
- Update menus and prices
- Edit directions and transport info
- Modify the AI's personality via `buildSystemPrompt()`

### Adding a New Stall
```js
{
  id: 9,
  name: "Ali's Roti Canai",
  stallNumber: "C3",
  cuisine: "Indian Muslim",
  specialty: "Crispy roti with curry",
  operatingHours: "6:00 AM – 12:00 PM (daily)",
  menu: [
    { item: "Roti Canai Plain", price: 1.50 },
    { item: "Roti Telur", price: 2.50 },
  ],
  notes: "100% Halal.",
  popular: "Roti Telur"
}
```

---

## 🌐 Features

| Feature | Detail |
|---|---|
| 💬 WhatsApp-style UI | Green bubbles, tails, ticks, typing indicator |
| 🤖 AI Chatbot | GPT-4o-mini with full hawker stall knowledge |
| 🍜 8 Pre-loaded Stalls | Char Kway Teow, Nasi Lemak, Satay & more |
| 🌙 Halal Guidance | Identifies all Halal-certified stalls |
| 📍 Directions | LRT, bus, and driving instructions |
| ⭐ Recommendations | AI suggests popular dishes |
| 📱 Responsive | Works on mobile screens |
| 🌏 Bilingual | Responds in English or Bahasa Malaysia |
| ⚡ Quick Replies | One-tap buttons for common questions |

---

## 💡 Tips

- The AI keeps a **rolling 12-turn memory** — it remembers what you asked earlier in the session
- Press **Enter** to send, **Shift+Enter** for a new line
- Click 🗑️ to reset the chat
- All prices are in **RM (Malaysian Ringgit)**
