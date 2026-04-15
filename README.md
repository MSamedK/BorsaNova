Nexus Terminal - Kripto Varlık ve Strateji Ağı

React (Vite) tabanlı geliştirilmiş, çift uzak API entegrasyonlu (Kripto ve Döviz) ve canlı portföy yönetimini sağlayan (CRUD) modern finansal gösterge paneli.

🚀 Özellikler

✅ Uzak API'lerden canlı veri çekme (Coinlore & ExchangeRate)

✅ Çift para birimi gösterimi ve anlık hesaplama (USD ve TRY)

✅ Yeni portföy pozisyonu ekleme (Form)

✅ Pozisyon detaylarını güncelleme ve silme (CRUD)

✅ Lüks Cam Efekti (Glassmorphism) ve Dark Mode arayüz

✅ TypeScript desteği

✅ Netlify'a deploy edilebilir

📦 Kurulum

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev


🌐 Deploy (Netlify)

GitHub'a push et

Netlify'da "New site from Git" seç

GitHub reposunu bağla

Build komutu: npm run build

Publish dizini: dist

Veya Netlify CLI ile:

npm install -g netlify-cli
netlify login
netlify deploy --prod


📁 Proje Yapısı

src/
├── Components/
│   ├── TerminalForm.tsx      # Pozisyon açma ve güncelleme formu
│   └── TerminalList.tsx      # Portföy listesi ve kar/zarar hesaplamaları
├── Interfaces/
│   └── ITerminal.ts          # TypeScript veri modelleri
├── Pages/
│   └── Dashboard.tsx         # Ana sayfa, API çağrıları ve State yönetimi
├── App.tsx                   # Uygulama kökü
├── index.css                 # Global stiller (Tailwind & Cam Efekti)
└── main.tsx                  # React DOM girişi


🔧 Teknolojiler

React (Vite) - Modern UI kütüphanesi

TypeScript - Tip güvenliği ve ölçeklenebilirlik

Tailwind CSS - Hızlı ve modern stil yönetimi

Fetch API - HTTP asenkron veri istekleri

Netlify - Statik hosting

📝 API Endpoint

Projede iki farklı güvenli (CORS dostu) API kullanılmaktadır:

Kripto Fiyatları (GET): https://api.coinlore.net/api/tickers/?start=0&limit=20

Güncel Kur/TRY (GET): https://api.exchangerate-api.com/v4/latest/USD

👨‍💻 Geliştirici

Nexus Terminal - React/Vite Kapsamlı Eğitim Projesi
