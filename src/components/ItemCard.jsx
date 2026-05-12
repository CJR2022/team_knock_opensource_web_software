export default function ItemCard({ item }) {
  const isAvailable = item.available > 0;

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-zinc-200/50 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)]">
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-zinc-100 rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold tracking-tight text-zinc-950 truncate">
          {item.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"/>
            가능 {item.available}
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 text-[11px] font-medium">
            <span className="inline-block rounded-full h-1.5 w-1.5 bg-rose-500"/>
            대여중 {item.inUse}
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 text-[11px] font-medium">
            <span className="inline-block rounded-full h-1.5 w-1.5 bg-zinc-300"/>
            준비중 {item.preparing}
          </span>
        </div>
      </div>

      <button
        disabled={!isAvailable}
        className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          isAvailable
            ? "bg-zinc-950 text-white"
            : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
        }`}
      >
        {isAvailable ? "대여" : "불가"}
      </button>
    </div>
  );
}
