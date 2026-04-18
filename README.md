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

* **Framework:** React (Vite)
* **Dil:** TypeScript (Sıkı tip denetimi ve Interface mimarisi)
* **Stil:** Tailwind CSS
* **API 1:** [Coinlore API](https://www.coinlore.com/cryptocurrency-data-api) (Kripto Fiyatları - CORS Friendly)
* **API 2:** [ExchangeRate-API](https://www.exchangerate-api.com/) (Canlı Döviz Kuru)

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
## 📦 KURULUM

# Git'i projede başlatır
git init

# Tüm dosyaları paketlemeye hazırlar (Noktaya dikkat et)
git add .

# Değişiklikleri mühürler ve isimlendirir
git commit -m "İlk sürüm: BorsaNova Canlı Kripto Terminali"
