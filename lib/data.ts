import {
  Activity,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseBackup,
  GitBranch,
  Globe2,
  HardDrive,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow
} from "lucide-react";

export const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export const heroCommands = [
  "Engineering cloud infrastructure...",
  "Automating deployments...",
  "Designing secure hybrid connectivity...",
  "Solving enterprise operations problems..."
];

export const metrics = [
  { label: "Cloud Domain", value: "Azure + Hybrid" },
  { label: "Operating Layer", value: "Linux / Windows" },
  { label: "Delivery Style", value: "IaC + Automation" }
];

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

export const experience = [
  {
    role: "Cloud Consultant",
    company: "Hewlett Packard Enterprise",
    focus: "Azure compute, secure networking, monitoring, and enterprise support",
    points: [
      "Designed and supported Azure compute and networking patterns for production workloads, including VM estates, virtual networks, routing, access controls, and operational guardrails.",
      "Improved secure hybrid connectivity using VPN, ExpressRoute-aware designs, DNS discipline, and network troubleshooting across cloud and enterprise environments.",
      "Built operational visibility with Azure Monitor, alerting, backup, recovery workflows, and structured incident handling."
    ]
  },
  {
    role: "Technical Consultant",
    company: "Self-Employed",
    focus: "Infrastructure troubleshooting, automation, Linux, and cloud advisory",
    points: [
      "Delivered hands-on consulting for Linux and Windows administration, Active Directory, patching, backup recovery, and infrastructure health checks.",
      "Automated recurring administration tasks with Python and shell scripting while documenting repeatable runbooks for operations teams.",
      "Advised on cloud-native migrations, secure access, network segmentation, and practical monitoring baselines."
    ]
  },
  {
    role: "Software Engineer",
    company: "HCLTech",
    focus: "DevOps automation, containerized systems, and infrastructure provisioning",
    points: [
      "Implemented infrastructure provisioning and deployment automation with Terraform, YAML pipelines, Azure CLI, Git, and repeatable release workflows.",
      "Supported Docker and AKS deployment models with attention to service reliability, configuration hygiene, and environment parity.",
      "Used scripting and systems knowledge to shorten troubleshooting loops across application, network, and operating system layers."
    ]
  },
  {
    role: "Technical Solutions Specialist",
    company: "Hewlett Packard Enterprise",
    focus: "Enterprise systems, incident response, and hybrid operations",
    points: [
      "Resolved infrastructure incidents across server, storage, OS, network, and access layers in enterprise environments.",
      "Administered Linux and Windows Server systems while supporting Active Directory, identity workflows, patching, and recovery processes.",
      "Translated complex production issues into clear remediation plans and durable operational improvements."
    ]
  }
];

