"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const appointmentTypes = ["screening", "consultation", "vaccination", "follow-up", "group-session"]
const statusTypes = ["scheduled", "confirmed", "completed", "cancelled", "no-show", "rescheduled"]

const formSchema = z.object({
    campaignId: z.string().min(1, { message: "Campaign ID is required" }),
    participantId: z.string().min(1, { message: "Participant ID is required" }),
    email: z.string().email(), // Updated to use the simpler version
    appointmentType: z.enum(appointmentTypes),
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string(),
    scheduledDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Please enter a valid date",
    }),
    duration: z.coerce.number().positive({ message: "Duration must be positive" }),
    "location.name": z.string().min(1, { message: "Location name is required" }),
    "location.address": z.string().min(1, { message: "Address is required" }),
    "location.coordinates.lat": z.coerce.number().optional(),
    "location.coordinates.lng": z.coerce.number().optional(),
    "provider.id": z.string().min(1, { message: "Provider ID is required" }),
    "provider.name": z.string().min(1, { message: "Provider name is required" }),
    "provider.specialty": z.string().min(1, { message: "Specialty is required" }),
    "provider.credentials": z.string().min(1, { message: "Credentials are required" }),
    status: z.enum(statusTypes),
    notes: z.string().optional(),
})

export default function Campaign() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any, // Using type assertion to bypass resolver type issues
        defaultValues: {
            campaignId: "",
            participantId: "",
            email: "",
            appointmentType: "screening",
            title: "",
            description: "",
            scheduledDate: "",
            duration: 30,
            "location.name": "",
            "location.address": "",
            "location.coordinates.lat": undefined,
            "location.coordinates.lng": undefined,
            "provider.id": "",
            "provider.name": "",
            "provider.specialty": "",
            "provider.credentials": "",
            status: "scheduled",
            notes: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-bold">Create New Campaign Appointment</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <FormField
                        control={form.control}
                        name="campaignId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Campaign ID</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="participantId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Participant ID</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="appointmentType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Appointment Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select appointment type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {appointmentTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="scheduledDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Scheduled Date</FormLabel>
                                <FormControl>
                                    <Input type="datetime-local" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Duration (minutes)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Location Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="location.name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location.address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location.coordinates.lat"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Latitude (optional)</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.000001" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location.coordinates.lng"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Longitude (optional)</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.000001" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Provider Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="provider.id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Provider ID</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="provider.name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Provider Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="provider.specialty"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Specialty</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="provider.credentials"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Credentials</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {statusTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notes (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="w-full md:w-auto">Create Appointment</Button>
            </form>
        </Form>
    )
}
