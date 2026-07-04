export type Certification = {
  name: string;
  issuer: string;
  focus: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft SC-200",
    issuer: "Microsoft",
    focus: "Security operations, Sentinel, Defender, and incident response.",
  },
  {
    name: "Splunk Certified Power User",
    issuer: "Splunk",
    focus: "Search, reporting, dashboards, and field extraction workflows.",
  },
  {
    name: "PCDRA",
    issuer: "Security Certification",
    focus: "Practical cyber defense and response analysis fundamentals.",
  },
  {
    name: "Fortinet Fundamentals",
    issuer: "Fortinet",
    focus: "Network security, threat landscape, and security product basics.",
  },
  {
    name: "StationX Cyber Security Course",
    issuer: "StationX",
    focus: "Foundational security concepts, tooling, and analyst practices.",
  },
];
