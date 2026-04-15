// API'den çekilecek canlı verinin modeli
export interface ICoinData {
  id: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
}

// Kullanıcının yapacağı CRUD işleminin modeli
export interface IPortfolioItem {
  id: string; // Portföy kayıt ID'si (Benzersiz)
  coinId: string; // API'deki coinin ID'si ile eşleşecek
  amount: number; // Sahip olunan miktar
  entryPrice: number; // Alış fiyatı
  strategyNote: string; // Kullanıcı notu
  riskLevel: 'Düşük' | 'Orta' | 'Yüksek';
}