type InteractiveTerminalData = {
  ariaLabel: string;
  title: string;
  auth: string;
  initialLog: string;
  prompt: string;
  placeholder: string;
  unknownCommandPrefix: string;
  unknownCommandHelp: string;
  responses: Record<string, string[]>;
};

export const interactiveTerminal: InteractiveTerminalData = {
  ariaLabel: "Interactive portfolio terminal",
  title: "console.drawer",
  auth: "AUTH: READ_ONLY",
  initialLog: "Vishal Rao cloud console. Type help to list commands.",
  prompt: ">",
  placeholder: "help",
  unknownCommandPrefix: "Command not found:",
  unknownCommandHelp: "Try help, about, skills, experience, projects, contact, or clear.",
  responses: {
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
  }
};
