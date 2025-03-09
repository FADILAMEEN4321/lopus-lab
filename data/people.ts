export const peopleData = [
  {
    id: "jane-lopus",
    name: "Dr. Jane Lopus",
    title: "Principal Investigator",
    category: "faculty",
    email: "jane.lopus@university.edu",
    website: "https://example.com/janelopus",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Dr. Jane Lopus is the founder and principal investigator of the Lopus Lab at the School of Biological Sciences. She received her Ph.D. in Chemical Biology from Stanford University and completed her postdoctoral training at Harvard Medical School.",
      "Her research focuses on developing novel approaches at the interface of chemistry and biology to address challenges in drug delivery and cellular imaging. Dr. Lopus has published over 50 papers in leading journals and has received numerous awards for her innovative research.",
      "In addition to her research, Dr. Lopus is committed to mentoring the next generation of scientists and promoting diversity in STEM fields.",
    ],
    education: [
      {
        degree: "Ph.D. in Chemical Biology",
        institution: "Stanford University",
        year: "2008",
      },
      {
        degree: "Postdoctoral Fellow",
        institution: "Harvard Medical School",
        year: "2008-2012",
      },
      {
        degree: "B.S. in Chemistry",
        institution: "University of California, Berkeley",
        year: "2003",
      },
    ],
    research: [
      "Nanomedicine and targeted drug delivery",
      "Chemical probes for cellular imaging",
      "Protein-protein interaction modulators",
      "Cellular mechanisms of drug resistance",
    ],
    publications: [
      {
        title: "Novel nanoparticle delivery system for targeted cancer therapy",
        authors: "Lopus J, Chen M, Johnson S",
        journal: "Nature Nanotechnology",
        volume: "15",
        pages: "123-130",
        year: "2023",
        doi: "10.1038/s41565-023-1234-5",
      },
      {
        title: "Chemical probes for visualizing mitochondrial dynamics",
        authors: "Chen M, Kim D, Lopus J",
        journal: "Journal of Cell Biology",
        volume: "220",
        pages: "456-468",
        year: "2022",
        doi: "10.1083/jcb.202201234",
      },
    ],
    publicationsCount: 50,
    awards: [
      {
        title: "NIH Director's New Innovator Award",
        organization: "National Institutes of Health",
        year: "2020",
      },
      {
        title: "Young Investigator Award",
        organization: "American Chemical Society",
        year: "2018",
      },
    ],
    teaching: [
      {
        code: "CHEM 4500",
        title: "Chemical Biology",
        description: "Advanced course covering the application of chemical techniques to biological systems.",
      },
      {
        code: "BIO 3200",
        title: "Cellular Imaging Techniques",
        description: "Laboratory course on modern methods for visualizing cellular processes.",
      },
    ],
    socialLinks: [
      {
        platform: "Twitter",
        url: "https://twitter.com/janelopus",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/janelopus",
      },
      {
        platform: "Google Scholar",
        url: "https://scholar.google.com/citations?user=janelopus",
      },
    ],
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Senior Researcher",
    category: "faculty",
    email: "michael.chen@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Dr. Michael Chen is a Senior Researcher at Lopus Lab with expertise in synthetic chemistry and drug design. He received his Ph.D. in Medicinal Chemistry from MIT and joined the lab in 2015.",
      "His research focuses on developing small molecule modulators of protein-protein interactions and novel chemical probes for cellular imaging. Dr. Chen has been instrumental in establishing several key research directions in the lab.",
    ],
    education: [
      {
        degree: "Ph.D. in Medicinal Chemistry",
        institution: "Massachusetts Institute of Technology",
        year: "2014",
      },
      {
        degree: "B.S. in Chemistry",
        institution: "University of Michigan",
        year: "2009",
      },
    ],
    research: [
      "Medicinal chemistry",
      "Structure-based drug design",
      "Fluorescent probe development",
      "Fragment-based drug discovery",
    ],
    publications: [
      {
        title: "Chemical probes for visualizing mitochondrial dynamics",
        authors: "Chen M, Kim D, Lopus J",
        journal: "Journal of Cell Biology",
        volume: "220",
        pages: "456-468",
        year: "2022",
        doi: "10.1083/jcb.202201234",
      },
    ],
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "PhD Student",
    category: "phd",
    email: "sarah.johnson@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Sarah Johnson is a third-year PhD student in the Lopus Lab. She received her B.S. in Biochemistry from UCLA and joined the lab in 2021.",
      "Her research focuses on developing targeted nanoparticles for drug delivery across the blood-brain barrier. Sarah is particularly interested in applications for neurodegenerative diseases.",
    ],
    education: [
      {
        degree: "B.S. in Biochemistry",
        institution: "University of California, Los Angeles",
        year: "2020",
      },
    ],
    research: ["Nanoparticle drug delivery", "Blood-brain barrier transport", "Neurodegenerative disease therapeutics"],
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "Lab Technician",
    category: "staff",
    email: "david.kim@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "David Kim is a Lab Technician who joined Lopus Lab in 2019. He received his B.S. in Biology from the University of Washington.",
      "David provides technical support for various research projects in the lab, with a focus on cell culture and microscopy techniques. His expertise in cellular imaging has been valuable for multiple projects.",
    ],
    education: [
      {
        degree: "B.S. in Biology",
        institution: "University of Washington",
        year: "2018",
      },
    ],
  },
  {
    id: "emily-patel",
    name: "Emily Patel",
    title: "Postdoctoral Researcher",
    category: "postdoc",
    email: "emily.patel@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Dr. Emily Patel is a Postdoctoral Researcher who joined Lopus Lab in 2022 after completing her Ph.D. in Pharmaceutical Sciences from the University of Toronto.",
      "Her research focuses on developing novel approaches to overcome drug resistance in cancer cells. Emily combines chemical biology and genomics approaches to identify new therapeutic targets.",
    ],
    education: [
      {
        degree: "Ph.D. in Pharmaceutical Sciences",
        institution: "University of Toronto",
        year: "2021",
      },
      {
        degree: "M.S. in Pharmacology",
        institution: "McGill University",
        year: "2017",
      },
      {
        degree: "B.S. in Biochemistry",
        institution: "University of British Columbia",
        year: "2015",
      },
    ],
    research: ["Cancer drug resistance", "Targeted therapy", "Chemical genomics", "Drug combination strategies"],
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Masters Student",
    category: "masters",
    email: "james.wilson@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "James Wilson is a Masters student who joined Lopus Lab in 2022. He received his B.S. in Chemistry from the University of Oregon.",
      "His research project focuses on developing fluorescent probes for tracking protein kinase activity in living cells. James is interested in pursuing a career in the pharmaceutical industry after graduation.",
    ],
    education: [
      {
        degree: "B.S. in Chemistry",
        institution: "University of Oregon",
        year: "2021",
      },
    ],
    research: ["Fluorescent biosensors", "Protein kinase activity", "Live-cell imaging"],
  },
  {
    id: "lisa-rodriguez",
    name: "Lisa Rodriguez",
    title: "Undergraduate Researcher",
    category: "undergrad",
    email: "lisa.rodriguez@university.edu",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Lisa Rodriguez is an undergraduate researcher who joined Lopus Lab in 2023. She is currently pursuing a B.S. in Biological Sciences.",
      "Lisa is assisting with projects related to cellular imaging and is learning various laboratory techniques. She plans to apply to graduate programs in chemical biology after completing her undergraduate degree.",
    ],
    education: [
      {
        degree: "B.S. in Biological Sciences (in progress)",
        institution: "Current University",
        year: "Expected 2025",
      },
    ],
  },
  {
    id: "robert-zhang",
    name: "Dr. Robert Zhang",
    title: "Former Postdoctoral Researcher",
    category: "alumni",
    imageSrc: "/placeholder.svg?height=400&width=400",
    bio: [
      "Dr. Robert Zhang was a Postdoctoral Researcher in Lopus Lab from 2018 to 2022. He received his Ph.D. in Biophysics from Cornell University.",
      "During his time in the lab, Robert developed novel methods for studying protein-protein interactions using chemical crosslinking approaches. He is currently an Assistant Professor at the University of Minnesota.",
    ],
    education: [
      {
        degree: "Ph.D. in Biophysics",
        institution: "Cornell University",
        year: "2017",
      },
    ],
    currentPosition: "Assistant Professor, University of Minnesota",
  },
]

