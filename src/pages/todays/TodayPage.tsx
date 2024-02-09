import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks"

import { fetchTodayTask } from "../../store/features/taskSlice"
import TaskSidebar from "../../components/layouts/TaskSidebar"
import PageHeadingContainer from "../../components/fragments/PageHeadingContainer"
import IconMenu from "../../components/elements/IconMenu"
import Title from "../../components/elements/Title"
import AddTask from "../../components/elements/AddTask"
import TaskItem from "../../components/elements/TaskItem"

const TodayPage = () => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector(state => state.menu)
  const { todays } = useAppSelector(state => state.task)

  useEffect(() => {
    dispatch(fetchTodayTask(""))
  }, [])

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
          todays.map((d, i) => (
            <TaskItem
              key={`${i}`}
              index={i}
              name={d.name}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodayPage