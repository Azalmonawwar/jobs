"use client"

import { useState } from "react"
import {
  Briefcase,
  Building2,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddStudentForm } from "@/components/add-student-form"
import { AddJobForm } from "@/components/add-job-form"
import { AddCompanyForm } from "@/components/add-company-form"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("jobs")
  const [studentDialogOpen, setStudentDialogOpen] = useState(false)
  const [jobDialogOpen, setJobDialogOpen] = useState(false)
  const [companyDialogOpen, setCompanyDialogOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Briefcase className="h-6 w-6" />
            <span className="hidden md:inline-block">College Placement Portal</span>
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
                  href="#"
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
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
                </Link>
                <Link
                  href="/students"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Users className="h-4 w-4" />
                  Students
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">24</Badge>
                </Link>
                <Link
                  href="/companies"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Building2 className="h-4 w-4" />
                  Companies
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">8</Badge>
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
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">+28 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Jobs Filled</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98</div>
                  <p className="text-xs text-muted-foreground">69% placement rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">235</div>
                  <p className="text-xs text-muted-foreground">+42 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Partner Companies</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Add New Job</CardTitle>
                  <CardDescription>Create a new job listing for companies</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Add Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Job</DialogTitle>
                        <DialogDescription>Fill out the form below to create a new job listing.</DialogDescription>
                      </DialogHeader>
                      <AddJobForm onSubmit={() => setJobDialogOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Add New Student</CardTitle>
                  <CardDescription>Register a new student for placement</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Dialog open={studentDialogOpen} onOpenChange={setStudentDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Add Student
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>Fill out the form below to register a new student.</DialogDescription>
                      </DialogHeader>
                      <AddStudentForm onSubmit={() => setStudentDialogOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Add New Company</CardTitle>
                  <CardDescription>Register a new company partner</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Dialog open={companyDialogOpen} onOpenChange={setCompanyDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Add Company
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Company</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to register a new company partner.
                        </DialogDescription>
                      </DialogHeader>
                      <AddCompanyForm onSubmit={() => setCompanyDialogOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="jobs" className="space-y-4" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="companies">Companies</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ChevronDown className="h-4 w-4" />
                    Filter
                  </Button>
                  <Dialog
                    open={
                      (activeTab === "jobs" && jobDialogOpen) ||
                      (activeTab === "students" && studentDialogOpen) ||
                      (activeTab === "companies" && companyDialogOpen)
                    }
                    onOpenChange={(open) => {
                      if (activeTab === "jobs") setJobDialogOpen(open)
                      else if (activeTab === "students") setStudentDialogOpen(open)
                      else if (activeTab === "companies") setCompanyDialogOpen(open)
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button size="sm" className="h-8 gap-1">
                        <Plus className="h-4 w-4" />
                        Add {activeTab === "jobs" ? "Job" : activeTab === "students" ? "Student" : "Company"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          Add New {activeTab === "jobs" ? "Job" : activeTab === "students" ? "Student" : "Company"}
                        </DialogTitle>
                        <DialogDescription>
                          Fill out the form below to create a new{" "}
                          {activeTab === "jobs"
                            ? "job listing"
                            : activeTab === "students"
                              ? "student profile"
                              : "company partner"}
                          .
                        </DialogDescription>
                      </DialogHeader>
                      {activeTab === "jobs" && <AddJobForm onSubmit={() => setJobDialogOpen(false)} />}
                      {activeTab === "students" && <AddStudentForm onSubmit={() => setStudentDialogOpen(false)} />}
                      {activeTab === "companies" && <AddCompanyForm onSubmit={() => setCompanyDialogOpen(false)} />}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <TabsContent value="jobs" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Jobs</CardTitle>
                    <CardDescription>Manage all job listings and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Job Title</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Posted Date</TableHead>
                          <TableHead>Applications</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Frontend Developer</TableCell>
                          <TableCell>TechCorp Inc.</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Filled</Badge>
                          </TableCell>
                          <TableCell>Apr 23, 2023</TableCell>
                          <TableCell>18</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">UX Designer</TableCell>
                          <TableCell>Design Masters</TableCell>
                          <TableCell>
                            <Badge variant="outline">Open</Badge>
                          </TableCell>
                          <TableCell>May 12, 2023</TableCell>
                          <TableCell>7</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Backend Engineer</TableCell>
                          <TableCell>ServerPro Solutions</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Filled</Badge>
                          </TableCell>
                          <TableCell>Mar 02, 2023</TableCell>
                          <TableCell>24</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Data Analyst</TableCell>
                          <TableCell>DataViz Corp</TableCell>
                          <TableCell>
                            <Badge variant="outline">Open</Badge>
                          </TableCell>
                          <TableCell>May 18, 2023</TableCell>
                          <TableCell>5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Product Manager</TableCell>
                          <TableCell>InnovateTech</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Filled</Badge>
                          </TableCell>
                          <TableCell>Feb 14, 2023</TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View All Jobs
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="students" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Students</CardTitle>
                    <CardDescription>Manage all registered students and their placement status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Graduation</TableHead>
                          <TableHead>Applications</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">John Smith</TableCell>
                          <TableCell>Computer Science</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Placed</Badge>
                          </TableCell>
                          <TableCell>2023</TableCell>
                          <TableCell>4</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Emily Johnson</TableCell>
                          <TableCell>UX Design</TableCell>
                          <TableCell>
                            <Badge variant="outline">Searching</Badge>
                          </TableCell>
                          <TableCell>2023</TableCell>
                          <TableCell>6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Michael Brown</TableCell>
                          <TableCell>Data Science</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Placed</Badge>
                          </TableCell>
                          <TableCell>2022</TableCell>
                          <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sarah Davis</TableCell>
                          <TableCell>Software Engineering</TableCell>
                          <TableCell>
                            <Badge variant="outline">Searching</Badge>
                          </TableCell>
                          <TableCell>2023</TableCell>
                          <TableCell>8</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">David Wilson</TableCell>
                          <TableCell>Cybersecurity</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Placed</Badge>
                          </TableCell>
                          <TableCell>2022</TableCell>
                          <TableCell>2</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View All Students
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="companies" className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Companies</CardTitle>
                    <CardDescription>Manage all partner companies and their job listings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Company Name</TableHead>
                          <TableHead>Industry</TableHead>
                          <TableHead>Active Jobs</TableHead>
                          <TableHead>Total Hires</TableHead>
                          <TableHead>Partnership Since</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">TechCorp Inc.</TableCell>
                          <TableCell>Technology</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>2019</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Design Masters</TableCell>
                          <TableCell>Design</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>2020</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">ServerPro Solutions</TableCell>
                          <TableCell>Technology</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>15</TableCell>
                          <TableCell>2018</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">DataViz Corp</TableCell>
                          <TableCell>Data Analytics</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>6</TableCell>
                          <TableCell>2021</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">InnovateTech</TableCell>
                          <TableCell>Technology</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>9</TableCell>
                          <TableCell>2020</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View All Companies
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
