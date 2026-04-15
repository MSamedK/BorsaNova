import { useState, useEffect } from 'react';
import type { IPortfolioItem, ICoinData } from '../Interfaces/ITerminal';

interface Props {
  apiCoins: ICoinData[];
  onSubmit: (item: Omit<IPortfolioItem, 'id'>) => void;
  editingItem?: IPortfolioItem | null;
}

export default function TerminalForm({ apiCoins, onSubmit, editingItem }: Props) {
  const [coinId, setCoinId] = useState(apiCoins[0]?.id || '');
  const [amount, setAmount] = useState<number | ''>('');
  const [entryPrice, setEntryPrice] = useState<number | ''>('');
  const [strategyNote, setStrategyNote] = useState('');
  const [riskLevel, setRiskLevel] = useState<IPortfolioItem['riskLevel']>('Orta');

  useEffect(() => {
    if (editingItem) {
      setCoinId(editingItem.coinId);
      setAmount(editingItem.amount);
      setEntryPrice(editingItem.entryPrice);
      setStrategyNote(editingItem.strategyNote);
      setRiskLevel(editingItem.riskLevel);
    } else if (apiCoins.length > 0 && !coinId) {
      setCoinId(apiCoins[0].id);
    }
  }, [editingItem, apiCoins]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coinId || amount === '' || entryPrice === '') return;
    
    onSubmit({ coinId, amount: Number(amount), entryPrice: Number(entryPrice), strategyNote, riskLevel });
    
    if (!editingItem) {
      setAmount(''); setEntryPrice(''); setStrategyNote(''); setRiskLevel('Orta');
    }
  };

  const inputClass = "w-full bg-slate-950/80 border border-slate-700/50 rounded-lg px-4 py-2.5 text-slate-200 focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder-slate-600 font-mono text-sm";
  const labelClass = "block text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl relative">
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 rounded-t-2xl"></div>
      
      <h2 className="text-xl font-light mb-6 text-white flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        {editingItem ? 'Pozisyonu Güncelle' : 'Yeni Pozisyon Aç'}
      </h2>
      
      <div className="space-y-5">
        <div>
          <label className={labelClass}>Varlık Seçimi (Canlı API)</label>
          <select value={coinId} onChange={(e) => setCoinId(e.target.value)} className={inputClass} disabled={apiCoins.length === 0}>
            {apiCoins.map(coin => (
              <option key={coin.id} value={coin.id} className="bg-slate-900">
                {coin.name} ({coin.symbol}) - ${Number(coin.priceUsd).toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Miktar</label>
            <input type="number" step="any" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className={inputClass} placeholder="Örn: 0.5" required />
          </div>
          <div>
            <label className={labelClass}>Giriş Fiyatı ($)</label>
            <input type="number" step="any" value={entryPrice} onChange={(e) => setEntryPrice(Number(e.target.value))} className={inputClass} placeholder="Örn: 65000" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelClass}>Strateji / Hedef Notu</label>
            <input type="text" value={strategyNote} onChange={(e) => setStrategyNote(e.target.value)} className={inputClass} placeholder="Direnç kırılımı beklentisi..." required />
          </div>
        </div>

        <div>
           <label className={labelClass}>Risk Profili</label>
           <div className="flex gap-2">
             {['Düşük', 'Orta', 'Yüksek'].map(risk => (
               <button type="button" key={risk} onClick={() => setRiskLevel(risk as IPortfolioItem['riskLevel'])}
                 className={`flex-1 py-2 text-xs uppercase tracking-wider rounded-lg border transition-all ${riskLevel === risk ? 'bg-purple-900/40 border-purple-500 text-purple-200' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}>
                 {risk}
               </button>
             ))}
           </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs mt-2 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
          {editingItem ? 'VERİLERİ SENKRONİZE ET' : 'PORTFÖYE EKLE'}
        </button>
      </div>
    </form>
  );
}