import Button from "./Button"
import AddIcon from "/src/assets/icons/add.svg?react"
import TrashIcon from "/src/assets/icons/trash.svg?react"

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold">Minhas Tarefas</span>
          <h2 className="text-xl font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </h2>
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
    </div>
  )
}

export default Tasks
