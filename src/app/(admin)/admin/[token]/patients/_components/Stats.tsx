import { cn } from "@/lib/utils";
import Image from "next/image";

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("relative h-full w-full overflow-hidden rounded-3xl p-4", className)}>
            {children}
        </div>
    );
}

function FullBodyReportCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700 row-span-2">
            <span className="text-lg font-semibold">Full Body Report</span>
            <div className="flex-1 flex items-center justify-center">
                <Image src="/full-body.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="flex gap-2 mt-2">
                <button className="p-2 bg-green-500 text-white rounded">
                    <span>Download</span>
                </button>
                <button className="p-2 bg-blue-500 text-white rounded">
                    <span>Share</span>
                </button>
                <button className="p-2 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View Report</span>
                    <span className="ml-2">→</span>
                </button>
            </div>
        </BentoCard>
    );
}

function DentalCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Dental Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/tooth.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}

function OpticalCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Optical Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/eyes.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}
function NeurologyCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Neurology Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/neuron.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}

function CardiologyCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Cardiology Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/heart.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}

function PulmonologyCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Pulmonology Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/lungs.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}
function PsychologyCard() {
    return (
        <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
            <span className="text-md font-semibold">Psychology Report</span>
            <div className="flex-1 flex items-center justify-center py-4">
                <Image src="/brain.svg" alt="Full Body" width={120} height={120} />
            </div>
            <div className="text-xs text-gray-500">View, Download, Share, Compare your reports.</div>
            <div className="flex gap-2 mt-1">
                <button className="p-1 bg-green-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-blue-500 text-white rounded w-8 h-8"></button>
                <button className="p-1 bg-gray-100 text-black rounded ml-auto flex items-center">
                    <span>View</span>
                    <span className="ml-1">→</span>
                </button>
            </div>
        </BentoCard>
    );
}

export default function PatientsStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-4">
            <div className="md:col-span-1">
                <FullBodyReportCard />
            </div>
            <div className="h-full md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <DentalCard />
                <OpticalCard />
                <NeurologyCard />
                <CardiologyCard />
                <PulmonologyCard />
                <PsychologyCard />
            </div>
        </div>
    );
}
