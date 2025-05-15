"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Briefcase, Building2, Download, FileText, LayoutDashboard, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Placement by industry data
const industryData = [
  { name: "Technology", value: 45 },
  { name: "Finance", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Education", value: 10 },
  { name: "Retail", value: 5 },
  { name: "Other", value: 5 },
]

// Placement by month data
const monthlyData = [
  { name: "Jan", placements: 12 },
  { name: "Feb", placements: 15 },
  { name: "Mar", placements: 18 },
  { name: "Apr", placements: 14 },
  { name: "May", placements: 22 },
  { name: "Jun", placements: 26 },
  { name: "Jul", placements: 20 },
  { name: "Aug", placements: 24 },
  { name: "Sep", placements: 28 },
  { name: "Oct", placements: 32 },
  { name: "Nov", placements: 30 },
  { name: "Dec", placements: 25 },
]

// Placement by course data
const courseData = [
  { name: "Computer Science", students: 45, placements: 38 },
  { name: "Data Science", students: 30, placements: 25 },
  { name: "UX Design", students: 25, placements: 20 },
  { name: "Software Engineering", students: 35, placements: 30 },
  { name: "Cybersecurity", students: 20, placements: 15 },
  { name: "Digital Marketing", students: 15, placements: 10 },
]

// Colors for pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("year")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Briefcase className="h-6 w-6" />
            <span className="hidden md:inline-block">College Placement Portal - Reports</span>
          </div>
          <div className="ml-auto flex items-center gap-4">

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>
        </div>
      </div>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/jobs"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Briefcase className="h-4 w-4" />
                  Jobs

                </Link>
                <Link
                  href="/students"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Users className="h-4 w-4" />
                  Students

                </Link>
                <Link
                  href="/companies"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Building2 className="h-4 w-4" />
                  Companies

                </Link>
                <Link
                  href="/reports"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Reports
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <DashboardShell>
          <DashboardHeader heading="Reports" text="View placement statistics and analytics">
            <div className="flex items-center gap-2">
              <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download report</span>
              </Button>
            </div>
          </DashboardHeader>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">265</div>
                <p className="text-xs text-muted-foreground">+18% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+5% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$85,420</div>
                <p className="text-xs text-muted-foreground">+3.2% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Partner Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+3 from previous period</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="industry">By Industry</TabsTrigger>
              <TabsTrigger value="course">By Course</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Placements by Industry</CardTitle>
                    <CardDescription>Distribution of placements across different industries</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={industryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {industryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Placements</CardTitle>
                    <CardDescription>Number of placements per month over the past year</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={monthlyData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="placements" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Placement Rate by Course</CardTitle>
                  <CardDescription>Comparison of students and successful placements by course</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={courseData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="#8884d8" name="Total Students" />
                        <Bar dataKey="placements" fill="#82ca9d" name="Placed Students" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="industry" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Placements by Industry</CardTitle>
                  <CardDescription>Detailed breakdown of placements across different industries</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={industryData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {industryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="course" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Rate by Course</CardTitle>
                  <CardDescription>Detailed comparison of students and successful placements by course</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={courseData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={150} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="#8884d8" name="Total Students" />
                        <Bar dataKey="placements" fill="#82ca9d" name="Placed Students" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Timeline</CardTitle>
                  <CardDescription>Monthly placement trends over the past year</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="placements" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DashboardShell>
      </div>
    </div>
  )
}
