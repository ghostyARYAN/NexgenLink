import { cn } from "@/lib/utils"

export const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
}

export const getCategoryColor = (category?: string) => {
    switch (category) {
        case "primary":
            return "bg-primary/10 text-primary border-primary/20"
        case "social":
            return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
        case "promotions":
            return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
        default:
            return "bg-muted text-muted-foreground border-border"
    }
}

export { cn }
