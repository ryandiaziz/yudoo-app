'use client'
import AddTask from "@/components/elements/AddTask";
import Title from "@/components/elements/Title";
import TaskItem from "@/components/elements/TaskItem";
import React from "react";


const TodaysPage = () => {
  return (
    <div className="ml-3">
      <Title text={'Today'} />
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
