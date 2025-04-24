"use client"

import { useEffect, useRef } from "react"

// Mock data for blood type distribution
const bloodTypeData = [
  { type: "A+", units: 45, color: "#ef4444" },
  { type: "O+", units: 56, color: "#f97316" },
  { type: "B+", units: 28, color: "#3b82f6" },
  { type: "AB+", units: 8, color: "#8b5cf6" },
  { type: "A-", units: 15, color: "#ec4899" },
  { type: "O-", units: 12, color: "#14b8a6" },
  { type: "B-", units: 9, color: "#84cc16" },
  { type: "AB-", units: 4, color: "#f59e0b" },
]

export function BloodTypeDistribution() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Calculate total units
    const totalUnits = bloodTypeData.reduce((sum, item) => sum + item.units, 0)

    // Draw pie chart
    let startAngle = 0
    bloodTypeData.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.units) / totalUnits

      ctx.fillStyle = item.color
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, canvas.height / 2)
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) / 2 - 10,
        startAngle,
        startAngle + sliceAngle,
      )
      ctx.closePath()
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center circle (donut hole)
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 4, 0, 2 * Math.PI)
    ctx.fill()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Blood Type Distribution</h3>
        <div className="space-y-4">
          {bloodTypeData.map((item) => (
            <div key={item.type} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.units}</span>
                <span className="text-gray-500 text-sm">units</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 flex items-center justify-center">
        <div className="w-full max-w-[300px] aspect-square">
          <canvas ref={canvasRef} className="w-full h-full" style={{ maxHeight: "300px" }} />
        </div>
      </div>
    </div>
  )
}
