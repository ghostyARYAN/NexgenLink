"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InboxIcon, Search, RefreshCw, Filter, ChevronDown, Star, MailOpen, Trash2, Mail } from "lucide-react"
import MessageList from "./message-list"
import MessageDetail from "./message-detail"
import type { Message, FilterType } from "./types"

const mockMessages: Message[] = [
    {
        id: "1",
        sender: "Sarah Chen",
        senderEmail: "sarah.chen@company.com",
        subject: "Q4 Design System Updates",
        preview:
            "Hey team, I wanted to share the latest updates to our design system. We've made significant improvements to...",
        content:
            "Hey team, I wanted to share the latest updates to our design system. We've made significant improvements to the component library and documentation. The new components include enhanced accessibility features, better TypeScript support, and improved performance optimizations.\n\nKey highlights:\n- New Button variants with better contrast ratios\n- Updated Form components with built-in validation\n- Improved documentation with interactive examples\n- Dark mode enhancements across all components\n\nPlease review and let me know if you have any feedback!",
        timestamp: "2 hours ago",
        isRead: false,
        isStarred: true,
        category: "primary",
        hasAttachment: true,
        labels: ["work", "design"],
    },
    {
        id: "2",
        sender: "Marcus Rodriguez",
        senderEmail: "marcus@startup.io",
        subject: "Re: Project Timeline Discussion",
        preview:
            "Thanks for the update. I reviewed the timeline and have a few suggestions for the implementation phase...",
        content:
            "Thanks for the update. I reviewed the timeline and have a few suggestions for the implementation phase. Overall the plan looks solid, but I think we should allocate more time for testing and QA. Let's schedule a call to discuss the details.",
        timestamp: "5 hours ago",
        isRead: false,
        isStarred: false,
        category: "primary",
        labels: ["work"],
    },
    {
        id: "3",
        sender: "GitHub",
        senderEmail: "notifications@github.com",
        subject: "New pull request in vercel/next.js",
        preview: "@user opened a pull request in vercel/next.js: Fix: Update middleware handling for edge runtime...",
        content:
            "@user opened a pull request in vercel/next.js: Fix: Update middleware handling for edge runtime. This PR addresses the issue with middleware not properly handling edge runtime configurations.",
        timestamp: "Yesterday",
        isRead: true,
        isStarred: false,
        category: "social",
        labels: ["github"],
    },
    {
        id: "4",
        sender: "Emma Thompson",
        senderEmail: "emma.t@design.co",
        subject: "Feedback on the new dashboard",
        preview:
            "I had a chance to review the new dashboard design. Overall it looks great! A few notes on accessibility...",
        content:
            "I had a chance to review the new dashboard design. Overall it looks great! A few notes on accessibility and contrast ratios that we should address before launch. The color choices are excellent, but some text elements need better contrast for WCAG AA compliance.",
        timestamp: "Yesterday",
        isRead: true,
        isStarred: true,
        category: "primary",
        hasAttachment: false,
        labels: ["work", "design"],
    },
    {
        id: "5",
        sender: "Vercel",
        senderEmail: "team@vercel.com",
        subject: "Your deployment is ready",
        preview: "Your production deployment for project-name is now live and ready to view...",
        content:
            "Your production deployment for project-name is now live and ready to view. Visit your deployment at https://project-name.vercel.app to see your changes.",
        timestamp: "2 days ago",
        isRead: true,
        isStarred: false,
        category: "promotions",
        labels: ["vercel"],
    },
    {
        id: "6",
        sender: "Ava Patel",
        senderEmail: "support@saas.co",
        subject: "Support Ticket #4321 — Resolved",
        preview: "We’ve resolved your recent ticket regarding account syncing. Please verify on your end...",
        content:
            "Hi,\n\nWe've resolved the issue you reported with account syncing. It was caused by an intermittent cache invalidation bug. We've deployed a fix and monitored the service for 24 hours. Please confirm everything looks good on your end.\n\nThanks,\nSupport Team",
        timestamp: "3 days ago",
        isRead: false,
        isStarred: false,
        category: "support",
        labels: ["support", "account"],
    },
    {
        id: "7",
        sender: "Product Updates",
        senderEmail: "newsletter@company.com",
        subject: "Monthly Product Roundup — September",
        preview: "This month we shipped several improvements including performance updates and bug fixes...",
        content:
            "Welcome to the September roundup. Highlights include performance optimizations, smaller bundle sizes, and several bug fixes that improve stability. Read the full changelog on our docs site.",
        timestamp: "4 days ago",
        isRead: true,
        isStarred: false,
        category: "newsletters",
        labels: ["newsletter"],
    },
    {
        id: "8",
        sender: "Liam Nguyen",
        senderEmail: "liam@community.org",
        subject: "Invitation: Beta Test New Feature",
        preview: "We’re inviting a small group to beta test a collaboration feature. Interested?",
        content:
            "Hi,\n\nWe’re inviting a small group of community members to beta test a new collaboration feature next week. If you’re interested, reply and we’ll add you to the program.\n\nCheers,\nLiam",
        timestamp: "4 days ago",
        isRead: false,
        isStarred: true,
        category: "social",
        labels: ["community", "beta"],
    },
    {
        id: "9",
        sender: "Stripe",
        senderEmail: "billing@stripe.com",
        subject: "Invoice #12345 — Due in 7 days",
        preview: "Your invoice for August is available. View and pay online to avoid late fees...",
        content:
            "Your invoice #12345 for services in August is now available. You can view and pay the invoice from your dashboard. Let us know if you have any questions about the charges.",
        timestamp: "6 hours ago",
        isRead: false,
        isStarred: false,
        category: "finance",
        hasAttachment: true,
        labels: ["billing"],
    },
    {
        id: "10",
        sender: "HR",
        senderEmail: "hr@company.com",
        subject: "Policy Update: Remote Work Guidelines",
        preview: "Please review the updated guidelines for hybrid and remote work effective next month...",
        content:
            "As part of our ongoing policy updates, remote work guidelines have been revised to clarify expectations around meeting attendance and core hours. Please review the attached document and acknowledge receipt.",
        timestamp: "1 week ago",
        isRead: true,
        isStarred: false,
        category: "primary",
        hasAttachment: true,
        labels: ["hr", "policy"],
    },
    {
        id: "11",
        sender: "Security Alerts",
        senderEmail: "security@alerts.com",
        subject: "Unusual Sign-in Attempt Detected",
        preview: "We detected a sign-in attempt from a new device. If this wasn’t you, secure your account now...",
        content:
            "We detected an unusual sign-in attempt from a new device. If this was you, no further action is required. If not, please reset your password immediately and enable two-factor authentication.",
        timestamp: "just now",
        isRead: false,
        isStarred: true,
        category: "alerts",
        labels: ["security", "urgent"],
    },
    {
        id: "12",
        sender: "Marketplace",
        senderEmail: "orders@shop.com",
        subject: "Order Shipped — #9876",
        preview: "Your order #9876 has shipped. Track your package with the following link...",
        content:
            "Good news — your order #9876 has shipped. You can track the shipment using the carrier link provided. Estimated delivery is 2-4 business days.",
        timestamp: "2 days ago",
        isRead: true,
        isStarred: false,
        category: "promotions",
        labels: ["orders", "shop"],
    },
]

