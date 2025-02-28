import type { ITasks } from "@/interface/tasks.interface";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Props {
  tasks: ITasks[];
}

const TimeTracker = ({ tasks }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <section className="text-center py-5 ">
        <h1 className="text-4xl font-bold">Task Estimate Time Tracker</h1>
        <p className="text-lg text-gray-600 mt-2">
          Track & Plan Your Work Efficiently
        </p>
        <div className="mt-6"></div>
      </section>
      <section className="w-full max-w-4xl mt-10 ">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <motion.div key={task.name} whileHover={{ scale: 1.02 }}>
              <Card className="p-4 shadow-md bg-white rounded-lg">
                <CardContent className="">
                  <div className=" text-lg py-2 font-medium">
                    Name : {task.name}
                  </div>
                  <div className="text-lg font-medium ">
                    <span>Estimate Time :</span>
                    <span> {Math.floor(task.estimate / 60)}Hour</span>
                    <span className="m-2">{task.estimate % 60}Min</span>
                  </div>
                </CardContent>
                <div className="flex justify-start lg:justify-end ">
                  <Button className={"px-3 py-1 rounded-full text-white"} >
                    Start 
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimeTracker;
