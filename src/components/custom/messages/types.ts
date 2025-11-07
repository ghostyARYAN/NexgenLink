export type Message = {
    id: string
    sender: string
    senderEmail: string
    subject: string
    preview: string
    content: string
    timestamp: string
    isRead: boolean
    isStarred: boolean
    avatar?: string
    category?: "primary" | "social" | "promotions" | "support" | "newsletters" | "finance" | "alerts"
    hasAttachment?: boolean
    labels?: string[]
}

export type FilterType = "all" | "primary" | "social" | "promotions" | "starred" | "unread"
