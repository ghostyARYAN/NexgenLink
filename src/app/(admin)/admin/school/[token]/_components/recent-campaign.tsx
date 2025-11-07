"use client";
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { data } from "@/data/campaign-data.ts";
import { Calendar, Users, Info, MapPin, Clock, Tag, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SimplifiedCampaign = {
    id: string;
    title: string;
    date: string;
    status: string;
    description?: string;
    participantId?: string;
    location?: {
        name: string;
        address: string;
    };
    duration?: number;
    appointmentType?: string;
    provider?: {
        name: string;
        specialty: string;
    };
    notes?: string;
    createdAt?: string;
};

export default function RecentCampaign() {
    // Transform the data to match our UI needs
    const recentCampaigns: SimplifiedCampaign[] = data.slice(0, 6).map(item => ({
        id: item.id,
        title: item.title,
        date: item.scheduledDate.toLocaleDateString(),
        status: item.status === "completed" ? "Completed" :
            item.status === "confirmed" ? "Active" :
                item.status === "scheduled" ? "Scheduled" :
                    item.status,
        description: item.description,
        participantId: item.participantId,
        location: item.location,
        duration: item.duration,
        appointmentType: item.appointmentType,
        provider: item.provider,
        notes: item.notes,
        createdAt: item.createdAt.toLocaleDateString()
    }));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'Completed':
                return 'bg-blue-100 text-blue-800 border-blue-300';
            default:
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        }
    };

    const formatAppointmentType = (type?: string) => {
        if (!type) return "";
        return type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
    };

    return (
        <div className="space-y-6">
            <div className='flex items-center justify-between'>
                <h3 className="text-xl font-bold">Recent Campaigns</h3>
                <Link href={`${typeof window != undefined ? null : window.location.pathname}/campaign`}>
                    <Button variant="link" size="sm">
                        View More
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentCampaigns.map((campaign, index) => (
                    <Dialog key={index}>
                        <DialogTrigger className="w-full">
                            <Card className="p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer h-full flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-semibold text-lg truncate">{campaign.title}</h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                        {campaign.status}
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mb-2">
                                    <Calendar className="h-4 w-4 mr-1" /> {campaign.date}
                                </div>
                                {campaign.description && (
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                        {campaign.description}
                                    </p>
                                )}
                                <div className="mt-auto pt-3 text-xs text-blue-600 font-medium">
                                    Click to see details
                                </div>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                            <DialogTitle></DialogTitle>
                            <div className="p-1">
                                <div className={`rounded-t-lg p-4 ${getStatusColor(campaign.status)}`}>
                                    <h2 className="text-xl font-bold">{campaign.title}</h2>
                                    <div className="flex items-center mt-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-white/50`}>
                                            {campaign.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-5 w-5 text-gray-600" />
                                            <div>
                                                <p className="text-sm font-medium">Campaign Date</p>
                                                <p className="text-sm text-gray-600">{campaign.date}</p>
                                            </div>
                                        </div>

                                        {campaign.duration && (
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-5 w-5 text-gray-600" />
                                                <div>
                                                    <p className="text-sm font-medium">Duration</p>
                                                    <p className="text-sm text-gray-600">{campaign.duration} minutes</p>
                                                </div>
                                            </div>
                                        )}

                                        {campaign.appointmentType && (
                                            <div className="flex items-center gap-2">
                                                <Tag className="h-5 w-5 text-gray-600" />
                                                <div>
                                                    <p className="text-sm font-medium">Type</p>
                                                    <p className="text-sm text-gray-600">{formatAppointmentType(campaign.appointmentType)}</p>
                                                </div>
                                            </div>
                                        )}

                                        {campaign.participantId && (
                                            <div className="flex items-center gap-2">
                                                <Users className="h-5 w-5 text-gray-600" />
                                                <div>
                                                    <p className="text-sm font-medium">Participant ID</p>
                                                    <p className="text-sm text-gray-600">{campaign.participantId}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {campaign.location && (
                                        <div className="flex items-start gap-2">
                                            <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium">Location</p>
                                                <p className="text-sm text-gray-600">{campaign.location.name}</p>
                                                <p className="text-sm text-gray-600">{campaign.location.address}</p>
                                            </div>
                                        </div>
                                    )}

                                    {campaign.provider && (
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium">Provider</p>
                                                <p className="text-sm text-gray-600">{campaign.provider.name}</p>
                                                <p className="text-sm text-gray-500">{campaign.provider.specialty}</p>
                                            </div>
                                        </div>
                                    )}

                                    {campaign.description && (
                                        <div className="flex items-start gap-2">
                                            <Info className="h-5 w-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium">Description</p>
                                                <p className="text-sm text-gray-600">{campaign.description}</p>
                                            </div>
                                        </div>
                                    )}

                                    {campaign.notes && (
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="h-5 w-5 text-gray-600 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium">Notes</p>
                                                <p className="text-sm text-gray-600">{campaign.notes}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-xs text-gray-500 mt-4 pt-2 border-t">
                                        Created on: {campaign.createdAt} • ID: {campaign.id}
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}
