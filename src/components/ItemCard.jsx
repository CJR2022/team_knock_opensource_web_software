export default function ItemCard({ item }) {
  const isAvailable = item.available > 0;

  return (
    <div className="card flex items-center gap-3 p-3">
      <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-gray-100 rounded-xl">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-950">{item.name}</h3>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="badge badge-green">
            <span className="inline-block rounded-full h-1.5 w-1.5 bg-emerald-500" />
            가능 {item.available}
          </span>
          <span className="badge badge-red">
            <span className="inline-block rounded-full h-1.5 w-1.5 bg-rose-500" />
            대여중 {item.inUse}
          </span>
          <span className="badge badge-gray">
            <span className="inline-block rounded-full h-1.5 w-1.5 bg-gray-300" />
            준비중 {item.preparing}
          </span>
        </div>
      </div>

      <button
        disabled={!isAvailable}
        className={`btn shrink-0 ${isAvailable ? "btn-primary" : "btn-disabled"}`}
      >
        {isAvailable ? "대여" : "불가"}
      </button>
    </div>
  );
}
