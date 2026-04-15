import type { IPortfolioItem, ICoinData } from '../Interfaces/ITerminal';

interface Props {
  items: IPortfolioItem[];
  apiCoins: ICoinData[];
  usdToTry: number;
  onDelete: (id: string) => void;
  onEdit: (item: IPortfolioItem) => void;
}

export default function TerminalList({ items, apiCoins, usdToTry, onDelete, onEdit }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item) => {
        const coin = apiCoins.find(c => c.id === item.coinId);
        const currentPriceUsd = Number(coin?.priceUsd || 0);
        const currentPriceTry = currentPriceUsd * usdToTry;
        const totalValueTry = currentPriceTry * item.amount;
        const profitLossTry = (currentPriceTry - (item.entryPrice * usdToTry)) * item.amount;

        return (
          <div key={item.id} className="glass-panel p-6 rounded-3xl crypto-card-hover border-slate-800/40 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {coin?.symbol[0]}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{coin?.name}</h3>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">{item.amount} {coin?.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-mono font-bold">${currentPriceUsd.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <p className="text-purple-400 font-mono text-xs">₺{currentPriceTry.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-800/40">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Toplam (TRY)</p>
                <p className="text-sm font-mono text-white">₺{totalValueTry.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</p>
              </div>
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-800/40">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Kar / Zarar</p>
                <p className={`text-sm font-mono font-bold ${profitLossTry >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {profitLossTry >= 0 ? '+' : ''}₺{profitLossTry.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => onEdit(item)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl text-xs font-bold transition-all">DÜZENLE</button>
              <button onClick={() => onDelete(item.id)} className="flex-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 py-2.5 rounded-xl text-xs font-bold transition-all">SİL</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}