export function Inbox() {
    const [messages, setMessages] = useState<Message[]>(mockMessages)
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(mockMessages[0] ?? null)
    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState<FilterType>("all")
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

    const toggleStar = (id: string) => {
        setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, isStarred: !msg.isStarred } : msg)))
        setSelectedMessage((prev) => (prev?.id === id ? { ...prev, isStarred: !prev.isStarred } : prev))
    }

    const markAsRead = (id: string) => {
        setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg)))
        setSelectedMessage((prev) => (prev?.id === id ? { ...prev, isRead: true } : prev))
    }

    const markAsUnread = (id: string) => {
        setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, isRead: false } : msg)))
        setSelectedMessage((prev) => (prev?.id === id ? { ...prev, isRead: false } : prev))
    }

    const handleMessageClick = (message: Message) => {
        setSelectedMessage(message)
        markAsRead(message.id)
    }

    const deleteMessage = (id: string) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id))
        setSelectedMessage((prev) => (prev?.id === id ? null : prev))
    }

    const archiveMessage = (id: string) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id))
        setSelectedMessage((prev) => (prev?.id === id ? null : prev))
    }

    const toggleSelection = (id: string) => {
        setSelectedIds((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    const selectAll = () => {
        setSelectedIds((prev) => (prev.size === filteredMessages.length ? new Set() : new Set(filteredMessages.map((m) => m.id))))
    }

    const bulkDelete = () => {
        setMessages((prev) => prev.filter((msg) => !selectedIds.has(msg.id)))
        setSelectedIds(new Set())
        setSelectedMessage((prev) => (prev && selectedIds.has(prev.id) ? null : prev))
    }

    const bulkMarkAsRead = () => {
        setMessages((prev) => prev.map((msg) => (selectedIds.has(msg.id) ? { ...msg, isRead: true } : msg)))
        setSelectedIds(new Set())
    }

    const filteredMessages = messages.filter((message) => {
        const q = searchQuery.trim().toLowerCase()
        const matchesSearch = !q || message.sender.toLowerCase().includes(q) || message.subject.toLowerCase().includes(q) || message.preview.toLowerCase().includes(q)

        const matchesFilter =
            activeFilter === "all"
                ? true
                : activeFilter === "starred"
                    ? message.isStarred
                    : activeFilter === "unread"
                        ? !message.isRead
                        : message.category === activeFilter

        return matchesSearch && matchesFilter
    })

    const unreadCount = messages.filter((m) => !m.isRead).length

    return (
        <div className="h-[calc(100vh-10vh)] flex bg-background">
            {/* Sidebar */}
            <div className="w-96 border-r border-border flex flex-col bg-card">
                {/* Header */}
                <div className="p-4 border-b border-border bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <InboxIcon className="h-5 w-5 text-primary" />
                            <h1 className="text-xl font-semibold text-foreground">Inbox</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs font-medium">
                                {unreadCount} new
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search messages..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 bg-background/50 border-border h-9" />
                    </div>
                </div>

                <div className="px-2 py-3 border-b border-border bg-card/30">
                    <div className="flex items-center gap-1">
                        <Button variant={activeFilter === "all" ? "secondary" : "ghost"} size="sm" onClick={() => setActiveFilter("all")} className="text-xs h-8">All</Button>
                        <Button variant={activeFilter === "unread" ? "secondary" : "ghost"} size="sm" onClick={() => setActiveFilter("unread")} className="text-xs h-8">
                            Unread
                            {unreadCount > 0 && (
                                <Badge variant="secondary" className="ml-1.5 h-4 px-1 text-[10px]">{unreadCount}</Badge>
                            )}
                        </Button>
                        <Button variant={activeFilter === "starred" ? "secondary" : "ghost"} size="sm" onClick={() => setActiveFilter("starred")} className="text-xs h-8">
                            <Star className="h-3 w-3 mr-1" />
                            Starred
                        </Button>
                        <div className="ml-auto">
                            <Button variant="ghost" size="sm" className="text-xs h-8">
                                <Filter className="h-3 w-3 mr-1" />
                                More
                                <ChevronDown className="h-3 w-3 ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>

                {selectedIds.size > 0 && (
                    <div className="px-3 py-2 border-b border-border bg-accent/50 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-medium">{selectedIds.size} selected</span>
                        <Button variant="ghost" size="sm" onClick={bulkMarkAsRead} className="h-7 text-xs">
                            <MailOpen className="h-3 w-3 mr-1" />
                            Mark read
                        </Button>
                        <Button variant="ghost" size="sm" onClick={bulkDelete} className="h-7 text-xs text-destructive hover:text-destructive">
                            <Trash2 className="h-3 w-3 mr-1" />
                            Delete
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedIds(new Set())} className="h-7 text-xs ml-auto">Clear</Button>
                    </div>
                )}

                {/* Message List */}
                <MessageList messages={filteredMessages} selectedIds={selectedIds} onToggleSelect={toggleSelection} onSelectAll={selectAll} onOpen={handleMessageClick} />
            </div>

            {/* Message Detail */}
            {selectedMessage ? (
                <MessageDetail message={selectedMessage} onToggleStar={toggleStar} onArchive={archiveMessage} onDelete={deleteMessage} onMarkAsUnread={markAsUnread} />
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                        <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 opacity-50" />
                        </div>
                        <p className="text-sm font-medium">Select a message to read</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">Choose a message from the list to view its contents</p>
                    </div>
                </div>
            )}
        </div>
    )
}
