"use client";
import { tasksFixture } from "@/fixture/tasks.fixture";
import { useState } from "react";
import AddTask from "../components/FormAddTask";
import TimeTracker from "../components/TimeTracker";

const page = () => {
  const [tasks, setTasks] = useState(tasksFixture);
  return (
    <>
      <AddTask
        onSubmit={(data) => {
          console.log(data);
          const estimate = data.estimateTimeHour * 60 + data.estimateTimeMin;
          setTasks([...tasks, { name: data.name, estimate: estimate }]);
        }}
      />
      <TimeTracker tasks={tasks} />
    </>
  );
};

export default page;
