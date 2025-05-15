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

export default function JobsPage() {
    const [jobDialogOpen, setJobDialogOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState<(typeof jobsData)[0] | null>(null)
    const [filterDialogOpen, setFilterDialogOpen] = useState(false)

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
                        <div className="flex items-center gap-2">
                            <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-8 gap-1">
                                        <Filter className="h-4 w-4" />
                                        Filter
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Filter Jobs</DialogTitle>
                                        <DialogDescription>Refine job listings based on your preferences</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="space-y-2">
                                            <Label>Job Type</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="full-time" />
                                                    <label
                                                        htmlFor="full-time"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Full-time
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="part-time" />
                                                    <label
                                                        htmlFor="part-time"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Part-time
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="contract" />
                                                    <label
                                                        htmlFor="contract"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Contract
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="internship" />
                                                    <label
                                                        htmlFor="internship"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Internship
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Location</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="remote" />
                                                    <label
                                                        htmlFor="remote"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Remote
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="on-site" />
                                                    <label
                                                        htmlFor="on-site"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        On-site
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Salary Range</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="any">Any</SelectItem>
                                                    <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                                                    <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                                                    <SelectItem value="100k-125k">$100,000 - $125,000</SelectItem>
                                                    <SelectItem value="125k+">$125,000+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Status</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="open" defaultChecked />
                                                    <label
                                                        htmlFor="open"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Open
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="filled" />
                                                    <label
                                                        htmlFor="filled"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Filled
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <Button variant="outline" onClick={() => setFilterDialogOpen(false)}>
                                            Reset
                                        </Button>
                                        <Button onClick={() => setFilterDialogOpen(false)}>Apply Filters</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>


                        </div>
                    </DashboardHeader>

                    <Tabs defaultValue="all" className="space-y-4">
                        <div className="flex items-center justify-between">
                            <TabsList>
                                <TabsTrigger value="all">All Jobs</TabsTrigger>
                                <TabsTrigger value="open">Open</TabsTrigger>
                                <TabsTrigger value="filled">Filled</TabsTrigger>
                            </TabsList>
                            <div className="relative w-full max-w-sm">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search jobs..." className="pl-8" />
                            </div>
                        </div>

                        <TabsContent value="all" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {jobsData.map((job) => (
                                    <Card key={job.id} className="overflow-hidden">
                                        <CardHeader className="p-4 pb-0">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <CardTitle className="line-clamp-1">{job.title}</CardTitle>
                                                    <CardDescription className="line-clamp-1">{job.company}</CardDescription>
                                                </div>
                                                <Badge
                                                    variant={job.status === "Open" ? "outline" : "default"}
                                                    className={job.status === "Filled" ? "bg-green-500" : ""}
                                                >
                                                    {job.status}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                                    <span>{job.type}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Building2 className="h-4 w-4 text-muted-foreground" />
                                                    <span>{job.location}</span>
                                                </div>
                                                <div className="font-medium">{job.salary}</div>
                                                <Separator />
                                                <div className="line-clamp-3 text-muted-foreground">{job.description}</div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                                            <div className="text-xs text-muted-foreground">Posted: {job.posted}</div>
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    setSelectedJob(job)
                                                }}
                                            >
                                                Apply
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="open" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {jobsData
                                    .filter((job) => job.status === "Open")
                                    .map((job) => (
                                        <Card key={job.id} className="overflow-hidden">
                                            <CardHeader className="p-4 pb-0">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <CardTitle className="line-clamp-1">{job.title}</CardTitle>
                                                        <CardDescription className="line-clamp-1">{job.company}</CardDescription>
                                                    </div>
                                                    <Badge variant="outline">{job.status}</Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-4">
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Building2 className="h-4 w-4 text-muted-foreground" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="font-medium">{job.salary}</div>
                                                    <Separator />
                                                    <div className="line-clamp-3 text-muted-foreground">{job.description}</div>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex items-center justify-between p-4 pt-0">
                                                <div className="text-xs text-muted-foreground">Posted: {job.posted}</div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedJob(job)
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="filled" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {jobsData
                                    .filter((job) => job.status === "Filled")
                                    .map((job) => (
                                        <Card key={job.id} className="overflow-hidden">
                                            <CardHeader className="p-4 pb-0">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <CardTitle className="line-clamp-1">{job.title}</CardTitle>
                                                        <CardDescription className="line-clamp-1">{job.company}</CardDescription>
                                                    </div>
                                                    <Badge className="bg-green-500">{job.status}</Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-4">
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Building2 className="h-4 w-4 text-muted-foreground" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="font-medium">{job.salary}</div>
                                                    <Separator />
                                                    <div className="line-clamp-3 text-muted-foreground">{job.description}</div>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex items-center justify-between p-4 pt-0">
                                                <div className="text-xs text-muted-foreground">Posted: {job.posted}</div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedJob(job)
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </TabsContent>
                    </Tabs>

                    {selectedJob && (
                        <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{selectedJob.title}</DialogTitle>
                                    <DialogDescription>
                                        {selectedJob.company} • {selectedJob.location}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">{selectedJob.type}</Badge>
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

                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div>Posted: {selectedJob.posted}</div>
                                        <div>Applications: {selectedJob.applications}</div>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        {selectedJob.status === "Open" && <Button>Apply Now</Button>}
                                        <Button variant="outline" onClick={() => setSelectedJob(null)}>
                                            Close
                                        </Button>
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
