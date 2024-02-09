import { useAppSelector } from "../../../store/hooks"

const Overlay = () => {
  const { isOpen } = useAppSelector(state => state.menu.taskSidebar)
  return (
    <div className={`fixed top-0 left-0 h-screen w-screen ${isOpen && " bg-black opacity-20"}`} />
  )
}

export default Overlay