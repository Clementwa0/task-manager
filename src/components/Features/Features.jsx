import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LucideRocket, LucideShieldCheck, LucideSmartphone } from "lucide-react"

const features = [
  {
    icon: <LucideRocket className="w-6 h-6 text-primary" />,
    title: "Fast Performance",
    description: "Experience lightning-fast loading times and smooth user interactions.",
  },
  {
    icon: <LucideShieldCheck className="w-6 h-6 text-primary" />,
    title: "Secure by Design",
    description: "Built with modern security standards to keep your data safe.",
  },
  {
    icon: <LucideSmartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Friendly",
    description: "Optimized for all devices — from phones to desktops.",
  },
]

const Features = () => {
  return (
    <section className="min-h-screen w-full bg-background px-4 py-12 flex items-center justify-center dark:bg-gray-800">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
          <p className="text-muted-foreground text-sm">
            What makes our platform powerful, secure, and user-friendly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="flex items-center gap-3">
                {feature.icon}
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
