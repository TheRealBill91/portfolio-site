// All public-facing content for the site lives here.
// Anything in this file is visible to anyone who visits billycummings.com,
// so keep it to what you're comfortable having on the open web.

export interface Role {
  title: string;
  company: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  note?: string;
}

export const profile = {
  name: "Bill Cummings",
  headline: "Network Operations Analyst — Reporting & Analysis",
  linkedin: "https://www.linkedin.com/in/bill-cummings-jr-b915b2203",

  intro:
    "I turn network operations data into reporting that helps teams see what's happening, why it keeps happening, and what to fix next.",

  about: [
    "I'm a Network Operations Analyst at i3 Broadband, where I focus on operations reporting, incident trend analysis, and process documentation. Most days I'm working with ticket, alarm, outage, and KPI data to find recurring issues and give leadership a clear view of network performance.",
    "I have a B.S. in Information Systems & Technology from the University of Missouri–St. Louis, and I've kept building on it through self-study in networking, databases, data analysis, and web development.",
  ],

  experience: [
    {
      title: "Network Operations Analyst, Reporting & Analysis",
      company: "i3 Broadband",
      start: "2025",
      end: "Present",
      current: true,
      highlights: [
        "Produce recurring network operations and incident reporting for leadership and cross-team follow-up.",
        "Analyze alarm, ticket, and outage data to surface trends and recurring drivers affecting reliability.",
        "Maintain KPI reporting in Power BI, including data validation and consistency checks.",
        "Write knowledge articles, process documentation, and training material for NOC processes.",
        "Supported network change management by creating change records and coordinating planned-maintenance communications.",
      ],
    },
    {
      title: "Technical Analyst",
      company: "Lorilee Realty",
      start: "2023",
      end: "2025",
      highlights: [],
    },
    {
      title: "Network Operations Analyst",
      company: "Charter Communications",
      start: "2022",
      end: "2022",
      highlights: [
        "Analyzed network alarm data to find correlation patterns and reduce alarm noise.",
        "Presented process-improvement recommendations to senior network operations leadership.",
      ],
    },
  ] satisfies Role[],

  education: [
    {
      degree: "B.S., Information Systems & Technology",
      school: "University of Missouri–St. Louis",
      year: "2022",
      note: "Dean's List",
    },
  ] satisfies Education[],

  skills: [
    "Operations reporting",
    "KPI analysis",
    "Power BI",
    "Excel",
    "Incident & trend analysis",
    "Root cause analysis",
    "Process documentation",
    "Networking fundamentals",
  ],
};
