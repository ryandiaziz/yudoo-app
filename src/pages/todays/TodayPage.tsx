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
    <div className={`${isSidebarOpen ? 'ml-64' : 'delay-200 ml-8'} transition-transform ease-in-out duration-300`}>
      <TaskSidebar />
      <PageHeadingContainer>
        <IconMenu
          isSidebarOpen={isSidebarOpen}
        />
        <Title
          text={'Today'}
          isSidebarOpen={isSidebarOpen}
        />
      </PageHeadingContainer>
      <div className="pt-7 ">
        <AddTask />
        {
          Array(4).fill(0).map((d, i) => (
            <TaskItem key={i} index={i} />
          ))
        }
      </div>
    </div>
  )
}

export default TodayPage