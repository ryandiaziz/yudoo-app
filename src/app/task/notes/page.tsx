'use client'
import React from "react";

import { useAppSelector } from "@/store/hooks";
import IconMenu from "@/components/elements/IconMenu";
import Title from "@/components/elements/Title";
import PageHeadingContainer from "@/components/fragments/PageHeadingContainer";

const NotesPage = () => {
  const { isSidebarOpen } = useAppSelector(state => state.menu)
  return (
    <PageHeadingContainer>
      <IconMenu isSidebarOpen={isSidebarOpen} />
      <Title text={'Sticky Wall'} />
    </PageHeadingContainer>
  );
};

export default NotesPage;