export const projects = [
  {
    title: "Azure Landing Zone / Cloud Foundation",
    icon: Globe2,
    challenge: "Establish a secure, scalable Azure foundation ready for production workloads and enterprise governance.",
    architecture:
      "Hub-spoke network topology, management groups, policy baselines, shared services, logging, identity boundaries, and deployment templates.",
    stack: ["Azure", "Terraform", "Azure Policy", "Azure Monitor", "VNET", "RBAC"],
    outcome: "Repeatable foundation with clearer ownership, safer workload onboarding, and operational visibility from day one."
  },
  {
    title: "Hybrid Connectivity and Secure Networking",
    icon: LockKeyhole,
    challenge: "Connect cloud workloads to enterprise systems without weakening segmentation or operational control.",
    architecture:
      "Private address planning, VPN Gateway and ExpressRoute-ready patterns, peering, DNS forwarding, Private Link, firewall routes, and load balancing.",
    stack: ["VNET", "ExpressRoute", "VPN Gateway", "Private Link", "DNS", "Firewall"],
    outcome: "Reduced connectivity ambiguity, cleaner routing, and a more supportable security posture."
  },
  {
    title: "Infrastructure Automation with Terraform",
    icon: GitBranch,
    challenge: "Move provisioning away from manual portal changes and undocumented environment drift.",
    architecture:
      "Modular Terraform, remote state model, YAML pipeline gates, variable-driven environments, Azure CLI validation, and Git-based review flow.",
    stack: ["Terraform", "Azure DevOps", "YAML", "Git", "Azure CLI", "IaC"],
    outcome: "Faster repeatable deployments, fewer configuration surprises, and a stronger audit trail."
  },
  {
    title: "Containerized Workloads on AKS",
    icon: Boxes,
    challenge: "Run containerized services with predictable rollout, network control, and platform-level observability.",
    architecture:
      "AKS cluster design, ingress routing, namespace separation, secrets handling, image deployment flow, and resource monitoring.",
    stack: ["AKS", "Docker", "Kubernetes", "Azure Monitor", "YAML", "Git"],
    outcome: "More reliable application delivery with cleaner deployment boundaries and faster rollback paths."
  },
  {
    title: "Cloud Monitoring and Recovery Workflows",
    icon: DatabaseBackup,
    challenge: "Detect operational issues early and recover critical systems with documented, testable procedures.",
    architecture:
      "Metric alerts, log queries, backup policy mapping, Azure Site Recovery planning, runbooks, and incident response checkpoints.",
    stack: ["Azure Monitor", "Log Analytics", "ASR", "Backup", "Python", "Runbooks"],
    outcome: "Improved recovery confidence, reduced blind spots, and better signal during incidents."
  },
  {
    title: "Linux Automation Tools",
    icon: TerminalSquare,
    challenge: "Reduce repetitive administration across Linux hosts and make troubleshooting outputs consistent.",
    architecture:
      "SSH-based task execution, shell and Python utilities, service checks, package validation, log capture, and structured reports.",
    stack: ["Linux", "SSH", "Python", "Shell", "Git", "Systemd"],
    outcome: "Less manual effort, faster diagnostics, and repeatable evidence for operations reviews."
  }
];

export const certifications = [
  { title: "Microsoft Certified: Azure Fundamentals", icon: BadgeCheck },
  { title: "Microsoft Certified: Azure Administrator Associate", icon: CloudCog },
  { title: "Azure Networking Secure Access Certification", icon: ShieldCheck },
  { title: "Google IT Support Specialization", icon: HardDrive },
  { title: "Security in Google Cloud Platform Specialization", icon: LockKeyhole },
  { title: "Networks and Communications Security", icon: Network },
  { title: "Career Essentials in System Administration", icon: ServerCog }
];

export const terminalResponses: Record<string, string[]> = {
  help: ["Commands: about, skills, experience, projects, contact, clear"],
  about: [
    "Vishal Rao: Cloud Solutions Consultant and Computer Engineer.",
    "Focus: Azure, networking, Linux, Windows Server, automation, monitoring, DR, and enterprise operations."
  ],
  skills: [
    "Cloud: Azure, AKS, VM Scale Sets, App Service, Azure Monitor, ASR.",
    "Platform: Linux, SSH, Git, Python, Docker, Kubernetes, Terraform, Azure CLI, YAML.",
    "Network: VNET, Peering, ExpressRoute, VPN Gateway, DNS, Private Link, Firewalls."
  ],
  experience: [
    "HPE Cloud Consultant | Self-Employed Technical Consultant | HCLTech Software Engineer | HPE Technical Solutions Specialist"
  ],
  projects: [
    "Case studies: landing zone, hybrid networking, Terraform automation, AKS workloads, monitoring/recovery, Linux automation."
  ],
  contact: [
    "Email: ecavishu@gmail.com",
    "LinkedIn: linkedin.com/in/vishurao06",
    "GitHub: github.com/acevishu"
  ]
};

export const contactLinks = [
  { label: "Email", value: "ecavishu@gmail.com", href: "mailto:ecavishu@gmail.com", icon: Activity },
  { label: "LinkedIn", value: "linkedin.com/in/vishurao06", href: "https://www.linkedin.com/in/vishurao06", icon: BrainCircuit },
  { label: "GitHub", value: "github.com/acevishu", href: "https://github.com/acevishu", icon: Code2 }
];
