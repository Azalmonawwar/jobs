"use client"

import { useState } from "react"
import { Badge, Briefcase, Building2, FileText, Filter, Globe, LayoutDashboard, Mail, MapPin, Phone, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddCompanyForm } from "@/components/add-company-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import Link from "next/link"


export default function CompaniesPage({ companies }: { companies: any[] }) {
    const [companyDialogOpen, setCompanyDialogOpen] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState<{
        _id: string
        name: string
        industry: string
        about: string
        website: string
        email: string
        phone: string
        address: string
        location: string
        activeJobs: number
        totalHires: number
    } | null>({
        _id: "",
        name: "",
        industry: "",
        about: "",
        website: "",
        email: "",
        phone: "",
        address: "",
        location: "",
        activeJobs: 0,
        totalHires: 0,
    })
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
                    <DashboardHeader heading="Companies" text="Browse and manage partner companies">
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
                                        <DialogTitle>Filter Companies</DialogTitle>
                                        <DialogDescription>Refine company listings based on your preferences</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="space-y-2">
                                            <Label>Industry</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select industry" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Industries</SelectItem>
                                                    <SelectItem value="technology">Technology</SelectItem>
                                                    <SelectItem value="design">Design</SelectItem>
                                                    <SelectItem value="data-analytics">Data Analytics</SelectItem>
                                                    <SelectItem value="finance">Finance</SelectItem>
                                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Partnership Since</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Years</SelectItem>
                                                    <SelectItem value="2021">2021 or later</SelectItem>
                                                    <SelectItem value="2020">2020 or later</SelectItem>
                                                    <SelectItem value="2019">2019 or later</SelectItem>
                                                    <SelectItem value="2018">2018 or later</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Active Jobs</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">Any</SelectItem>
                                                    <SelectItem value="1-2">1-2 jobs</SelectItem>
                                                    <SelectItem value="3-5">3-5 jobs</SelectItem>
                                                    <SelectItem value="5+">5+ jobs</SelectItem>
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

                            <Dialog open={companyDialogOpen} onOpenChange={setCompanyDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button size="sm" className="h-8 gap-1">
                                        <Plus className="h-4 w-4" />
                                        Add Company
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Add New Company</DialogTitle>
                                        <DialogDescription>Fill out the form below to register a new company partner.</DialogDescription>
                                    </DialogHeader>
                                    <AddCompanyForm onSubmit={() => setCompanyDialogOpen(false)} />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </DashboardHeader>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Filter by industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Industries</SelectItem>
                                        <SelectItem value="technology">Technology</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="newest">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="newest">Newest Partners</SelectItem>
                                        <SelectItem value="oldest">Oldest Partners</SelectItem>
                                        <SelectItem value="most-jobs">Most Active Jobs</SelectItem>
                                        <SelectItem value="most-hires">Most Hires</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="relative w-full max-w-sm">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search companies..." className="pl-8" />
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {companies && companies?.map((company) => (
                                <Card key={company?._id} className="overflow-hidden">
                                    <CardHeader className="p-4 pb-0">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={`https://ui-avatars.com/api/?name=${company?.name}`} alt={company?.name} />
                                                <AvatarFallback>
                                                    {company?.name
                                                        .split(" ")
                                                        .map((n: string) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="line-clamp-1">{company?.name}</CardTitle>
                                                <CardDescription className="line-clamp-1">Technology</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Globe className="h-4 w-4 text-muted-foreground" />
                                                <a
                                                    href={company?.website}
                                                    className="truncate hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {company.website.replace(/^https?:\/\//, "")}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                                <span className="truncate">{company?.location.split(",")[0]}</span>
                                            </div>

                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between p-4 pt-0">
                                        <div className="text-xs text-muted-foreground">Partner since 2021</div>
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                setSelectedCompany(company)
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {selectedCompany && (
                        <Dialog open={!!selectedCompany} onOpenChange={(open) => !open && setSelectedCompany(null)}>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{selectedCompany?.name}</DialogTitle>
                                    <DialogDescription>
                                        Technology • Partner since 2021
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage src={`https://ui-avatars.com/api/?name=${selectedCompany?.name}`} alt={selectedCompany?.name} />
                                            <AvatarFallback>
                                                {selectedCompany?.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold">{selectedCompany?.name}</h3>
                                            <p className="text-muted-foreground">Technology</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">About</h3>
                                        <p className="text-muted-foreground">{selectedCompany?.about}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Contact Information</h3>
                                        <div className="grid gap-2">
                                            <div className="flex items-center gap-2">
                                                <Globe className="h-4 w-4 text-muted-foreground" />
                                                <a
                                                    href={selectedCompany?.website}
                                                    className="hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {selectedCompany?.website}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span>{selectedCompany?.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <span>{selectedCompany?.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                                <span>{selectedCompany?.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Card>
                                            <CardHeader className="p-4 pb-2">
                                                <CardTitle className="text-sm">Active Jobs</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <div className="text-2xl font-bold">Unknown</div>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="p-4 pb-2">
                                                <CardTitle className="text-sm">Total Hires</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <div className="text-2xl font-bold">Unknown</div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" onClick={() => setSelectedCompany(null)}>
                                            Close
                                        </Button>
                                        <Button>View Jobs</Button>
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
