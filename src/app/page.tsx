"use client";
import { tasksFixture } from "@/fixture/tasks.fixture";
import { useState } from "react";
import AddTask from "../components/FormAddTask";
import TimeTracker from "../components/TimeTracker";
import LandingPage from "@/components/LandingPage";
import FormAddTask from "../components/FormAddTask";

const page = () => {
  const [tasks, setTasks] = useState(tasksFixture);
  return (
    <>
    <LandingPage></LandingPage>
      {/* <FormAddTask
        onSubmit={(data) => {
          console.log(data);
          const estimate = data.estimateTimeHour * 60 + data.estimateTimeMin;
          setTasks([...tasks, { name: data.name, estimate: estimate }]);
        }}
      /> */}
      {/* <TimeTracker tasks={tasks} /> */}
    </>
  );
};

export default page;
