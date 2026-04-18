# 🌌 BorsaNova - KRİPTO VARLIK VE STRATEJİ AĞI

BorsaNova Terminali, yatırımcıların canlı kripto para verilerini anlık olarak takip edebildiği, kendi stratejilerini belirleyip portföylerini yönetebildiği (CRUD) modern ve responsive bir finansal gösterge panelidir (Dashboard). 

Proje, sektör standartlarında çift para birimi (USD/TRY) hesaplaması yapmaktadır.

## 🚀 ÖNE ÇIKAN ÖZELLİKLER

* **Canlı Veri Akışı:** Kripto para fiyatları ve 24 saatlik değişim oranları anlık olarak API üzerinden çekilir.
* **Çift Para Birimi (Multi-Currency):** Global USD/TRY paritesi canlı olarak alınır ve kullanıcının portföyündeki tüm kar/zarar hesaplamaları "noktasına virgülüne kadar" Türkiye standartlarında (₺) gösterilir.
* **Tam Kapsamlı CRUD İşlemleri:**
  * **Oluştur (Create):** Canlı veriler arasından varlık seçimi yapıp miktar, giriş fiyatı ve strateji notu ile yeni pozisyon açma.
  * **Oku (Read):** Portföydeki varlıkların toplam değerini ve anlık durumunu kartlar halinde listeleme.
  * **Güncelle (Update):** Mevcut pozisyonların risk profilini ve verilerini anında düzenleme.
  * **Sil (Delete):** Kapatılan pozisyonları sistemden tek tıkla yok etme.
* **CORS Korumalı Mimari:** Tarayıcı güvenliği (CORS) kısıtlamalarına takılmadan doğrudan Frontend üzerinden çalışabilen güvenli API entegrasyonları.
* **Modern Arayüz:** Tailwind CSS ile kurgulanmış, tamamen mobil uyumlu (responsive), gece mavisi ve altın sarısı tonlarında kurumsal Dark Mode tasarımı.


## 🛠 KULLANILAN TEKNOLOJİLER

* **Framework:** React (Vite) - Modern UI kütüphanesi
* **Dil:** TypeScript - Tip güvenliği ve ölçeklenebilirlik
* **Stil:** Tailwind CSS - Hızlı ve modern stil yönetimi
* **Service:** Fetch API - HTTP asenkron veri istekleri
* **Platform:** Netlify - Statik hosting

## 📁 PROJE MİMARİSİ

Proje, modern React standartlarına uygun olarak modüler bir klasör ağacıyla inşa edilmiştir:

```text
src/
├── Components/         # Form ve Liste gibi tekrar kullanılabilir arayüz parçaları
│   ├── TerminalForm.tsx
│   └── TerminalList.tsx
├── Interfaces/         # TypeScript tip tanımlamaları ve veri modelleri
│   └── ITerminal.ts
├── Pages/              # State yönetimini ve API çağrılarını barındıran ana sayfa
│   └── Dashboard.tsx
├── App.tsx             # Kök bileşen
└── index.css           # Global stiller ve animasyonlar
```

## 📝 API Endpoint

Projede iki farklı güvenli (CORS dostu) API kullanılmaktadır:
* **API 1:** Kripto Fiyatları (GET): https://api.coinlore.net/api/tickers/?start=0&limit=20
* **API 2:** Güncel Kur/TRY (GET): https://api.exchangerate-api.com/v4/latest/USD

👨‍💻 Geliştirici
BorsaNova - React/Vite Kapsamlı Eğitim Bitirme Projesi


## 📦 KURULUM
```text
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

## 🌐 Deploy (Netlify)

1. GitHub'a push et

2. Netlify'da "New site from Git" seç

3. GitHub reposunu bağla

4. Build komutu: npm run build

5. Publish dizini: dist
