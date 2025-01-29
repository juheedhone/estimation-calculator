import AddTask from "../components/AddTask";
import TimeTracker from "../components/TimeTracker";

const page = () => {
  const estimatesTime = [
    { taskName: "List", estimateTime: 30 },
    { taskName: "ListView", estimateTime: 40 },
    { taskName: "Read Book", estimateTime: 10 },
    { taskName: "Running", estimateTime: 10},
  ];

  return (
    <>
      <AddTask />
      <TimeTracker estimateTime={estimatesTime} />
    </>
  );
};

export default page;
