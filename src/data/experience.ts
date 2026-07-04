export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Orange Business",
    role: "Security Specialist",
    period: "September 2023 - Present",
    summary:
      "Supporting enterprise SOC operations across SIEM investigation, alert triage, detection tuning, threat hunting, and automation.",
    responsibilities: [
      "Security Monitoring",
      "Incident Response",
      "Threat Hunting",
      "Phishing Investigation",
      "Detection Engineering",
      "SIEM Rule Tuning",
      "QRadar Administration",
      "Sentinel Investigation",
      "Splunk Investigation",
      "Python Automation",
    ],
    achievements: [
      "QRadar Upgrade",
      "Netscout Integration",
      "Improved Detection Coverage",
    ],
  },
  {
    company: "TechBoxx",
    role: "Student Trainee",
    period: "Early Career",
    summary:
      "Built a foundation in networking, cloud fundamentals, and practical infrastructure troubleshooting.",
    responsibilities: ["Networking", "Cloud Fundamentals"],
    achievements: [
      "Strengthened core networking concepts",
      "Practiced cloud service fundamentals",
      "Developed operational troubleshooting habits",
    ],
  },
];
