import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { v4 } from "uuid"
import "./AddTaskDialog.css"

import Button from "./Button"
import Input from "./Input"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("morning")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])

  const nodeRef = useRef()

  useEffect(() => {
    //Isso limpa os imputs quando o dilog é fechado
    if (!isOpen) {
      setTitle("")
      setTime("morning")
      setDescription("")
      setErrors([])
    }
  }, [isOpen])

  const handleSaveClick = () => {
    //Isso é para aramazenar os erros
    const newErrors = []
    //Isso é para validar o input de título verificando se ele está vazio e se está vazio ele exibe uma mensagem de erro!
    if (!title.trim()) {
      newErrors.push({
        input: "title",
        message: "Título é obrigatório",
      })
    }
    //Isso é para validar o input de horário verificando se ele está vazio e se está vazio ele exibe uma mensagem de erro!
    if (!time.trim()) {
      newErrors.push({
        input: "time",
        message: "Horário é obrigatório",
      })
    }
    //Isso é para validar o input de descrição verificando se ele está vazio e se está vazio ele exibe uma mensagem de erro!
    if (!description.trim()) {
      newErrors.push({
        input: "description",
        message: "Descrição é obrigatória",
      })
    }

    setErrors(newErrors)

    //Isso é para validar se tem erros
    if (newErrors.length > 0) {
      return
    }

    //Isso é para enviar os dados para o handleSubmit
    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    })

    //Isso é para fechar o dialog
    handleClose()
  }
  //Isso é para buscar as mensagens de erro e exibir elas
  const titleError = errors.find((error) => error.input === "title")
  const timeError = errors.find((error) => error.input === "time")
  const descriptionError = errors.find((error) => error.input === "description")

  //Isso é para renderizar o dialog quando o isOpen for true
  return (
    //Isso adiciona uma transição no dialog
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {/* Isso é para renderizar o dialog */}
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow-sm shadow-[#35383E]">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>

              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Título da tarefa"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  errorMessage={titleError?.message}
                />

                <TimeSelect
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  errorMessage={timeError?.message}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  errorMessage={descriptionError?.message}
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
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
