import React from "react";
import { Navigation } from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen h-full h-14 bg-neutral-200">
      <Navigation />
      <div className="max-w-[948px] flex w-full items-center justify-center m-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
}
