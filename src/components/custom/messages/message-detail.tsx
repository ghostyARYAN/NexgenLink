"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { FileText, Download, Mail, Tag, Clock, Paperclip, Star, Archive, Trash2, MoreVertical, Reply, Forward, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Message } from "./types"
import { getInitials, getCategoryColor } from "./utils"

type Props = {
    message: Message
    onToggleStar: (id: string) => void
    onArchive: (id: string) => void
    onDelete: (id: string) => void
    onMarkAsUnread: (id: string) => void
}

export default function MessageDetail({ message, onToggleStar, onArchive, onDelete, onMarkAsUnread }: Props) {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Message Header */}
            <div className="p-6 border-b border-border bg-card/30 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                        <Avatar className="h-12 w-12 ring-2 ring-border">
                            <AvatarImage src={message.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                {getInitials(message.sender)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg font-semibold text-foreground mb-1 text-balance">{message.subject}</h2>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <span className="font-medium text-foreground">{message.sender}</span>
                                <span className="text-muted-foreground/70">&lt;{message.senderEmail}&gt;</span>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span>{message.timestamp}</span>
                                </div>
                                {message.hasAttachment && (
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Paperclip className="h-3.5 w-3.5" />
                                        <span>1 attachment</span>
                                    </div>
                                )}
                                {message.category && (
                                    <Badge variant="outline" className={cn("text-[10px] h-5", getCategoryColor(message.category))}>
                                        {message.category}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <Button variant="ghost" size="icon" onClick={() => onToggleStar(message.id)} className="h-9 w-9">
                            <Star className={cn("h-4 w-4", message.isStarred && "fill-primary text-primary")} />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => onArchive(message.id)} className="h-9 w-9">
                            <Archive className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => onDelete(message.id)} className="h-9 w-9">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                        <Separator orientation="vertical" className="h-6 mx-1" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem onClick={() => onMarkAsUnread(message.id)}>
                                    <Mail className="h-4 w-4 mr-2" />
                                    Mark as unread
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Tag className="h-4 w-4 mr-2" />
                                    Add label
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <FileText className="h-4 w-4 mr-2" />
                                    Print
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Message Content */}
            <ScrollArea className="flex-1 h-[calc(100vh-250px)]">
                <div className="p-6 max-w-4xl">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                        <p className="text-foreground leading-relaxed whitespace-pre-wrap text-pretty">{message.content}</p>
                    </div>

                    {message.hasAttachment && (
                        <div className="mt-6 pt-6 border-t border-border">
                            <h3 className="text-sm font-medium text-foreground mb-3">Attachments</h3>
                            <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground">design-system-updates.pdf</p>
                                    <p className="text-xs text-muted-foreground">2.4 MB</p>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                                    <Download className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>

            {/* Action Bar */}
            <div className="p-4 border-t border-border bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <Button className="gap-2 font-medium">
                        <Reply className="h-4 w-4" />
                        Reply
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent">
                        <Forward className="h-4 w-4" />
                        Forward
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent ml-auto">
                        <Send className="h-4 w-4" />
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}
