export default function CategorySidebar({ categories }) {
  return (
    <div className="mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex gap-2 w-max">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-white text-zinc-600 border border-zinc-200/60"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
