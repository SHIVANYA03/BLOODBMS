"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "A+",
    available: 450,
    critical: 100,
  },
  {
    name: "A-",
    available: 180,
    critical: 100,
  },
  {
    name: "B+",
    available: 320,
    critical: 100,
  },
  {
    name: "B-",
    available: 120,
    critical: 100,
  },
  {
    name: "AB+",
    available: 150,
    critical: 100,
  },
  {
    name: "AB-",
    available: 80,
    critical: 100,
  },
  {
    name: "O+",
    available: 650,
    critical: 100,
  },
  {
    name: "O-",
    available: 400,
    critical: 100,
  },
]

export function BloodLevelChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} units`}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="available" name="Available Units" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="critical" name="Critical Level" fill="#f87171" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
