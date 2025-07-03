import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const Contact = () => {
  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      toast.success(`Thank you ${name} will be in touch with you shortly`)
    } catch (error) {

    }
  }
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background px-4 dark:bg-gray-800">
      <Card className="w-full max-w-2xl shadow-xl dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 " method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className='bg-white backdrop-blur text-black'
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              required

              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message..." rows={4} />
            </div>

            <Button 
            variant='default'
            type="submit" 
            className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact
