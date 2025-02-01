import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  estimateTimeHour: z.number(),
  estimateTimeMin: z.number(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const AddTask = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);
  return (
    <div className="flex justify-center py-5 mr-2">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4  space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="col-span-3"
                />
                {errors.estimateTimeMin && (
                  <p className="text-red-700">
                    {errors.estimateTimeMin.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="username" className="text-left">
                  Time Estimation
                </Label>

                <div className="flex items-center gap-2">
                  <Input
                    {...register("estimateTimeHour", { valueAsNumber: true })}
                    id="username"
                    type="number"
                    className="w-16"
                  />
                  {errors.estimateTimeHour && (
                    <p className="text-red-700">
                      {errors.estimateTimeHour.message}
                    </p>
                  )}
                  <p className="mr-4">hour</p>
                  <Input
                    {...register("estimateTimeMin", { valueAsNumber: true })}
                    id="username"
                    type="number"
                    className="w-16"
                  />
                  {errors.estimateTimeMin && (
                    <p className="text-red-700">
                      {errors.estimateTimeMin.message}
                    </p>
                  )}
                  <p>min</p>
                </div>
              </div>
            </div>

            <DialogFooter>
              <DialogClose>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
