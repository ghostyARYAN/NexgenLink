'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

const NAME_MAP: Record<string, string> = {
    "": "Home",
    admin: "Admin",
    dashboard: "Dashboard",
    projects: "Projects",
    settings: "Settings",
    users: "Users",
    profile: "Profile",
    docs: "Docs",
    components: "Components",
}

function formatSegment(segment: string) {
    if (NAME_MAP[segment]) return NAME_MAP[segment]
    // decode and prettify: "project-details" -> "Project Details", "123" -> "123"
    const decoded = decodeURIComponent(segment)
    return decoded
        .replace(/[-_]/g, " ")
        .split(" ")
        .map(s => s.length ? s[0].toUpperCase() + s.slice(1) : s)
        .join(" ")
}

export function BreadcrumbComponents() {
    const pathname = usePathname() ?? "/"
    const segments = pathname.split("/").filter(Boolean)

    // Build cumulative hrefs for each segment
    const parts = segments.map((segment, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/")
        return { segment, href }
    })

    return (
        <div className="px-8">
            <Breadcrumb>
                <BreadcrumbList>
                    {parts.map((part, i) => {
                        const isLast = i === parts.length - 1
                        const title = formatSegment(part.segment)

                        if (isLast) {
                            return (
                                <React.Fragment key={part.href}>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </React.Fragment>
                            )
                        }
                        return (
                            <React.Fragment key={part.href}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={part.href}>{title}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
