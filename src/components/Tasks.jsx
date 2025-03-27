import { useState } from "react"
import { toast } from "sonner"
import TASKS from "../constants/tasks"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TasksSeparator from "./TasksSeparator"
import AddIcon from "/src/assets/icons/add.svg?react"
import CloudSunIcon from "/src/assets/icons/cloud-sun.svg?react"
import MoonIcon from "/src/assets/icons/moon.svg?react"
import SunIcon from "/src/assets/icons/sun.svg?react"
import TrashIcon from "/src/assets/icons/trash.svg?react"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

  const handleTasksDeleteClick = (taskId) => {
    const newTaks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTaks)
    toast.success("Tarefa deletada com sucesso!")
  }

  const handleTasksCheckboxClick = (taskId) => {
    const newTaks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso")
        return {
          ...task,
          status: "not_started",
        }
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída com sucesso")
        return {
          ...task,
          status: "done",
        }
      }

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso")
        return {
          ...task,
          status: "in_progress",
        }
      }

      return task
    })
    setTasks(newTaks)
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTasksCheckboxClick}
              handledDeleteClick={handleTasksDeleteClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTasksCheckboxClick}
              handledDeleteClick={handleTasksDeleteClick}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTasksCheckboxClick}
              handledDeleteClick={handleTasksDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tasks
