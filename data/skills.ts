import { CloudCog, Network, ServerCog, Workflow } from "lucide-react";

export const skillsHeader = {
  id: "skills",
  eyebrow: "Skills",
  title: "Technical stack organized by operational layer.",
  description: "Glowing where it should, grounded where it matters."
};

export const skills = [
  {
    title: "Cloud Platforms",
    icon: CloudCog,
    items: [
      "Microsoft Azure",
      "Azure Networking",
      "Azure Compute",
      "AKS",
      "VM Scale Sets",
      "App Service",
      "Azure Monitor",
      "Azure Site Recovery"
    ]
  },
  {
    title: "DevOps / Platform",
    icon: Workflow,
    items: [
      "Linux",
      "SSH",
      "Git",
      "Python",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure CLI",
      "YAML",
      "Infrastructure as Code"
    ]
  },
  {
    title: "Networking / Security",
    icon: Network,
    items: [
      "VNETs",
      "Subnets",
      "Peering",
      "ExpressRoute",
      "VPN Gateway",
      "Load Balancers",
      "DNS",
      "Front Door",
      "Private Link",
      "Firewalls"
    ]
  },
  {
    title: "Systems / Operations",
    icon: ServerCog,
    items: [
      "Windows Server",
      "Linux Administration",
      "Active Directory",
      "Azure AD",
      "Patch Management",
      "Backup and Recovery",
      "Incident Management"
    ]
  }
];
