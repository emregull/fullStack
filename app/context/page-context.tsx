"use client";
import React, { createContext, useState, useContext } from "react";

type PageContextProviderProps = {
  children: React.ReactNode;
};

type PageContext = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export const PageContext = createContext<PageContext | null>(null);

export default function PageContextProvider({
  children,
}: PageContextProviderProps) {
  const [page, setPage] = useState("aktarim");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
}
