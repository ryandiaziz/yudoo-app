'use client'
import React from "react";
import { useAppSelector } from "@/store/hooks";

import PageHeadingContainer from "@/components/fragments/PageHeadingContainer";
import AddTask from "@/components/elements/AddTask";
import Title from "@/components/elements/Title";
import TaskItem from "@/components/elements/TaskItem";
import IconMenu from "@/components/elements/IconMenu";


const TodaysPage = () => {
  const { isSidebarOpen } = useAppSelector(state => state.menu)
  return (
    <div className="ml-3">
      <PageHeadingContainer>
        <IconMenu isSidebarOpen={isSidebarOpen} />
        <Title text={'Today'} />
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
  );
};

export default TodaysPage;
