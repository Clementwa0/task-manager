import React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <section className="min-h-screen w-full bg-background flex items-center justify-center px-4 dark:bg-gray-800">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          Organize Your Workflow, Boost Your Productivity
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          A modern task manager that helps you stay focused and efficient — anywhere, anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link to="/task-manager">
            <Button className="w-full sm:w-auto text-base">Get Started</Button>
          </Link>
          <Link to="/features">
            <Button variant="outline" className="w-full sm:w-auto text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
