"use client"

import { useState } from "react"
import { Briefcase, Building2, FileText, Filter, LayoutDashboard, Plus, Search, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddJobForm } from "@/components/add-job-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { applyJob } from "@/lib/action/user.action"
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        status: "Open",
        posted: "May 15, 2023",
        applications: 18,
        description: "We are looking for a skilled Frontend Developer to join our team...",
        requirements: "3+ years of experience with React, TypeScript, and modern frontend tools.",
    },
    {
        id: 2,
        title: "UX Designer",
        company: "Design Masters",
        location: "New York, NY",
        type: "Full-time",
        salary: "$85,000 - $110,000",
        status: "Open",
        posted: "May 12, 2023",
        applications: 7,
        description: "Join our design team to create beautiful user experiences...",
        requirements: "Portfolio showcasing UX work, experience with Figma and user research.",
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "ServerPro Solutions",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        status: "Filled",
        posted: "Mar 02, 2023",
        applications: 24,
        description: "Build scalable backend systems for our growing platform...",
        requirements: "Experience with Node.js, databases, and cloud infrastructure.",
    },
    {
        id: 4,
        title: "Data Analyst",
        company: "DataViz Corp",
        location: "Remote",
        type: "Contract",
        salary: "$70,000 - $90,000",
        status: "Open",
        posted: "May 18, 2023",
        applications: 5,
        description: "Help us make sense of our data and drive business decisions...",
        requirements: "SQL, Python, and data visualization experience required.",
    },
    {
        id: 5,
        title: "Product Manager",
        company: "InnovateTech",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        status: "Filled",
        posted: "Feb 14, 2023",
        applications: 12,
        description: "Lead product development for our flagship software...",
        requirements: "5+ years of product management experience in tech.",
    },
    {
        id: 6,
        title: "DevOps Engineer",
        company: "CloudNative Inc.",
        location: "Remote",
        type: "Full-time",
        salary: "$95,000 - $125,000",
        status: "Open",
        posted: "May 20, 2023",
        applications: 3,
        description: "Manage our cloud infrastructure and CI/CD pipelines...",
        requirements: "Experience with AWS, Kubernetes, and infrastructure as code.",
    },
]

export default function JobsPage({ jobs, student }: any) {
    const [jobDialogOpen, setJobDialogOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState<(typeof jobsData)[0] | null>(null)
    const [filterDialogOpen, setFilterDialogOpen] = useState(false)


    const apply = async (jobId: string) => {
        try {
            const response = await applyJob(jobId, student?._id)
            console.log(response)
        } catch (error) {

        }
    }
    return (
        <div className="flex min-h-screen flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <Briefcase className="h-6 w-6" />
                        <span className="hidden md:inline-block">College Placement Portal - Browse Job</span>
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
                <DashboardShell>
                    <DashboardHeader heading="Jobs" text="Browse job listings">

                    </DashboardHeader>

                    <Tabs defaultValue="all" className="space-y-4">
                        <div className="flex items-center justify-between">
                            <TabsList>
                                <TabsTrigger value="all">All Jobs</TabsTrigger>
                            </TabsList>
                            <div className="relative w-full max-w-sm">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search jobs..." className="pl-8" />
                            </div>
                        </div>

                        <TabsContent value="all" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {jobs?.map((job: any) => (
                                    <Card key={job?._id} className="overflow-hidden">
                                        <CardHeader className="p-4 pb-0">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <CardTitle className="line-clamp-1">{job?.title}</CardTitle>
                                                    <CardDescription className="line-clamp-1">{job?.location}</CardDescription>
                                                </div>

                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <div className="space-y-2 text-sm">

                                                <div className="font-medium"> Salary : {job?.salary}</div>
                                                <div className="line-clamp-2 text-muted-foreground">{job?.description}</div>
                                                <div className="flex items-center justify-between pt-2">
                                                    <div className="text-xs text-muted-foreground">Posted: {job?.date}</div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs font-medium">{job?.applicants?.length} applicants</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                                            <Button variant="outline" size="sm" onClick={() => setSelectedJob(job)}>
                                                View Details
                                            </Button>
                                            <Button size="sm" onClick={() => apply(job?._id)}>
                                                Apply
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                    </Tabs>


                </DashboardShell>
            </div>
        </div>
    )
}
