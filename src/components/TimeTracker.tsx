import type { ITasks } from "@/interface/tasks.interface";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface Props {
  tasks: ITasks[];
}

const TimeTracker = ({ tasks }: Props) => {
  if (tasks.length === 0) return null;
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      {/* <Table>
        <TableHeader>
          <TableRow className="border-slate-700">
            <TableHead className="w-[100px]">TaskName</TableHead>
            <TableHead>EstimateTime</TableHead>
            <TableHead>Start/End</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((estimate) => (
            <TableRow className="font-medium" key={estimate.name}>
              <TableCell>{estimate.name}</TableCell>
              <TableCell>{estimate.estimate}</TableCell>
              <TableCell>
                <Button>Start</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Task Estimate Time Tracker</h1>
        <p className="text-lg text-gray-600 mt-2">
          Track & Plan Your Work Efficiently
        </p>
        <div className="mt-6"></div>
      </section>
      <section className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <motion.div key={task.name} whileHover={{ scale: 1.02 }}>
              <Card className="p-4 shadow-md bg-white rounded-lg flex justify-between">
                <CardContent>
                  <h3 className="text-lg font-medium">{task.name}</h3>
                  <h3 className="text-lg font-medium">{task.estimate}</h3>
                </CardContent>
                <Button className={"px-3 py-1 rounded-full text-white"}>
                  Start
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimeTracker;
