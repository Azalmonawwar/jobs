"use client"
import { Briefcase, Building2, FileText, LayoutDashboard, Search, Settings, User, Users } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface StudentDashboardProps {
  user: any; // Replace 'any' with a more specific type if available
}

export default function StudentDashboard({ user }: StudentDashboardProps) {
  // Mock student data
  console.log({ user })

  const student = {
    id: 1,
    name: user?.student?.name.toUpperCase() || "John Smith",
    email: user?.student?.email || "john.smith@example.com",
    course: user?.student?.course || "Computer Science",
    graduationYear: user?.student?.graduationYear || "2023",
    skills: user?.student?.skills || ["JavaScript", "React", "Node.js", "Python", "SQL"],
    status: user?.student?.status || "Searching",
    applications: [
      {
        id: 1,
        jobTitle: "Frontend Developer",
        company: "TechCorp Inc.",
        status: "Applied",
        date: "May 15, 2023",
      },
      {
        id: 2,
        jobTitle: "Web Developer",
        company: "InnovateTech",
        status: "Interview",
        date: "May 10, 2023",
      },
      {
        id: 3,
        jobTitle: "Software Engineer",
        company: "ServerPro Solutions",
        status: "Rejected",
        date: "Apr 28, 2023",
      },
      {
        id: 4,
        jobTitle: "React Developer",
        company: "Design Masters",
        status: "Applied",
        date: "May 18, 2023",
      },
    ],
    recommendedJobs: [
      {
        id: 1,
        title: "JavaScript Developer",
        company: "CloudNative Inc.",
        location: "Remote",
        type: "Full-time",
        match: 95,
      },
      {
        id: 2,
        title: "Frontend Engineer",
        company: "DataViz Corp",
        location: "San Francisco, CA",
        type: "Full-time",
        match: 90,
      },
      {
        id: 3,
        title: "Full Stack Developer",
        company: "TechCorp Inc.",
        location: "New York, NY",
        type: "Full-time",
        match: 85,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Briefcase className="h-6 w-6" />
            <span className="hidden md:inline-block">College Placement Portal - Students</span>
          </div>
          <div className="ml-auto flex items-center gap-4">

            <Avatar>
              <AvatarImage src={`https://ui-avatars.com/api/?name=${student?.name}`} alt={student?.name} />
              <AvatarFallback>
                {student?.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
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
                  href="/student"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/job"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Briefcase className="h-4 w-4" />
                  Browse Jobs
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Applications
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {student.applications.length}
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${student?.name}`} alt={student?.name} />
                  <AvatarFallback>
                    {student?.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {student?.name.split(" ")[0]}</h1>
                  <p className="text-muted-foreground">
                    {student?.course} • Class of {student?.graduationYear}
                  </p>
                </div>
              </div>
              <Button className="mt-4 md:mt-0">Update Profile</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{student?.applications?.length}</div>
                  <p className="text-xs text-muted-foreground">2 in progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Scheduled for next week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">85%</div>
                  </div>
                  <Progress value={85} className="mt-2" />
                  <p className="mt-2 text-xs text-muted-foreground">Add more skills to improve</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Based on your profile</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-7">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Your Applications</CardTitle>
                  <CardDescription>Track the status of your job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Applied On</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {student.applications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell className="font-medium">{application.jobTitle}</TableCell>
                          <TableCell>{application.company}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                application?.status === "Applied"
                                  ? "outline"
                                  : application?.status === "Interview"
                                    ? "default"
                                    : "secondary"
                              }
                              className={
                                application?.status === "Rejected" ? "bg-destructive text-destructive-foreground" : ""
                              }
                            >
                              {application?.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{application.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/jobs">Browse More Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>


            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Skills</CardTitle>
                <CardDescription>Skills listed on your profile that employers can see</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Add Skills
                </Button>
                <Button size="sm">Edit Skills</Button>
              </CardFooter>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
