"use client"

import { useState } from "react"
import { Briefcase, Building2, Calendar, Filter, LayoutDashboard, Plus, Search, Settings, Users } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Progress } from "@/components/ui/progress"

export default function CompanyDashboard({ company, jobs }: any) {
    const [jobDialogOpen, setJobDialogOpen] = useState(false)
    const [filterDialogOpen, setFilterDialogOpen] = useState(false)
    const [selectedApplicant, setSelectedApplicant] = useState<any>(null)
    const [selectedJob, setSelectedJob] = useState<any>(null)

    // Mock company data
    const companyData = {
        id: 1,
        name: "TechCorp Inc.",
        logo: "/placeholder.svg?height=64&width=64",
        industry: "Technology",
        jobs: [
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
        ],
        applicants: [
            {
                id: 1,
                name: "John Smith",
                email: "john.smith@example.com",
                phone: "(123) 456-7890",
                position: "Frontend Developer",
                jobId: 1,
                status: "Applied",
                date: "May 16, 2023",
                match: 95,
                education: "BS Computer Science, University of California",
                experience: "3 years",
                skills: ["JavaScript", "React", "TypeScript", "HTML/CSS", "Node.js"],
                resume: "/path/to/resume.pdf",
            },
            {
                id: 2,
                name: "Emily Johnson",
                email: "emily.johnson@example.com",
                phone: "(234) 567-8901",
                position: "Frontend Developer",
                jobId: 1,
                status: "Reviewing",
                date: "May 17, 2023",
                match: 90,
                education: "BA Design, Rhode Island School of Design",
                experience: "2 years",
                skills: ["UI/UX", "React", "JavaScript", "Figma", "User Research"],
                resume: "/path/to/resume.pdf",
            },
            {
                id: 3,
                name: "Michael Brown",
                email: "michael.brown@example.com",
                phone: "(345) 678-9012",
                position: "DevOps Engineer",
                jobId: 3,
                status: "Interview",
                date: "May 21, 2023",
                match: 85,
                education: "MS Computer Engineering, MIT",
                experience: "5 years",
                skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
                resume: "/path/to/resume.pdf",
            },
            {
                id: 4,
                name: "Sarah Davis",
                email: "sarah.davis@example.com",
                phone: "(456) 789-0123",
                position: "Frontend Developer",
                jobId: 1,
                status: "Applied",
                date: "May 18, 2023",
                match: 80,
                education: "BS Software Engineering, Stanford University",
                experience: "1 year",
                skills: ["JavaScript", "React", "Redux", "HTML/CSS", "Bootstrap"],
                resume: "/path/to/resume.pdf",
            },
            {
                id: 5,
                name: "David Wilson",
                email: "david.wilson@example.com",
                phone: "(567) 890-1234",
                position: "DevOps Engineer",
                jobId: 3,
                status: "Applied",
                date: "May 22, 2023",
                match: 75,
                education: "BS Information Technology, Georgia Tech",
                experience: "4 years",
                skills: ["AWS", "Azure", "Linux", "Python", "Ansible"],
                resume: "/path/to/resume.pdf",
            },
        ],
        stats: {
            totalJobs: 3,
            activeJobs: 2,
            totalApplicants: 42,
            newApplicants: 5,
            interviewsScheduled: 3,
            offersSent: 1,
        },
    }

    // Filter applicants by job
    const getApplicantsByJob = (jobId: number) => {
        return companyData.applicants.filter((applicant) => applicant.jobId === jobId)
    }

    // Update applicant status
    const updateApplicantStatus = (applicantId: number, newStatus: string) => {
        console.log(`Updating applicant ${applicantId} status to ${newStatus}`)
        // In a real app, this would update the database
        setSelectedApplicant(null)
    }

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
                <div className="flex flex-col">
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src={`https://ui-avatars.com/api/?name=${company?.name}`} alt={company?.name} />
                                    <AvatarFallback>
                                        {company?.name
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h1 className="text-2xl font-bold">{company?.name}</h1>
                                    <p className="text-muted-foreground">Technology</p>
                                </div>
                            </div>
                            <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button className="mt-4 md:mt-0">
                                        <Plus className="mr-2 h-4 w-4" /> Post New Job
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Post New Job</DialogTitle>
                                        <DialogDescription>Fill out the form below to create a new job listing.</DialogDescription>
                                    </DialogHeader>
                                    <AddJobForm onSubmit={() => setJobDialogOpen(false)} companyId={company?._id} />
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{companyData.stats.activeJobs}</div>
                                    <p className="text-xs text-muted-foreground">Out of {companyData.stats.totalJobs} total jobs</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{companyData.stats.totalApplicants}</div>
                                    <p className="text-xs text-muted-foreground">{companyData.stats.newApplicants} new this week</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{companyData.stats.interviewsScheduled}</div>
                                    <p className="text-xs text-muted-foreground">{companyData.stats.offersSent} offer sent</p>
                                </CardContent>
                            </Card>
                        </div>

                        <Tabs defaultValue="jobs" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="jobs">Job Listings</TabsTrigger>
                                <TabsTrigger value="applicants">Applicants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="jobs" className="space-y-4" id="jobs">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">Your Job Listings</h2>
                                    <div className="flex items-center gap-2">
                                        <Select defaultValue="all">
                                            <SelectTrigger className="w-[150px]">
                                                <SelectValue placeholder="Filter by status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Jobs</SelectItem>
                                                <SelectItem value="open">Open</SelectItem>
                                                <SelectItem value="filled">Filled</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                                            <DialogTrigger asChild>
                                                <Button size="sm">
                                                    <Plus className="mr-2 h-4 w-4" /> Add Job
                                                </Button>
                                            </DialogTrigger>
                                        </Dialog>
                                    </div>
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
                            </TabsContent>

                            <TabsContent value="applicants" className="space-y-4" id="applicants">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">Applicants</h2>
                                    <div className="flex items-center gap-2">
                                        <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    <Filter className="mr-2 h-4 w-4" /> Filter
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Filter Applicants</DialogTitle>
                                                    <DialogDescription>Refine applicant list based on your preferences</DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="space-y-2">
                                                        <Label>Job Position</Label>
                                                        <Select defaultValue="all">
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select position" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="all">All Positions</SelectItem>
                                                                {companyData.jobs.map((job) => (
                                                                    <SelectItem key={job.id} value={job.id.toString()}>
                                                                        {job.title}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
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
                                        <Select defaultValue="all">
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Filter by job" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Jobs</SelectItem>
                                                {companyData.jobs.map((job) => (
                                                    <SelectItem key={job.id} value={job.id.toString()}>
                                                        {job.title}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Applicant</TableHead>
                                            <TableHead>Position</TableHead>
                                            <TableHead>Status</TableHead>


                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {companyData.applicants.map((applicant) => (
                                            <TableRow key={applicant.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarFallback>
                                                                {applicant.name
                                                                    .split(" ")
                                                                    .map((n) => n[0])
                                                                    .join("")}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium">{applicant.name}</div>
                                                            <div className="text-xs text-muted-foreground">{applicant.email}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{applicant.position}</TableCell>


                                                <TableCell>{applicant.date}</TableCell>

                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="outline" size="sm" onClick={() => setSelectedApplicant(applicant)}>
                                                            View
                                                        </Button>
                                                        <Select
                                                            onValueChange={(value) => updateApplicantStatus(applicant.id, value)}
                                                            defaultValue={applicant.status.toLowerCase()}
                                                        >
                                                            <SelectTrigger className="w-[120px] h-8">
                                                                <SelectValue placeholder="Update Status" />
                                                            </SelectTrigger>
                                                            <SelectContent>

                                                                <SelectItem value="shortlisted">Shortlist</SelectItem>
                                                                <SelectItem value="rejected">Reject</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
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

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div>Posted: {selectedJob.posted}</div>
                                <div>Applications: {selectedJob.applications}</div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                                    Close
                                </Button>
                                <Button
                                    onClick={() => {
                                        setSelectedJob(null)
                                        setJobDialogOpen(true)
                                    }}
                                >
                                    Edit Job
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* Applicant Details Dialog */}
            {selectedApplicant && (
                <Dialog open={!!selectedApplicant} onOpenChange={(open) => !open && setSelectedApplicant(null)}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{selectedApplicant.name}</DialogTitle>
                            <DialogDescription>Applicant for {selectedApplicant.position}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarFallback>
                                        {selectedApplicant.name
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-semibold">{selectedApplicant.name}</h3>
                                    <p className="text-muted-foreground">{selectedApplicant.position}</p>
                                    <Badge
                                        variant={
                                            selectedApplicant.status === "Applied"
                                                ? "outline"
                                                : selectedApplicant.status === "Reviewing"
                                                    ? "secondary"
                                                    : selectedApplicant.status === "Interview"
                                                        ? "default"
                                                        : "outline"
                                        }
                                        className="mt-1"
                                    >
                                        {selectedApplicant.status}
                                    </Badge>
                                </div>
                            </div>

                            <div className="grid gap-2 md:grid-cols-2">
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Email:</div>
                                    <span>{selectedApplicant.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Phone:</div>
                                    <span>{selectedApplicant.phone}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Education</h3>
                                <p className="text-muted-foreground">{selectedApplicant.education}</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Experience</h3>
                                <p className="text-muted-foreground">{selectedApplicant.experience} of relevant experience</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Skills</h3>
                                <div className="flex flex-wrap gap-1">
                                    {selectedApplicant.skills.map((skill: string, index: number) => (
                                        <Badge key={index} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Match Score</h3>
                                <div className="flex items-center gap-2">
                                    <Progress value={selectedApplicant.match} className="h-2 w-full" />
                                    <span className="text-sm font-medium">{selectedApplicant.match}%</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Resume</h3>
                                <Button variant="outline" className="w-full">
                                    Download Resume
                                </Button>
                            </div>

                            <div className="flex justify-between">
                                <Select
                                    onValueChange={(value) => updateApplicantStatus(selectedApplicant.id, value)}
                                    defaultValue={selectedApplicant.status.toLowerCase()}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Update Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="applied">Applied</SelectItem>
                                        <SelectItem value="reviewing">Reviewing</SelectItem>
                                        <SelectItem value="interview">Schedule Interview</SelectItem>
                                        <SelectItem value="shortlisted">Shortlist</SelectItem>
                                        <SelectItem value="rejected">Reject</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setSelectedApplicant(null)}>
                                        Close
                                    </Button>
                                    <Button>
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Schedule Interview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}
