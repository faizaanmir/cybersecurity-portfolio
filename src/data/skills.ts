import {
  Binary,
  Braces,
  Cloud,
  Network,
  Radar,
  Search,
  ShieldAlert,
  Siren,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "SIEM",
    description: "Operations, investigation, tuning, and platform administration.",
    icon: Radar,
    skills: ["IBM QRadar", "Microsoft Sentinel", "Splunk"],
  },
  {
    title: "EDR",
    description: "Endpoint alert triage and investigation across enterprise tooling.",
    icon: ShieldAlert,
    skills: ["Carbon Black", "Microsoft Defender"],
  },
  {
    title: "Threat Hunting",
    description: "Hypothesis-led hunting mapped to adversary behavior.",
    icon: Search,
    skills: ["Detection Engineering", "MITRE ATT&CK", "Incident Response"],
  },
  {
    title: "Programming",
    description: "Automation for enrichment, parsing, reporting, and response.",
    icon: Braces,
    skills: ["Python", "PowerShell", "Bash", "JavaScript"],
  },
  {
    title: "Networking",
    description: "Packet-aware investigation across core infrastructure signals.",
    icon: Network,
    skills: ["DNS", "TCP/IP", "DHCP", "VPN"],
  },
  {
    title: "Cloud",
    description: "Cloud security fundamentals for identity, logging, and response.",
    icon: Cloud,
    skills: ["AWS", "Azure"],
  },
  {
    title: "Response",
    description: "Structured analysis for phishing, malware, and suspicious access.",
    icon: Siren,
    skills: ["Triage", "Containment", "Escalation", "Reporting"],
  },
  {
    title: "Automation",
    description: "Repeatable workflows that reduce manual analyst effort.",
    icon: Binary,
    skills: ["IOC Extraction", "Log Parsing", "Case Enrichment"],
  },
];
