import { Boxes, DatabaseBackup, GitBranch, Globe2, LockKeyhole, TerminalSquare } from "lucide-react";

export const projectsHeader = {
  id: "projects",
  eyebrow: "Projects",
  title: "Architecture-driven case studies.",
  description: "Built to read like real engineering work: challenge, architecture, stack, and outcome."
};

export const projectCardLabels = {
  challenge: "challenge:",
  architecture: "architecture:",
  outcome: "outcome:",
  github: "GitHub",
  details: "details"
};

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
