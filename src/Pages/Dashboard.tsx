import { useState, useEffect, useCallback } from 'react';
import type { IPortfolioItem, ICoinData } from '../Interfaces/ITerminal';
import TerminalForm from '../Components/TerminalForm';
import TerminalList from '../Components/TerminalList';

export default function Dashboard() {
  const [apiCoins, setApiCoins] = useState<ICoinData[]>([]);
  const [usdToTry, setUsdToTry] = useState<number>(32.50); // Varsayılan kur
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  const [portfolio, setPortfolio] = useState<IPortfolioItem[]>([]);
  const [editingItem, setEditingItem] = useState<IPortfolioItem | null>(null);

  // Veri Çekme Fonksiyonu
  const fetchData = useCallback(async () => {
    setRefreshing(true);
    try {
      // 1. Döviz Kurunu Çek (CORS destekli döviz API'si)
      const exResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const exData = await exResponse.json();
      setUsdToTry(exData.rates.TRY);

      // 2. Kripto Verilerini Çek (CORS dostu Coinlore API'si)
      const cryptoResponse = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=20');
      const cryptoData = await cryptoResponse.json();
      
      // Coinlore verisini bizim ICoinData arayüzümüze uyduruyoruz
      const formatted: ICoinData[] = cryptoData.data.map((c: any) => ({
        id: c.id,
        symbol: c.symbol,
        name: c.name,
        priceUsd: c.price_usd,
        changePercent24Hr: c.percent_change_24h || "0"
      }));

      setApiCoins(formatted);
      setLastUpdated(new Date().toLocaleTimeString('tr-TR'));
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Opsiyonel: Hata durumunda boş veri dönmesini engellemek için alert eklenebilir.
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // CRUD
  const handleAdd = (newItem: Omit<IPortfolioItem, 'id'>) => {
    setPortfolio([{ ...newItem, id: crypto.randomUUID() }, ...portfolio]);
  };

  const handleUpdate = (updatedData: Omit<IPortfolioItem, 'id'>) => {
    if (!editingItem) return;
    setPortfolio(portfolio.map(item => item.id === editingItem.id ? { ...updatedData, id: item.id } : item));
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
  };

  // Toplam Değer Hesaplama (USD ve TRY)
  const totalUsd = portfolio.reduce((total, item) => {
    const coin = apiCoins.find(c => c.id === item.coinId);
    return total + (Number(coin?.priceUsd || 0) * item.amount);
  }, 0);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#020617]">
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-purple-400 font-mono tracking-widest animate-pulse">BORSANOVA SİSTEMİ BAŞLATILIYOR...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 min-h-screen">
      <header className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800/60 pb-8">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
            BORSA<span className="text-purple-500">NOVA</span>
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> CANLI VERİ
            </span>
            <span className="text-slate-500 text-xs font-mono">Son Güncelleme: {lastUpdated}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="glass-panel px-6 py-3 rounded-2xl">
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Portföy Değeri</p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-mono text-white">${totalUsd.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              <span className="text-sm text-purple-400 font-mono">₺{(totalUsd * usdToTry).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          
          <button 
            onClick={fetchData} 
            disabled={refreshing}
            className={`p-4 rounded-2xl glass-panel hover:bg-slate-800 transition-all ${refreshing ? 'animate-spin opacity-50' : ''}`}
            title="Verileri Yenile"
          >
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-4">
          <TerminalForm apiCoins={apiCoins} onSubmit={editingItem ? handleUpdate : handleAdd} editingItem={editingItem} />
        </div>
        <div className="xl:col-span-8">
           <TerminalList items={portfolio} apiCoins={apiCoins} usdToTry={usdToTry} onDelete={handleDelete} onEdit={setEditingItem} />
        </div>
      </div>
    </div>
  );
}