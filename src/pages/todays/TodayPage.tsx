import { useAppSelector } from "../../store/hooks"
import TaskSidebar from "../../components/layouts/TaskSidebar"
import PageHeadingContainer from "../../components/fragments/PageHeadingContainer"
import IconMenu from "../../components/elements/IconMenu"
import Title from "../../components/elements/Title"
import AddTask from "../../components/elements/AddTask"
import TaskItem from "../../components/elements/TaskItem"

const TodayPage = () => {
  const { isSidebarOpen } = useAppSelector(state => state.menu)

  return (
    <div className={`${isSidebarOpen ? 'ml-64' : 'delay-200 ml-8'} pt-3 transition-transform ease-in-out duration-300`}>
      <TaskSidebar />
      <PageHeadingContainer>
        <IconMenu />
        <Title text={'Today'} />
      </PageHeadingContainer>
      <div className="pt-7 ">
        <AddTask />
        {
          Array(4).fill(0).map((d, i) => (
            <TaskItem key={`${i - d}`} index={i} />
          ))
        }
      </div>
    </div>
  )
}

export default TodayPage