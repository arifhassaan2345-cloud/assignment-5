import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import technologiesData from "../../data/technologies.json"
import type { Technology } from "../../types"
import TechnologyCard from "../TechnologyCard/TechnologyCard"

const technologies = technologiesData as Technology[]

function TechnologySection() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])
  const [loading,setLoading]=useState(true)
  useEffect(() =>{
    const timer=setTimeout(() => {
      setLoading(false)
    },1000)
    return ()=> clearTimeout(timer)
  }, [])
    if (loading) {
  return (
    <section className="flex min-h-[400px] items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500"></div>

        <p className="mt-4 text-sm font-medium text-gray-500">
          Loading technologies...
        </p>
      </div>
    </section>
  )
}
    

  const addToStack = (technology: Technology) => {
  const alreadyAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  )

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`)
    return
  }

  setSelectedTechnologies((currentStack) => [
    ...currentStack,
    technology,
  ])

  toast.success('${technology.name} added to your stack!')
}

  const removeFromStack = (id: string) => {
  const technology = selectedTechnologies.find(
    (item) => item.id === id
  )

  setSelectedTechnologies(
    selectedTechnologies.filter((item) => item.id !== id)
  )

  if (technology) {
    toast.info(`${technology.name} removed from your stack`!)
  }
}

  const removeAll = () => {
    setSelectedTechnologies([])
    toast.info("All technologies removed from your stack!")
  }

  return (
    
    <><section
    id="technologies"
    className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Discover the technologies and tools you can use to build your
            ideal development stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Technology Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
    onAdd={addToStack}
    isAdded={selectedTechnologies.some(
      (item) => item.id === technology.id
    )}
  />
))}

          </div>

          {/* Your Stack */}
          <div
          id="your-stack"
          className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Your Stack
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedTechnologies.length} Technology Selected
                </p>
              </div>

              {selectedTechnologies.length > 0 && (
                <button
                  type="button"
                  onClick={removeAll}
                  className="text-sm font-semibold text-red-500 hover:text-red-600"
                >
                  Remove All
                </button>
              )}
            </div>

            {/* Empty State */}
            {selectedTechnologies.length === 0 && (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  🧩
                </div>

                <h4 className="font-semibold text-gray-700">
                  Your stack is empty
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Add technologies from the cards to build your ideal stack.
                </p>
              </div>
            )}

            {/* Selected Technologies */}
            <div className="mt-5 space-y-3">
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {technology.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromStack(technology.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
    <ToastContainer/>
    </>
  )
}

export default TechnologySection