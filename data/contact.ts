import { Activity, BrainCircuit, Code2 } from "lucide-react";

export const contactHeader = {
  id: "contact",
  eyebrow: "Contact",
  title: "Ready for serious cloud, systems, and platform conversations.",
  description: "Use the direct channels or send a short project note."
};

export const contactLinks = [
  { label: "Email", value: "ecavishu@gmail.com", href: "mailto:ecavishu@gmail.com", icon: Activity },
  { label: "LinkedIn", value: "linkedin.com/in/vishurao06", href: "https://www.linkedin.com/in/vishurao06", icon: BrainCircuit },
  { label: "GitHub", value: "github.com/acevishu", href: "https://github.com/acevishu", icon: Code2 }
];

export const socialLinks = {
  linkedIn: {
    href: "https://www.linkedin.com/in/vishurao06",
    label: "LinkedIn"
  },
  github: {
    href: "https://github.com/acevishu",
    label: "GitHub"
  },
  email: {
    href: "mailto:ecavishu@gmail.com",
    label: "Email"
  }
};

export const contactForm = {
  name: {
    label: "Name",
    placeholder: "Your name"
  },
  email: {
    label: "Email",
    placeholder: "you@example.com"
  },
  subject: {
    label: "Subject",
    placeholder: "Cloud architecture / consulting / platform work"
  },
  message: {
    label: "Message",
    placeholder: "Tell me what needs to be designed, automated, recovered, secured, or debugged."
  },
  submitLabel: "Send Message"
};

export const footer = {
  text: "Vishal Rao // Azure, Linux, DevOps, Networking, Automation"
};
