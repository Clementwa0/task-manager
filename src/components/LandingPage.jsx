import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { features } from '@/constants'

const LandingPage = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
      {/* Hero Section */}
      <Card className="w-full max-w-6xl text-center py-20 px-6 mt-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          TaskManager-Stay Focused. Get More Done.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your all-in-one productivity tool for personal and team task management.
        </p>
        <Link to="/task-manager">
          <Button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Get Started Now
          </Button>
        </Link>
      </Card>

      {/* Features Section */}
<section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-white shadow-lg rounded-2xl mt-10">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to take control of your day?
        </h2>
        <Link to="/task-manager">
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Start Managing Tasks
          </Button>
        </Link>
      </section>
    </div>
  )
}

export default LandingPage
