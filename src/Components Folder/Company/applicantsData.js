const applicants = [
  {
    id: 1,
    name: "Juan Reyes",
    appliedDate: "Applied Mar 5",
    appliedFor: "Software Engineering Intern",
    course: "BS Computer Science",
    school: "UP Diliman",
    status: "Pending",
    email: "juan.reyes@up.edu.ph",
    phone: "+63 917 000 0001",
    gwa: "1.25",
    ojtHoursRequired: "486 hours",
    documents: [
      { name: "Resume.pdf", status: "Verified" },
      { name: "Endorsement letter.pdf", status: "Verified" },
      { name: "TOR.pdf", status: "Pending" },
    ],
    skills: ["React", "Node.js", "Python", "SQL", "TypeScript"],
    coverLetter:
      "I am excited to apply for the Software Engineering internship. I have hands-on experience with modern web frameworks and a strong academic background. I am eager to contribute and grow with TechCorp's engineering team.",
  },
  {
    id: 2,
    name: "Maria Santos",
    appliedDate: "Applied Mar 3",
    appliedFor: "UI/UX Design Intern",
    course: "BS Information Systems",
    school: "DLSU Manila",
    status: "Shortlisted",
    email: "maria.santos@dlsu.edu.ph",
    phone: "+63 917 000 0002",
    gwa: "1.45",
    ojtHoursRequired: "486 hours",
    documents: [
      { name: "Resume.pdf", status: "Verified" },
      { name: "Endorsement letter.pdf", status: "Verified" },
      { name: "Portfolio.pdf", status: "Verified" },
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    coverLetter:
      "I'd love to bring my design background to TechCorp. My coursework and freelance projects have given me a strong foundation in user-centered design, and I'm excited to apply that to real products.",
  },
  {
    id: 3,
    name: "Karl Lim",
    appliedDate: "Applied Feb 25",
    appliedFor: "IT Support",
    course: "BS Information Systems",
    school: "CIT-U",
    status: "Accepted",
    email: "karl.lim@cit.edu",
    phone: "+63 917 000 0003",
    gwa: "1.60",
    ojtHoursRequired: "486 hours",
    documents: [
      { name: "Resume.pdf", status: "Verified" },
      { name: "Endorsement letter.pdf", status: "Verified" },
      { name: "TOR.pdf", status: "Verified" },
    ],
    skills: ["Networking", "Windows Server", "Troubleshooting", "Linux"],
    coverLetter:
      "I'm applying for the IT Support internship to grow my hands-on experience with enterprise systems. I've maintained our school's computer lab network and I'm comfortable working directly with end users.",
  },
];

export default applicants;
