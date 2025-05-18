"use client"

import { useState } from "react"
import { Briefcase, Calendar, Filter, LayoutDashboard, Mail, Phone, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { selectApplicant } from "@/lib/action/company.action"

// Mock applicants data
const applicantsData = [
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
]

// Mock jobs data
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
    },
    {
        id: 2,
        title: "Backend Engineer",
    },
    {
        id: 3,
        title: "DevOps Engineer",
    },
]

export default function ApplicantsPage({ data }: any) {
    const [filterDialogOpen, setFilterDialogOpen] = useState(false)
    const [applicants, setApplicants] = useState<any>(null)
    const [selectedJob, setSelectedJob] = useState<string>("all")
    const [searchQuery, setSearchQuery] = useState("")



    const allApplicants = data?.flatMap((job: any) =>
        job.applicants.map((applicant: any) => ({
            id: applicant._id,
            _id: job._id,
            name: applicant.name,
            email: applicant.email,
            title: job.title,
            date: new Date(job.datePosted).toLocaleDateString(), // formatted date
            status: 'applied' // default or fetched from elsewhere
        }))
    );



    // Update applicant status
    const updateApplicantStatus = async (applicantId: string, jobId: string, newStatus: string) => {
        if (newStatus === "shortlisted") {
            try {
                const response = await selectApplicant(jobId, applicantId);
                console.log("Applicant status updated:", response);
            } catch (error) {
                console.error("Error updating applicant status:", error);
            }
        }
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
                <DashboardShell>
                    <DashboardHeader heading="Applicants" text="Manage and review job applicants">

                    </DashboardHeader>



                    <Card>
                        <CardHeader>
                            <CardTitle>All Applicants</CardTitle>
                            <CardDescription>2 applicants found</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Applicant</TableHead>
                                        <TableHead>Position</TableHead>

                                        <TableHead>Applied On</TableHead>

                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {allApplicants.map((applicant: any) => (
                                        <TableRow key={applicant._id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarFallback>
                                                            {applicant?.name
                                                                .split(" ")
                                                                .map((n: string) => n[0])
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">{applicant.name}</div>
                                                        <div className="text-xs text-muted-foreground">{applicant.email}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{applicant.title}</TableCell>
                                            <TableCell>{applicant.date}</TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="outline" size="sm" onClick={() => setApplicants(applicant)}>
                                                        View
                                                    </Button>
                                                    <Select
                                                        onValueChange={(value) => updateApplicantStatus(applicant.id, applicant?._id, value)}
                                                        defaultValue={applicant?.status?.toLowerCase()}
                                                    >
                                                        <SelectTrigger className="w-[120px] h-8">
                                                            <SelectValue placeholder="Update Status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="applied">Applied</SelectItem>
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
                        </CardContent>
                    </Card>

                    {/* Applicant Details Dialog */}
                    {applicants && (
                        <Dialog open={!!applicants} onOpenChange={(open) => !open && setApplicants(null)}>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{applicants?.name}</DialogTitle>
                                    <DialogDescription>Applicant for {applicants?.position}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarFallback>
                                                {applicants?.name
                                                    .split(" ")
                                                    .map((n: string) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold">{applicants?.name}</h3>
                                            <p className="text-muted-foreground">{applicants?.position}</p>


                                        </div>
                                    </div>

                                    <div className="grid gap-2 md:grid-cols-2">
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <span>{applicants?.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <span>{applicants?.phone}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Education</h3>
                                        <p className="text-muted-foreground">B tech</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Experience</h3>
                                        <p className="text-muted-foreground">Fresher || 0 years of experience</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Skills</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {["Python", "Javascript", "React", "Node.js"].map((skill: string, index: number) => (
                                                <Badge key={index} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>




                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Resume</h3>
                                        <Button variant="outline" className="w-full">
                                            Download Resume
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
