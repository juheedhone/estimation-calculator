import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddTask = () => {
  return (
    <div className="flex justify-end py-5 mr-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent className="rounded-md">
          <DialogHeader>
            <DialogTitle>Add-Task</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4  space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input id="name" value="List" className="col-span-3" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="username" className="text-left">
                Time Estimation
              </Label>

              <div className="flex items-center gap-2">
                <Input
                  id="username"
                  type="number"
                  value="30"
                  className="w-16"
                />
                <p className="mr-4">hour</p>
                <Input
                  id="username"
                  type="number"
                  value="30"
                  className="w-16"
                />
                <p>min</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
