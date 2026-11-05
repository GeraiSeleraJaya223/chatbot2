# 🍜 Makan Helper — Gerai Selera Jaya 223 Chatbot

A WhatsApp-style AI chatbot for **GERAI SELERA JAYA 223** built with vanilla HTML/CSS/JS and the **Groq API** (free, no credit card required).

---

## 📁 Project Structure

```
hawker-chatbot/
├── index.html        ← Main app (WhatsApp-style UI + all logic)
├── hawker-data.js    ← 📝 Stall knowledge base (edit this to update menus)
├── app.js            ← (legacy, unused)
├── style.css         ← (legacy, unused)
└── README.md
```

> **Note:** All logic is self-contained in `index.html`. The `app.js` and `style.css` files are legacy and not loaded.

---

## 🚀 How to Run

The app is a single HTML file that can be opened directly in any browser — **no server required**.

### Option 1 — Open directly (easiest)
Double-click `index.html` to open it in your browser.

### Option 2 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 3 — Python HTTP server
```bash
cd hawker-chatbot
python -m http.server 8080
```
Then open: http://localhost:8080

---

## 🔑 Setting Up the Groq API Key (AI Mode)

The chatbot works in **local mode** without any key. To enable AI-powered natural language replies, add a free Groq API key.

### Step 1 — Get a free API key
1. Go to **https://console.groq.com/keys**
2. Sign up or log in (free, no credit card needed)
3. Click **Create API Key** and copy the key (starts with `gsk_…`)

### Step 2 — Enter the key in the chatbot
1. Open the chatbot in your browser
2. Click the **⚙️** button in the top-right corner
3. Paste your key into the input field (placeholder: `gsk_…`)
4. Click **Save**

The header will update to show **"AI mode 🤖"** and the key is saved in your browser's `localStorage` for future sessions.

---

## 🤖 AI Model Used

