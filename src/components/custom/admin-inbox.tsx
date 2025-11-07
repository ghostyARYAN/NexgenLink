"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Inbox,
  Mail,
  MailOpen,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  Star,
  Archive,
  Trash2,
  Search,
  Filter,
} from "lucide-react";

// Message types
interface Message {
  id: string;
  from: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  priority: "low" | "medium" | "high" | "urgent";
  type: "info" | "warning" | "success" | "error";
  category: "system" | "user" | "doctor" | "appointment" | "alert";
}

// Sample inbox messages
const sampleMessages: Message[] = [
  {
    id: "1",
    from: "System Alert",
    subject: "New Doctor Registration Pending",
    content:
      "Dr. Sarah Wilson has submitted registration documents for review and approval.",
    timestamp: "2 hours ago",
    isRead: false,
    priority: "high",
    type: "warning",
    category: "doctor",
  },
  {
    id: "2",
    from: "Patient Support",
    subject: "Urgent: Patient Safety Concern",
    content:
      "Patient John Doe (ID: P12345) has reported severe allergic reaction. Immediate attention required.",
    timestamp: "4 hours ago",
    isRead: false,
    priority: "urgent",
    type: "error",
    category: "alert",
  },
  {
    id: "3",
    from: "Appointment System",
    subject: "Daily Appointment Summary",
    content:
      "Today's appointment summary: 45 scheduled, 38 completed, 2 cancelled, 5 no-shows.",
    timestamp: "6 hours ago",
    isRead: true,
    priority: "medium",
    type: "info",
    category: "appointment",
  },
  {
    id: "4",
    from: "Data Analytics",
    subject: "Weekly Health Metrics Report",
    content:
      "Weekly summary of patient health metrics and system performance is now available.",
    timestamp: "1 day ago",
    isRead: true,
    priority: "low",
    type: "success",
    category: "system",
  },
  {
    id: "5",
    from: "User Management",
    subject: "School Registration Approved",
    content:
      "Green Valley Elementary School registration has been approved and activated.",
    timestamp: "2 days ago",
    isRead: true,
    priority: "medium",
    type: "success",
    category: "user",
  },
];

interface AdminInboxProps {
  className?: string;
  compact?: boolean;
}

export function AdminInbox({ className, compact = false }: AdminInboxProps) {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = messages.filter((m) => !m.isRead).length;

  const getPriorityColor = (priority: Message["priority"]) => {
    switch (priority) {
      case "urgent":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-blue-600 bg-blue-100";
      case "low":
        return "text-gray-600 bg-gray-100";
    }
  };

  const getTypeIcon = (type: Message["type"]) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const markAsRead = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isRead: true } : msg,
      ),
    );
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.from.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && !message.isRead) ||
      filter === message.category;
    return matchesSearch && matchesFilter;
  });

  if (compact) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Inbox
            </div>
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {filteredMessages.slice(0, 3).map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                !message.isRead ? "bg-blue-50 border-blue-200" : "bg-white"
              }`}
              onClick={() => {
                setSelectedMessage(message);
                markAsRead(message.id);
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {!message.isRead ? (
                    <Mail className="h-3 w-3 text-blue-600" />
                  ) : (
                    <MailOpen className="h-3 w-3 text-gray-400" />
                  )}
                  {getTypeIcon(message.type)}
                </div>
                <Badge
                  className={`text-xs ${getPriorityColor(message.priority)}`}
                >
                  {message.priority}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium truncate">
                  {message.subject}
                </p>
                <p className="text-xs text-gray-500 truncate">{message.from}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}

          {filteredMessages.length > 3 && (
            <Button variant="ghost" size="sm" className="w-full">
              View All Messages ({filteredMessages.length - 3} more)
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${className}`}>
      {/* Message List */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Inbox className="h-5 w-5" />
                Admin Inbox
                {unreadCount > 0 && (
                  <Badge variant="destructive">{unreadCount} unread</Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="system">System</option>
                  <option value="doctor">Doctor</option>
                  <option value="user">User</option>
                  <option value="appointment">Appointments</option>
                  <option value="alert">Alerts</option>
                </select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                    !message.isRead ? "bg-blue-50 border-blue-200" : "bg-white"
                  } ${selectedMessage?.id === message.id ? "ring-2 ring-blue-500" : ""}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    markAsRead(message.id);
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex flex-col items-center gap-1">
                        {!message.isRead ? (
                          <Mail className="h-4 w-4 text-blue-600" />
                        ) : (
                          <MailOpen className="h-4 w-4 text-gray-400" />
                        )}
                        {getTypeIcon(message.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`font-medium truncate ${!message.isRead ? "font-semibold" : ""}`}
                          >
                            {message.subject}
                          </h4>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            {message.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {message.from}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {message.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        className={`text-xs ${getPriorityColor(message.priority)}`}
                      >
                        {message.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {message.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}

              {filteredMessages.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Inbox className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No messages found</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Detail */}
      <div>
        {selectedMessage ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(selectedMessage.type)}
                  Message Details
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">
                  {selectedMessage.subject}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>From: {selectedMessage.from}</span>
                  <span>•</span>
                  <span>{selectedMessage.timestamp}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    className={`text-xs ${getPriorityColor(selectedMessage.priority)}`}
                  >
                    {selectedMessage.priority} priority
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedMessage.category}
                  </Badge>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-700 leading-relaxed">
                  {selectedMessage.content}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t">
                <Button size="sm">Reply</Button>
                <Button variant="outline" size="sm">
                  Forward
                </Button>
                <Button variant="outline" size="sm">
                  Mark as Unread
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">Select a message to view details</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
