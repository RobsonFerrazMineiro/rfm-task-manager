import SidebarButton from "./SidebarButton"

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 p-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manage</h1>
        <p className="font-normal">
          um simples{" "}
          <span className="text-[#00ADB5]">organizados de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">Inicio</SidebarButton>
        <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
      </div>
    </div>
  )
}
export default Sidebar
