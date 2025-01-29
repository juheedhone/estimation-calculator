import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Tasks {
  taskName: string;
  estimateTime: number;
}

interface Props {
  estimateTime: Tasks[];
}

const TimeTracker = ({ estimateTime }: Props) => {
  if (estimateTime.length === 0) return null;
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
          {estimateTime.map((estimate) => (
            <TableRow key={estimate.taskName}>
              <TableCell>{estimate.taskName}</TableCell>
              <TableCell>{estimate.estimateTime}</TableCell>
              <TableCell>
                <Button >Start</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimeTracker;
