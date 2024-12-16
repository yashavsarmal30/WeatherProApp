"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github, people, sunset } from "../utils/Icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />

          <Button
            className="source-code-btn flex items-center gap-2"
            onClick={() => {
              router.push("https://zoom.earth/");
            }}
          >
            {sunset} Zoom Earth
          </Button>
          <a
            href="https://yashavsarmal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="source-code-btn flex items-center gap-2"
          >
            <Button>
              {people} Contact
            </Button>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
