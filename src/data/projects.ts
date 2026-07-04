export type Project = {
  title: string;
  category: string;
  overview: string;
  technologies: string[];
  problem: string;
  solution: string;
  impact: string;
  githubHref: string;
  accent: "purple" | "violet" | "fuchsia";
};

export const projects: Project[] = [
  {
    title: "Threat Hunting Playbooks",
    category: "Threat Hunting",
    overview:
      "Repeatable hunting playbooks for suspicious authentication, encoded PowerShell, abnormal DNS, and persistence behavior.",
    technologies: ["MITRE ATT&CK", "Sentinel", "Splunk", "QRadar"],
    problem:
      "Analysts needed consistent hunt logic that could move from hypothesis to evidence without relying on tribal knowledge.",
    solution:
      "Designed structured playbooks with hypotheses, required telemetry, query logic, enrichment steps, and escalation notes.",
    impact:
      "Improved hunt repeatability and helped analysts validate suspicious behavior with clearer decision points.",
    githubHref: "https://github.com/faizaanmir",
    accent: "purple",
  },
  {
    title: "Detection Engineering",
    category: "Detection Strategy",
    overview:
      "Detection lifecycle work spanning use-case design, alert logic, tuning, documentation, and quality review.",
    technologies: ["Sigma", "KQL", "AQL", "SPL"],
    problem:
      "High-volume alerting made it difficult to separate meaningful detections from noisy rules.",
    solution:
      "Mapped detections to adversary techniques, tuned thresholds, documented intent, and reviewed telemetry prerequisites.",
    impact:
      "Increased signal quality and made detections easier to operate during live investigations.",
    githubHref: "https://github.com/faizaanmir",
    accent: "violet",
  },
  {
    title: "QRadar Upgrade",
    category: "SIEM Administration",
    overview:
      "Operational support for QRadar upgrade planning, validation, and post-upgrade monitoring.",
    technologies: ["IBM QRadar", "AQL", "Linux", "Change Management"],
    problem:
      "The SIEM needed modernization while preserving analyst workflows and alert reliability.",
    solution:
      "Validated key use cases, reviewed parser behavior, monitored system health, and supported controlled rollout steps.",
    impact:
      "Helped maintain SOC continuity while improving platform stability and readiness.",
    githubHref: "https://github.com/faizaanmir",
    accent: "fuchsia",
  },
  {
    title: "SIEM Rule Development",
    category: "Detection Content",
    overview:
      "Custom correlation logic for suspicious authentication, phishing artifacts, endpoint signals, and network anomalies.",
    technologies: ["QRadar", "Sentinel", "Splunk", "MITRE ATT&CK"],
    problem:
      "Important behaviors were not consistently captured by default alerting.",
    solution:
      "Created rule logic, tested against available telemetry, tuned false positives, and wrote analyst response notes.",
    impact:
      "Expanded detection coverage and reduced ambiguity during triage.",
    githubHref: "https://github.com/faizaanmir",
    accent: "purple",
  },
  {
    title: "Python IOC Extractor",
    category: "Security Automation",
    overview:
      "Automation utility for extracting IPs, domains, URLs, hashes, and email indicators from investigation artifacts.",
    technologies: ["Python", "Regex", "CLI", "CSV"],
    problem:
      "Manual IOC extraction from emails and reports slowed down enrichment and case documentation.",
    solution:
      "Built a typed parser workflow that normalizes indicators and prepares clean output for enrichment tools.",
    impact:
      "Reduced repetitive analyst effort and improved consistency in investigation notes.",
    githubHref: "https://github.com/faizaanmir",
    accent: "violet",
  },
  {
    title: "SOC Investigation Reports",
    category: "Incident Response",
    overview:
      "Structured report templates for incident timelines, evidence capture, decisions, containment, and lessons learned.",
    technologies: ["Markdown", "MITRE ATT&CK", "SIEM Evidence", "Case Notes"],
    problem:
      "Investigation outcomes were harder to compare when documentation structure varied between cases.",
    solution:
      "Created consistent report sections for evidence, analysis, scope, impact, actions, and recommendations.",
    impact:
      "Improved clarity for handoffs, escalations, and after-action review.",
    githubHref: "https://github.com/faizaanmir",
    accent: "fuchsia",
  },
  {
    title: "Phishing Investigation Workflow",
    category: "Email Security",
    overview:
      "End-to-end workflow for triaging suspicious emails, extracting artifacts, checking reputation, and documenting outcomes.",
    technologies: ["Email Headers", "URL Analysis", "Sandbox Review", "SIEM"],
    problem:
      "Phishing reports needed faster classification without skipping evidence quality.",
    solution:
      "Defined a repeatable workflow covering header review, link analysis, IOC extraction, scope checks, and user response.",
    impact:
      "Made phishing triage faster, clearer, and more defensible.",
    githubHref: "https://github.com/faizaanmir",
    accent: "purple",
  },
];
