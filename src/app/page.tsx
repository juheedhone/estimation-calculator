"use client";
import LandingPage from "@/components/LandingPage";

const page = () => {
  return (
    <>
      <LandingPage />
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
