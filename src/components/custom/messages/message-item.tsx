"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Paperclip, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Message } from "./types"
import { getInitials, getCategoryColor } from "./utils"

type Props = {
    message: Message
    isSelected: boolean
    onToggleSelect: (id: string) => void
    onOpen: (message: Message) => void
}

export default function MessageItem({ message, isSelected, onToggleSelect, onOpen }: Props) {
    return (
        <div className={cn("group relative transition-colors", !message.isRead && "bg-primary/5")}>
            <div className="flex items-start gap-3 p-3 hover:bg-accent/30">
                <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => onToggleSelect(message.id)}
                    className="mt-1 h-4 w-4"
                    onClick={(e: any) => e.stopPropagation()}
                />
                <button onClick={() => onOpen(message)} className="flex-1 min-w-0 text-left">
                    <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10 flex-shrink-0 ring-1 ring-border">
                            <AvatarImage src={message.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
                                {getInitials(message.sender)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <span className={cn("text-sm truncate", !message.isRead ? "text-foreground font-semibold" : "text-foreground font-medium")}>
                                    {message.sender}
                                </span>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    {message.hasAttachment && <Paperclip className="h-3 w-3 text-muted-foreground" />}
                                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <h3 className={cn("text-sm truncate flex-1", !message.isRead ? "font-semibold text-foreground" : "text-muted-foreground font-normal")}>
                                    {message.subject}
                                </h3>
                                {message.isStarred && <Star className="h-3.5 w-3.5 fill-primary text-primary flex-shrink-0" />}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-2">{message.preview}</p>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                {message.category && (
                                    <Badge variant="outline" className={cn("text-[10px] h-5 px-1.5 font-medium", getCategoryColor(message.category))}>
                                        {message.category}
                                    </Badge>
                                )}
                                {message.labels?.map((label) => (
                                    <Badge key={label} variant="secondary" className="text-[10px] h-5 px-1.5">
                                        {label}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
