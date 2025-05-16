"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Briefcase, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { userLogin } from "@/lib/action/user.action"

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.enum(["admin", "student", "company"], {
    required_error: "Please select a user type.",
  }),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "student",
    },
  })

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    console.log(data)
    try {
      const login = await userLogin(data.email, data.password, data.role);
      if (data.role === "student") {
        router.push("/student")
      }
      else if (data.role === "company") {
        router.push("/company")
      }
      else if (data.role === "admin") {
        router.push("/admin")
      }
      console.log("Login response:", login)
    } catch (error) {
      console.error("Login error:", error)

    }
    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Briefcase className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Job Placement Portal</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Login As</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-1">
                        <div className="flex flex-1 items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="student" id="student" />
                          <Label htmlFor="student" className="flex-1 cursor-pointer">
                            Student
                          </Label>
                        </div>
                        <div className="flex flex-1 items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company" className="flex-1 cursor-pointer">
                            Company
                          </Label>
                        </div>
                        <div className="flex flex-1 items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="admin" id="admin" />
                          <Label htmlFor="admin" className="flex-1 cursor-pointer">
                            Admin
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="password" placeholder="••••••••" {...field} />
                        <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Forgot your password?
            </a>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
