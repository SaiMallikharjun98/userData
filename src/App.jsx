import React from "react";
import UserData from "./components/UserData";
function App() {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      emp_id: "EMP1001",
      profile_image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Backend Developer",
      emp_id: "EMP1002",
      profile_image:
        "https://unsplash.com/photos/secretary-women-working-in-business-office-G_6KSg7ipXA",
    },
    {
      id: 3,
      name: "Carol Davis",
      role: "Full Stack Developer",
      emp_id: "EMP1003",
      profile_image:
        "https://unsplash.com/photos/secretary-women-working-in-business-office-G_6KSg7ipXA",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Project Manager",
      emp_id: "EMP1004",
      profile_image:
        "https://unsplash.com/photos/secretary-women-working-in-business-office-G_6KSg7ipXA",
    },
    {
      id: 5,
      name: "Eva Brown",
      role: "UI/UX Designer",
      emp_id: "EMP1005",
      profile_image:
        "https://unsplash.com/photos/a-woman-sitting-at-a-desk-with-a-laptop-8wY6DwGWeOU",
    },
    {
      id: 6,
      name: "Frank Thomas",
      role: "QA Engineer",
      emp_id: "EMP1006",
      profile_image:
        "https://unsplash.com/photos/a-woman-sitting-at-a-desk-with-a-laptop-8wY6DwGWeOU",
    },
    {
      id: 7,
      name: "Grace Lee",
      role: "DevOps Engineer",
      emp_id: "EMP1007",
      profile_image:
        "https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Hank White",
      role: "Data Scientist",
      emp_id: "EMP1008",
      profile_image:
        "https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Ivy Walker",
      role: "Scrum Master",
      emp_id: "EMP1009",
      profile_image:
        "https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Jack Hall",
      role: "Business Analyst",
      emp_id: "EMP1010",
      profile_image:
        "https://unsplash.com/photos/a-man-wearing-glasses-looking-off-into-the-distance-CjMhwsnG8D4",
    },
  ];

  return (
    <>
      <UserData users={users} />
    </>
  );
}

export default App;
