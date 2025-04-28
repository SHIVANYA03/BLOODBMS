import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentActivity = [
  {
    id: 1,
    type: "donation",
    name: "John Smith",
    bloodType: "A+",
    date: "2023-04-28",
    amount: "450ml",
    status: "completed",
  },
  {
    id: 2,
    type: "request",
    name: "City Hospital",
    bloodType: "O-",
    date: "2023-04-27",
    amount: "2 units",
    status: "fulfilled",
  },
  {
    id: 3,
    type: "donation",
    name: "Sarah Johnson",
    bloodType: "B+",
    date: "2023-04-26",
    amount: "450ml",
    status: "completed",
  },
  {
    id: 4,
    type: "request",
    name: "Memorial Hospital",
    bloodType: "AB+",
    date: "2023-04-25",
    amount: "3 units",
    status: "pending",
  },
  {
    id: 5,
    type: "donation",
    name: "Michael Brown",
    bloodType: "O+",
    date: "2023-04-24",
    amount: "450ml",
    status: "completed",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivity.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={activity.name} />
            <AvatarFallback>
              {activity.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.name}
              <Badge variant={activity.type === "donation" ? "default" : "secondary"} className="ml-2">
                {activity.type === "donation" ? "Donation" : "Request"}
              </Badge>
            </p>
            <p className="text-sm text-muted-foreground">
              {activity.bloodType} • {activity.amount} • {activity.date}
            </p>
          </div>
          <div className="ml-auto">
            <Badge
              variant={
                activity.status === "completed" || activity.status === "fulfilled"
                  ? "success"
                  : activity.status === "pending"
                    ? "outline"
                    : "destructive"
              }
            >
              {activity.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
