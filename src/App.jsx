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
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Carol Davis",
      role: "Full Stack Developer",
      emp_id: "EMP1003",
      profile_image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Project Manager",
      emp_id: "EMP1004",
      profile_image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Eva Brown",
      role: "UI/UX Designer",
      emp_id: "EMP1005",
      profile_image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Frank Thomas",
      role: "QA Engineer",
      emp_id: "EMP1006",
      profile_image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "Grace Lee",
      role: "DevOps Engineer",
      emp_id: "EMP1007",
      profile_image:
        "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 8,
      name: "Hank White",
      role: "Data Scientist",
      emp_id: "EMP1008",
      profile_image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 9,
      name: "Ivy Walker",
      role: "Scrum Master",
      emp_id: "EMP1009",
      profile_image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 10,
      name: "Jack Hall",
      role: "Business Analyst",
      emp_id: "EMP1010",
      profile_image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <>
      <UserData users={users} />
    </>
  );
}

export default App;
