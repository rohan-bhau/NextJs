import { AddNote } from '@/components/AddNote'
import TaskCard from '@/components/TaskCard'
import { createATask } from '@/lib/Actions'
import { getTasksData } from '@/lib/tasks'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const TasksPage = async () => {
    const tasks = await getTasksData()
    console.log(tasks.length)
  return (
    <div className="container mx-auto p-20">
      <div className="flex gap-10 items-center">
        <h2>Tasks: {tasks.length} </h2>
        <AddNote createATask={createATask} />
        <Link href="/tasks/newTask">
          {" "}
          <Button variant="secondary">Add New Task</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 container mx-auto mt-20">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default TasksPage
