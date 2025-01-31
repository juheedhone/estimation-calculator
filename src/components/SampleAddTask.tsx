import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Design UI Mockup",
      estimated: "2h",
      spent: "1h",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Develop Frontend",
      estimated: "5h",
      spent: "3h",
      status: "Pending",
    },
    {
      id: 3,
      name: "Test Application",
      estimated: "3h",
      spent: "0h",
      status: "Not Started",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Task Estimate Time Tracker</h1>
        <p className="text-lg text-gray-600 mt-2">
          Track & Plan Your Work Efficiently
        </p>
        {/* <Button className="mt-4 px-6 py-3 text-lg">Get Started</Button> */}
        <div className="mt-6"></div>
      </section>

      {/* Task List Section */}
      <section className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <motion.div key={task.id} whileHover={{ scale: 1.02 }}>
              <Card className="p-4 shadow-md bg-white rounded-lg flex justify-between">
                <CardContent>
                  <h3 className="text-lg font-medium">{task.name}</h3>
                  <p className="text-gray-600">
                    Estimated: {task.estimated} | Spent: {task.spent}
                  </p>
                </CardContent>
                <button
                  className={"px-3 py-1 rounded-full text-white"}
                ></button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold">Boost Your Productivity Now!</h2>
        <Button className="mt-4 px-6 py-3 text-lg">Start Tracking</Button>
      </section>
    </div>
  );
}
