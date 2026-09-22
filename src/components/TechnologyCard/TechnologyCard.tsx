import type { Technology } from "../../types"

interface TechnologyCardProps {
  technology: Technology
  onAdd: (technology: Technology) => void
  isAdded: boolean
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
          {technology.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
  <div className="flex text-sm text-yellow-400">
    ★ ★ ★ ★ ★
  </div>

  <span className="text-sm font-bold text-gray-700">
    {technology.rating}
  </span>

  <span className="text-xs text-gray-400">
    / 5.0
  </span>
</div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "gradient-bg text-white hover:scale-[1.02] hover:shadow-lg"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard