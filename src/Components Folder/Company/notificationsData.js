const notifications = [
  {
    id: 1,
    type: "applicant",
    title: "New applicant — Juan Reyes",
    detail: "Applied for Software Engineering Intern",
    fullDetail:
      "Juan Reyes submitted an application for the Software Engineering Intern position. His resume, endorsement letter, and TOR are attached to his profile for review.",
    time: "2 hours ago",
    read: false,
    action: { label: "View applicant", to: "/component-4/1" },
  },
  {
    id: 2,
    type: "document",
    title: "Document submitted — Maria Santos",
    detail: "TOR uploaded for review",
    fullDetail:
      "Maria Santos uploaded her Transcript of Records for review. Please verify the document before proceeding with her application status.",
    time: "5 hours ago",
    read: false,
    action: { label: "View applicant", to: "/component-4/2" },
  },
  {
    id: 3,
    type: "reminder",
    title: "Evaluation reminder",
    detail: "Maria Santos evaluation is due in 5 days",
    fullDetail:
      "Maria Santos's mid-internship evaluation is coming up in 5 days. Make sure to complete the evaluation form before the deadline to keep her OJT records up to date.",
    time: "1 day ago",
    read: false,
  },
  {
    id: 4,
    type: "accepted",
    title: "Ana Cruz accepted your offer",
    detail: "Onboarding can now be scheduled",
    fullDetail:
      "Ana Cruz has accepted the internship offer. You can now proceed to schedule her onboarding and prepare her Certificate of Internship once requirements are complete.",
    time: "2 days ago",
    read: true,
  },
];

export default notifications;
