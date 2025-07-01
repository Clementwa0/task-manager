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

const Forgot = ({ className, ...props }) => {
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
            Forgot your password?
          </CardTitle>
          <CardDescription className="text-gray-500">
            Enter your email and we’ll send you a password reset link.
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

            <Button type="submit" className="w-full text-base">
              Send Reset Link
            </Button>

            <div className="pt-4 text-center text-sm text-gray-600">
              <a href="/login" className="text-blue-600 underline hover:opacity-80">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Forgot
