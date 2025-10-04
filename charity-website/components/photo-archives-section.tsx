"use client"

import { useState } from "react"

export function PhotoArchivesSection() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filters = ["ALL", "HOPE PIPES", "SPRINKLE PIPES", "SPRAY NOZZLE", "IRRIGATION PIPES"]

  const photos = [
    "/placeholder-55hgo.png",
    "/placeholder-dfy2z.png",
    "/placeholder.svg?height=250&width=300",
    "/placeholder.svg?height=250&width=300",
    "/placeholder.svg?height=250&width=300",
    "/placeholder.svg?height=250&width=300",
    "/placeholder.svg?height=250&width=300",
    "/placeholder.svg?height=250&width=300",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Photo <span className="text-teal-600">Archives</span>
          </h2>
          <p className="text-gray-600 text-pretty">Social Services community settlement houses provide integrated.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  activeFilter === filter ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={photo || "/placeholder.svg"}
                alt={`Archive photo ${index + 1}`}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
