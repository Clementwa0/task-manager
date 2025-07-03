import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background px-4 dark:bg-gray-800">
      <Card className="w-full max-w-3xl shadow-xl dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-center">About Us</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm leading-relaxed space-y-4">
          <p>
            Welcome to our platform! We’re a team of passionate developers and creators dedicated to building high-quality digital experiences.
          </p>
          <p>
            Our mission is to make technology more accessible and empowering for everyone — whether you're a business owner, student, or developer.
          </p>
          <p>
            With a focus on innovation, usability, and simplicity, we build solutions that are modern, scalable, and beautifully designed.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default About
