import { createPortal } from "react-dom"
import Button from "./Button"
import Input from "./Input"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl bg-white p-5 text-center shadow-sm shadow-[#35383E]">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
          Insira as informações abaixo
        </p>

        <div className="flex w-[336px] flex-col space-y-4">
          <Input id="title" label="Título" placeholder="Título da tarefa" />
          <Input id="time" label="Horário" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />

          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog
