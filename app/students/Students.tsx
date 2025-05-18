"use client"

import { useState } from "react"
import { Briefcase, Building2, FileText, Filter, GraduationCap, LayoutDashboard, Mail, Phone, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddStudentForm } from "@/components/add-student-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import Link from "next/link"



export default function StudentsPage({ students }: { students: any }) {
    const [studentDialogOpen, setStudentDialogOpen] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null)
    const [filterDialogOpen, setFilterDialogOpen] = useState(false)


    return (
        <div className="flex min-h-screen flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <Briefcase className="h-6 w-6" />
                        <span className="hidden md:inline-block">College Placement Portal - Companies</span>
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
                    <DashboardHeader heading="Students" text="Browse and manage student profiles">
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
                                        <DialogTitle>Filter Students</DialogTitle>
                                        <DialogDescription>Refine student listings based on your preferences</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="space-y-2">
                                            <Label>Course</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select course" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Courses</SelectItem>
                                                    <SelectItem value="computer-science">Computer Science</SelectItem>
                                                    <SelectItem value="data-science">Data Science</SelectItem>
                                                    <SelectItem value="ux-design">UX Design</SelectItem>
                                                    <SelectItem value="software-engineering">Software Engineering</SelectItem>
                                                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Graduation Year</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Years</SelectItem>
                                                    <SelectItem value="2022">2022</SelectItem>
                                                    <SelectItem value="2023">2023</SelectItem>
                                                    <SelectItem value="2024">2024</SelectItem>
                                                    <SelectItem value="2025">2025</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Status</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="placed" defaultChecked />
                                                    <label
                                                        htmlFor="placed"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Placed
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="searching" defaultChecked />
                                                    <label
                                                        htmlFor="searching"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Searching
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Skills</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="javascript" />
                                                    <label
                                                        htmlFor="javascript"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        JavaScript
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="python" />
                                                    <label
                                                        htmlFor="python"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Python
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="react" />
                                                    <label
                                                        htmlFor="react"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        React
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="ui-ux" />
                                                    <label
                                                        htmlFor="ui-ux"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        UI/UX
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

                            <Dialog open={studentDialogOpen} onOpenChange={setStudentDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button size="sm" className="h-8 gap-1">
                                        <Plus className="h-4 w-4" />
                                        Add Student
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
                        </div>
                    </DashboardHeader>

                    <Tabs defaultValue="all" className="space-y-4">
                        <div className="flex items-center justify-between">
                            <TabsList>
                                <TabsTrigger value="all">All Students</TabsTrigger>

                            </TabsList>
                            <div className="relative w-full max-w-sm">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search students..." className="pl-8" />
                            </div>
                        </div>

                        <TabsContent value="all" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {students?.map((student: any) => (
                                    <Card key={student?._id} className="overflow-hidden">
                                        <CardHeader className="p-4 pb-0">
                                            <div className="flex items-start gap-4">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage src={`https://ui-avatars.com/api/?name=${student?.name}`} alt={student?.name} />
                                                    <AvatarFallback>
                                                        {student?.name
                                                            .split(" ")
                                                            .map((n: string) => n[0])
                                                            .join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle className="line-clamp-1 mt-3 uppercase">{student?.name}</CardTitle>
                                                    <CardDescription className="line-clamp-1">{student?.course}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                    <span className="truncate">{student?.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                                    <span>{student?.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                                    <span>Class of {student?.graduationYear || "2021"}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1 pt-1">
                                                    {["Javascript", "Python", "Java", "C++"].slice(0, 3).map((skill, index) => (
                                                        <Badge key={index} variant="secondary" className="text-xs">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                    {student?.skills?.length > 3 && (
                                                        <Badge variant="secondary" className="text-xs">
                                                            +{student?.skills?.length - 3} more
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                                            <Badge
                                                variant={student?.status === "Placed" ? "default" : "outline"}
                                                className={student?.status === "Placed" ? "bg-green-500" : ""}
                                            >
                                                {student.status}
                                            </Badge>

                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>



                    </Tabs>

                    {/* {selectedStudent && (
                        <Dialog open={!!selectedStudent} onOpenChange={(open) => !open && setSelectedStudent(null)}>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{selectedStudent.name}</DialogTitle>
                                    <DialogDescription>
                                        {selectedStudent.course} • Class of {selectedStudent.graduationYear}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={selectedStudent.name} />
                                            <AvatarFallback>
                                                {selectedStudent.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold">{selectedStudent.name}</h3>
                                            <p className="text-muted-foreground">{selectedStudent.course}</p>
                                            <Badge
                                                variant={selectedStudent.status === "Placed" ? "default" : "outline"}
                                                className={selectedStudent.status === "Placed" ? "bg-green-500 mt-1" : "mt-1"}
                                            >
                                                {selectedStudent.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="grid gap-2 md:grid-cols-2">
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <span>{selectedStudent.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <span>{selectedStudent.phone}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Bio</h3>
                                        <p className="text-muted-foreground">{selectedStudent.bio}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Skills</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {selectedStudent.skills.map((skill, index) => (
                                                <Badge key={index} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedStudent.status === "Placed" && selectedStudent.company && (
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold">Placement</h3>
                                            <p className="text-muted-foreground">Placed at {selectedStudent.company}</p>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Applications</h3>
                                        <p className="text-muted-foreground">Applied to {selectedStudent.applications} jobs</p>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                                            Close
                                        </Button>
                                        <Button>Edit Profile</Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )} */}
                </DashboardShell>
            </div>
        </div>
    )
}
