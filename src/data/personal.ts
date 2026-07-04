import {
  Mail,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  value?: string;
};

export const personal = {
  name: "Mir Faizaan Sajjad",
  initials: "MF",
  role: "Security Operations Analyst / Detection Engineer",
  location: "India",
  email: "mir_faizaan@outlook.com",
  githubHref: "https://github.com/faizaanmir",
  linkedInHref: "https://www.linkedin.com/in/mir-faizaan-sajjad-8834821a7/",
  resumeHref: "/Resume_MirFaizaanSajjad_2026.pdf",
  titles: [
    "Security Operations Analyst",
    "Detection Engineer",
    "Threat Hunter",
    "Incident Responder",
    "SIEM Engineer",
  ],
  tagline:
    "Building resilient detection strategies through incident response, threat hunting, SIEM engineering, and security automation.",
  summary:
    "Security professional focused on enterprise SOC operations, detection engineering, threat hunting, incident response, SIEM administration, and practical automation. I turn noisy telemetry into reliable detections, faster investigations, and measurable security outcomes.",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/faizaanmir",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mir-faizaan-sajjad-8834821a7/",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: "mailto:mir_faizaan@outlook.com",
      icon: Mail,
    },
  ] satisfies SocialLink[],
  profileHighlights: [
    "Enterprise SOC monitoring and escalation workflows",
    "Detection coverage improvement across SIEM and EDR telemetry",
    "Threat hunting hypotheses mapped to MITRE ATT&CK",
    "Python and PowerShell automation for repeatable investigations",
  ],
  metrics: [
    { value: "24/7", label: "SOC Operations" },
    { value: "", label: "Multiple SIEM/XDR Coverage" },
    { value: "4", label: "SIEM / EDR Platforms" },
  ],
  contactCards: [
    {
      label: "Email",
      value: "mir_faizaan@outlook.com",
      href: "mailto:mir_faizaan@outlook.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/mir-faizaan-sajjad-8834821a7/",
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      value: "Review security projects",
      href: "https://github.com/faizaanmir",
      icon: GitHubIcon,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: "/Resume_MirFaizaanSajjad_2026.pdf",
      icon: ShieldCheck,
    },
  ] satisfies SocialLink[],
};
