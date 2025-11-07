import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { BellIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { EmptyMuted } from './notification/Notification'
import UserProfile from './profile/profile'

export default function AdminHeader({ user }: { user: User }) {
    return (
        <div className='w-full flex items-center justify-between px-8 py-6'>
            <SidebarTrigger />
            <div className='flex items-center gap-4'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <BellIcon />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-2xl top-[30%]'>
                        <DialogHeader>
                            <DialogTitle>Notifications</DialogTitle>
                            <DialogDescription>Here are your recent notifications.</DialogDescription>
                        </DialogHeader>
                        <div>
                            <EmptyMuted />
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Avatar className='cursor-pointer'>
                            <AvatarImage src="" alt='' />
                            <AvatarFallback>
                                {user?.name?.charAt(0).toUpperCase() || 'A'}
                            </AvatarFallback>
                        </Avatar>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-2xl h-200'>
                        <DialogHeader>
                            <DialogTitle>Profile</DialogTitle>
                            <DialogDescription>Manage your profile Here</DialogDescription>
                        </DialogHeader>
                        <div>
                            <UserProfile />
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}
