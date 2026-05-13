/* flex-wrap은 가로로 넘치면 아래로 내려줌 */
export default function CategorySidebar({ categories }) {
  return (
    <div className="mb-4"> 
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="category-btn"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
