"use client";
import { usePageContext } from "@/app/context/page-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { page, setPage } = usePageContext();

  function handleClick(pageName: string) {
    setPage(pageName);
  }
  return (
    <div className="bg-white border border-b-gray-200 py-3 flex justify-center items-center">
      <ul className="flex gap-3">
        <li>
          <Button
            variant="ghost"
            onClick={() => {
              handleClick("aktarim");
            }}
            className={cn(page === "aktarim" && "bg-slate-200")}
          >
            AKTARIM
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            onClick={() => {
              handleClick("takvim");
            }}
            className={cn(page === "takvim" && "bg-slate-200")}
          >
            TAKVİM
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
