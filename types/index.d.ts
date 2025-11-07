type sidebarProps = {
  title: string;
  url: string;
  icon: React.JSX.Element;
};

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
  pincode?: string;
  state?: string;
  roleBasedURL?: string;
};

type Patient = {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  institution: {
    type: string;
    name: string;
    grade?: string;
    rollNumber?: string;
  };
  guardian: {
    name: string;
    relation: string;
    phone?: string;
    email?: string;
  };
  contact: {
    email?: string;
    phone?: string;
  };
  location: {
    state: string;
    district: string;
    city: string;
    pincode?: string;
    region?: string;
    coordinates?: { lat: number; lng: number };
  };
  healthReport: {
    type: string;
    date: string;
    examiner: {
      name: string;
      specialization?: string;
      institution?: string;
    };
    details: Record<string, any>;
    followUpRequired?: boolean;
  };
  lifestyle?: {
    diet?: string;
    sports?: string[];
    screenTimeHours?: number;
    sleepHours?: number;
  };
  campaignId?: string;
};

interface CampaignAppointment {
  id: string;
  campaignId: string;
  participantId: string;
  email: string;
  appointmentType:
  | "screening"
  | "consultation"
  | "vaccination"
  | "follow-up"
  | "group-session";
  title: string;
  description: string;
  scheduledDate: Date;
  duration: number; // in minutes
  location: {
    name: string;
    address: string;
    coordinates?: { lat: number; lng: number };
  };
  provider: {
    id: string;
    name: string;
    specialty: string;
    credentials: string;
  };
  status:
  | "scheduled"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "no-show"
  | "rescheduled";
  notes?: string;
  remindersSent: number;
  lastReminderDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}