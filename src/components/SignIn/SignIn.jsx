import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
      

 const SignIn  = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-100 px-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-lg border-none rounded-2xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Create your account
          </CardTitle>
          <CardDescription className="text-gray-500">
            Sign up to manage your tasks and stay organized.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="space-y-3 pt-2">
              <Button type="submit" className="w-full text-base">
                Create Account
              </Button>
            </div>

            <div className="pt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to='/login'
                className="text-blue-600 hover:underline">
                Login here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn
