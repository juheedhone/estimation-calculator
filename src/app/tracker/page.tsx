"use client";

import FormAddTask from "@/components/FormAddTask";
import TimeTracker from "@/components/TimeTracker";

import { tasksFixture } from "@/fixture/tasks.fixture";
import { useState } from "react";

const Page = () => {
  const [tasks, setTasks] = useState(tasksFixture);
  return (
    <>
      <FormAddTask
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

export default Page;