| Setting | Value |
|---|---|
| Provider | [Groq](https://groq.com) |
| Default model | `llama3-8b-8192` (LLaMA 3 8B — fast, free) |
| API endpoint | `https://api.groq.com/openai/v1/chat/completions` |

### Available free-tier models on Groq

If you want a smarter or different model, edit line ~372 in `index.html`:

```js
const GROQ_MODEL = 'llama3-8b-8192';   // ← change this
```

| Model ID | Description |
|---|---|
| `llama3-8b-8192` | LLaMA 3 8B · fast, free ✅ **(default)** |
| `llama3-70b-8192` | LLaMA 3 70B · smarter, still free |
| `mixtral-8x7b-32768` | Mixtral 8x7B · large context window |
| `gemma2-9b-it` | Google Gemma 2 9B |

> ⚠️ **Model access error?** If you see `"The model does not exist or you do not have access to it"`, the model may not be available on your Groq account tier. Switch to `llama3-8b-8192` which is available on all free accounts.

---

## 🗺️ Food Court Layout

```
MAIN ENTRANCE (WEST)
        ↓
┌──────────────────────────────────────┐
│  [1][2][3]...[10][11]...[24]         │  ← TOP ROW (Stalls 1–24, west→east)
│                                      │
│         D I N I N G   A R E A        │
│                                      │
│  [48][47]...[36][35]...[25]          │  ← BOTTOM ROW (Stalls 48→25, west→east)
└──────────────────────────────────────┘
```

- 🔴 **Busier area** — Stalls 1–10 (top) and 36–48 (bottom), near the west entrance
- 🟢 **Quieter area** — Stalls 11–35, further inside the food court
- 🚻 Toilets & cleaning rooms located between stalls 10–11 (top) and 36–37 (bottom)

---

## 🍽️ Stall Directory

| Stall | Name | Category | Hours |
|---|---|---|---|
| 1 | Ahsan Corner | Drinks & Beverages | 5 PM – 12:30 AM |
| 2 | Nasi Lemak Cop Biru | Local Food | Open 24h (except Fri) |
| 3 | Zura Kitchen Style | Local Food | 10 AM – 7 PM |
| 4 ⭐ | Nasi Lemak Cop Merah | Local Food | 5 PM – 11:30 PM |
| 5 | Takoyaki Alfateh | Japanese Food | 5 PM – 12:30 AM |
| 6 | Ladyboss | Drinks & Beverages | 5 PM – 12:30 AM |
| 7 | Otak-Otak Ganu | Local Food | 5 PM – 12:30 AM |
| 8 | Penyet-an | Local Food | 10 AM – 5:30 PM |
| 9 | Kapla Corner | Drinks & Beverages | 5 PM – 12:30 AM |
| 10 | West Dine | Western Cuisine | 5 PM – 12:30 AM |
| 11 | Laksa | Local Food | 10 AM – 4:30 PM |
| 12 | Mamak Corner | Local Food | 7 AM – 11:30 AM |
| 13 | Coolblog | Drinks & Beverages | 7 AM – 12:30 AM |
| 36 | Pak Uda | Drinks & Beverages | 7 AM – 2:30 PM |
| 37 | Sup Meletop | Local Food | 7 AM – 2:30 PM |
| 38 | Boats | Steamboat & Grill | 7 AM – 11:30 PM |
| 39 | Hanie Bakery | Cake & Confectionery | 10 AM – 9:30 PM |
| 40 ⭐ | Ainul Seafood | Seafood Cuisine | 6 PM – 11:30 PM |
| 41 | Pizzaini | Italian Food | 2 PM – 11:30 PM |
| 42–43 | Steak & Grill | Western Food | 6 PM – 11:30 PM |
| 44–45 | Nasi Lemak Suri | Local Food | Open 24h (except Fri 12:30–2:30 PM) |
| 46–48 | Omarilah | Local Food | 6 AM – 11:30 AM |

> ⭐ = Famous / Viral among customers

---

## 🌐 Features

| Feature | Detail |
|---|---|
| 💬 WhatsApp-style UI | Green bubbles, tails, typing indicator |
| 🤖 AI Chatbot | Groq LLaMA 3 with full hawker stall knowledge |
| 🗺️ Interactive Map | SVG floor plan with stall highlighting |
| 🍜 26 Stalls Listed | Complete menu & hours for each stall |
| 💰 Budget Filter | Find items under RM5 |
| 📍 Directions | Guides from the main entrance |
| ⭐ Recommendations | Suggests popular/viral stalls |
| 📱 Responsive | Works on mobile screens |
| 🌏 Bilingual | Responds in English or Bahasa Malaysia |
| ⚡ Quick Replies | One-tap buttons for common questions |
| 🔌 Offline Mode | Works without API key (local pattern matching) |

---

## ✏️ Updating the Knowledge Base

All stall data is in **`hawker-data.js`**. Each entry follows this structure:

```js
{
  number: 1,                          // stall number (required)
  name: "Ahsan Corner",               // stall name
  category: "Drinks & Beverages",     // category
  owner: "Malay",                     // owner ethnicity (or null)
  hours: "5:00 PM – 12:30 AM",        // operating hours
  famous: true,                       // optional: marks as popular/viral
  sharedWith: [43],                   // optional: shared counter stall numbers
  menu: [
    { item: "Teh Tarik", price: 2.50 },
    { item: "Milo Ais",  price: 3.00 }
  ]
}
```

---

## 🛠️ Troubleshooting

| Problem | Solution |
|---|---|
| `"The model does not exist or you do not have access to it"` | The model isn't available on your Groq tier. The default is now `llama3-8b-8192` which works on all free accounts. Clear your browser's `localStorage` and re-enter your key, or change the model in `index.html` line ~372. |
| `"Invalid API key"` | Double-check the key copied from https://console.groq.com/keys. It must start with `gsk_`. |
| `"HTTP 429"` | Rate limit hit. Wait a moment and try again. Free tier allows ~30 requests/minute. |
| Map not showing | Ensure `hawker-data.js` is in the same folder as `index.html`. |
| Old Gemini key stored | Open browser DevTools → Application → Local Storage → delete `makan_gemini_key`. |
