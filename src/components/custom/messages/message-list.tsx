"use client"

import MessageItem from "./message-item"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import type { Message } from "./types"

type Props = {
    messages: Message[]
    selectedIds: Set<string>
    onToggleSelect: (id: string) => void
    onSelectAll: () => void
    onOpen: (message: Message) => void
}

export default function MessageList({ messages, selectedIds, onToggleSelect, onSelectAll, onOpen }: Props) {
    return (
        <>
            <ScrollArea className="flex-1 overflow-y-auto">
                <div className="sticky top-0 left-0 bg-white px-3 py-2 border-b border-border/50 flex items-center gap-2 z-50">
                    <Checkbox
                        checked={selectedIds.size === messages.length && messages.length > 0}
                        onCheckedChange={onSelectAll}
                        className="h-4 w-4"
                    />
                    <span className="text-xs text-muted-foreground">{messages.length} messages</span>
                </div>
                <div className="divide-y divide-border/50">
                    {messages.map((m) => (
                        <MessageItem
                            key={m.id}
                            message={m}
                            isSelected={selectedIds.has(m.id)}
                            onToggleSelect={onToggleSelect}
                            onOpen={onOpen}
                        />
                    ))}
                </div>
            </ScrollArea>
        </>
    )
}
