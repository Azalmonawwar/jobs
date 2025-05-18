"use client"

import { useState } from "react"
import { Briefcase, LayoutDashboard, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import Link from "next/link"

// Mock jobs data
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        status: "Open",
        applications: 18,
        posted: "May 15, 2023",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        description: "We are looking for a skilled Frontend Developer to join our team...",
        requirements: "3+ years of experience with React, TypeScript, and modern frontend tools.",
    },
    {
        id: 2,
        title: "Backend Engineer",
        status: "Filled",
        applications: 24,
        posted: "Mar 02, 2023",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        description: "Build scalable backend systems for our growing platform...",
        requirements: "Experience with Node.js, databases, and cloud infrastructure.",
    },
    {
        id: 3,
        title: "DevOps Engineer",
        status: "Open",
        applications: 7,
        posted: "May 20, 2023",
        location: "Remote",
        type: "Full-time",
        salary: "$95,000 - $125,000",
        description: "Manage our cloud infrastructure and CI/CD pipelines...",
        requirements: "Experience with AWS, Kubernetes, and infrastructure as code.",
    },
    {
        id: 4,
        title: "UX Designer",
        status: "Open",
        applications: 12,
        posted: "May 10, 2023",
        location: "New York, NY",
        type: "Full-time",
        salary: "$85,000 - $110,000",
        description: "Join our design team to create beautiful user experiences...",
        requirements: "Portfolio showcasing UX work, experience with Figma and user research.",
    },
    {
        id: 5,
        title: "Product Manager",
        status: "Filled",
        applications: 15,
        posted: "Apr 05, 2023",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description: "Lead product development for our flagship software...",
        requirements: "5+ years of product management experience in tech.",
    },
    {
        id: 6,
        title: "Data Analyst",
        status: "Open",
        applications: 9,
        posted: "May 18, 2023",
        location: "Remote",
        type: "Contract",
        salary: "$70,000 - $90,000",
        description: "Help us make sense of our data and drive business decisions...",
        requirements: "SQL, Python, and data visualization experience required.",
    },
]

export default function JobsPage({ jobs, companyId }: any) {
    const [jobDialogOpen, setJobDialogOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState<(typeof jobsData)[0] | null>(null)
    const [filterStatus, setFilterStatus] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    // Filter jobs based on status and search query
    const filteredJobs = jobsData.filter((job) => {
        const matchesStatus = filterStatus === "all" || job.status.toLowerCase() === filterStatus.toLowerCase()
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesStatus && matchesSearch
    })

    return (
        <div className="flex min-h-screen flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <Briefcase className="h-6 w-6" />
                        <span className="hidden md:inline-block">Job Placement Portal - Company</span>
                    </div>
                    <div className="ml-auto flex items-center gap-4">

                    </div>
                </div>
            </div>
            <div className="grid flex-1 md:grid-cols-[220px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex-1 overflow-auto py-2">
                            <nav className="grid items-start px-2 text-sm font-medium">
                                <Link
                                    href="/company"
                                    className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
                                >
                                    <LayoutDashboard className="h-4 w-4" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="/company/jobs"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                                >
                                    <Briefcase className="h-4 w-4" />
                                    Job Listings

                                </Link>
                                <Link
                                    href="/company/applicants"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                                >
                                    <Users className="h-4 w-4" />
                                    Applicants

                                </Link>

                            </nav>
                        </div>
                    </div>
                </div>
                <DashboardShell>
                    <DashboardHeader heading="Job Listings" text="Manage your company's job postings">
                        <div className="flex items-center gap-2">
                            <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button size="sm" className="h-8 gap-1">
                                        <Plus className="h-4 w-4" />
                                        Post Job
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Post New Job</DialogTitle>
                                        <DialogDescription>Fill out the form below to create a new job listing.</DialogDescription>
                                    </DialogHeader>
                                    <AddJobForm onSubmit={() => setJobDialogOpen(false)} companyId={companyId} />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </DashboardHeader>

                    <div className="flex items-center justify-between mb-6">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search jobs..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Jobs</SelectItem>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="filled">Filled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

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
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Job Details Dialog */}
                    {selectedJob && (
                        <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{selectedJob.title}</DialogTitle>
                                    <DialogDescription>
                                        {selectedJob.location} • {selectedJob.type}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            variant={selectedJob.status === "Open" ? "outline" : "default"}
                                            className={selectedJob.status === "Filled" ? "bg-green-500" : ""}
                                        >
                                            {selectedJob.status}
                                        </Badge>
                                        <Badge variant="secondary">{selectedJob.salary}</Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Job Description</h3>
                                        <p className="text-muted-foreground">{selectedJob.description}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Requirements</h3>
                                        <p className="text-muted-foreground">{selectedJob.requirements}</p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                </DashboardShell>
            </div>
        </div>
    )
}
