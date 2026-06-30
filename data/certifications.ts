import { BadgeCheck, CloudCog, HardDrive, LockKeyhole, Network, ServerCog, ShieldCheck } from "lucide-react";

export const certificationsHeader = {
  id: "certifications",
  eyebrow: "Certifications",
  title: "Signals of cloud, security, and system administration depth."
};

export const certifications = [
  { title: "Microsoft Certified: Azure Fundamentals", icon: BadgeCheck },
  { title: "Microsoft Certified: Azure Administrator Associate", icon: CloudCog },
  { title: "Azure Networking Secure Access Certification", icon: ShieldCheck },
  { title: "Google IT Support Specialization", icon: HardDrive },
  { title: "Security in Google Cloud Platform Specialization", icon: LockKeyhole },
  { title: "Networks and Communications Security", icon: Network },
  { title: "Career Essentials in System Administration", icon: ServerCog }
];
