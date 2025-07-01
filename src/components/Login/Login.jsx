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

const Login = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-lg border-none rounded-2xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Login to your account
          </CardTitle>
          <CardDescription className="text-gray-500">
            Enter your email below to access your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                > 
                  Forgot password?

                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>

            <div className="space-y-3 pt-2">
              <Button type="submit" className="w-full text-base">
                Login
              </Button>
            </div>

            <div className="pt-4 text-center text-sm text-gray-600">
              Don’t have an account?{' '}
                <Link to='/signup'
                 className="text-blue-600 hover:underline">
                  Create an account
                </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
