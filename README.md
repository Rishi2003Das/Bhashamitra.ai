# Bhashamitra
---

### 🌐 **Bhashamitra: Bridging Standard Hindi with Regional Dialects**

**Bhashamitra** is an AI-powered language platform dedicated to preserving India's rich tapestry of dialects. It transforms standard Hindi into local dialects like **Bhojpuri, Awadhi, Haryanvi, Bagheli, Bundeli, and Chhattisgarhi**, capturing not just words, but cultural nuances.

🔤 **Try it now!** Type your Hindi text and instantly convert it into your selected dialect using a simple, user-friendly interface.  
📚 **Use Cases**:  
- Translate text and educational materials  
- Localize government documents  
- Create digital content in native dialects  
- Support for research and language preservation  

💡 **Mission**: Empower Indians to embrace and communicate in their mother tongues while staying connected to modern technology.

**Start preserving language diversity today — one sentence at a time.**

---

### 🌐 **भाषामित्र: मानक हिंदी से स्थानीय बोलियों की ओर एक पुल**

**भाषामित्र** एक एआई-संचालित भाषा प्लेटफ़ॉर्म है, जो भारत की समृद्ध भाषाई विविधता को संजोने के लिए समर्पित है। यह मानक हिंदी को **भोजपुरी, अवधी, हरियाणवी, बघेली, बुंदेली, और छत्तीसगढ़ी** जैसी स्थानीय बोलियों में परिवर्तित करता है — न केवल शब्दों का अनुवाद, बल्कि सांस्कृतिक भावों को भी साथ लेकर।

🔤 **अभी आज़माएं!** अपना हिंदी टेक्स्ट टाइप करें और चुनिंदा बोली में तुरंत अनुवाद पाएं — बेहद आसान और सुलभ इंटरफ़ेस।  
📚 **सेवाएं**:  
- टेक्स्ट और शैक्षणिक सामग्री का अनुवाद  
- सरकारी दस्तावेजों का स्थानीयकरण  
- डिजिटल कंटेंट निर्माण  
- भाषा अनुसंधान के लिए डेटा संग्रह  

💡 **हमारा मिशन**: हर भारतीय को उसकी मातृभाषा में आत्मविश्वास से संवाद करने में सक्षम बनाना — आधुनिक तकनीक के साथ सांस्कृतिक पहचान को जोड़ते हुए।

**आइए, भाषा संरक्षण की इस यात्रा में एक वाक्य से शुरुआत करें।**

---

## 🛠️ Bhashamitra: Project Setup & Run Guide

This project consists of notebooks, translation models, and a React-based frontend powered by **Vite**.

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ recommended): [Install Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Python 3.8+**
- **Jupyter or VS Code (optional)** for working with `.ipynb` notebooks

---

## 🚀 Running the Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd Bhashamitra/frontend
   ```

2. **Install dependencies** (run this once):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   - Usually runs at `http://localhost:5173/` or `http://localhost:5174/`
   - If port 5173 is busy, Vite will automatically use the next available port.

---

## 🧠 Working with Translation Models

The notebooks in the root folder are for training/evaluation using **MBART** or other models.

### Notebooks:

- `translate_mbart.ipynb` – Core translation logic using MBART
- `hin-bhoj.ipynb` – Hindi to Bhojpuri specific model
- `dataset_prep.ipynb` – Preprocess your dataset for training
- `machine_translation_demo.ipynb` – Demo notebook for trying out translations
- `eval.csv` – Evaluation data

You can run them using:

```bash
jupyter notebook
```

or open them in **VS Code** with the Jupyter extension.

---
