import { addNewTask } from "@/lib/Actions";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
} from "@heroui/react";
import React from "react";

const AddNewTask = () => {
  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-4xl mb-5">Add New Task</h2>
      <div>
        <form action={addNewTask} className="flex flex-col gap-4">
          <TextField className="w-full" name="title" type="text">
            <Label>Task Title</Label>
            <Input placeholder="Enter Task Title" />
          </TextField>
          <TextField className="w-full " name="description" type="text">
            <Label>Task Description</Label>
            <Input placeholder="Enter your Task Description" />
          </TextField>
          <Select name="priority" fullWidth placeholder="Select one">
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Select name="status" fullWidth placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="In-progress">
                  In-progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField className="w-full" name="assignedTo">
            <Label>Assigned To</Label>
            <Input placeholder="Task Assigned To" />
          </TextField>
          <div>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button slot="close" type="submit">
              Submit Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
