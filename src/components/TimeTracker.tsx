import type { ITasks } from "@/interface/tasks.interface";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Props {
  tasks: ITasks[];
}

const TimeTracker = ({ tasks }: Props) => {
  if (tasks.length === 0) return null;
  return (
    <div className="rounded-lg border border-slate-700">
      <Table>
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
      </Table>
    </div>
  );
};

export default TimeTracker;
