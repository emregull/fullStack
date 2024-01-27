"use client";
import React from "react";
import Navigation from "./components/navigation";
import { usePageContext } from "./context/page-context";
import Collections from "./components/collections";
import Calendar from "./components/calendar";

const Home = () => {
  const { page, setPage } = usePageContext();
  return (
    <>
      <Navigation />
      {page === "aktarim" && <Collections />}
      {page === "takvim" && <Calendar />}
    </>
  );
};

export default Home;
