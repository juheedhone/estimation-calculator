"use client";
import { tasksFixture } from "@/fixture/tasks.fixture";
import { useState } from "react";
import AddTask from "../components/AddTask";
import TimeTracker from "../components/TimeTracker";

const page = () => {
  const [tasks, setTasks] = useState(tasksFixture);
  return (
    <>
      <AddTask />
      <TimeTracker tasks={tasks} />
    </>
  );
};

export default page;
