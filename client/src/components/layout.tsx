import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen h-full h-14 bg-black">
      <div className="max-w-[948px] flex w-full items-center justify-center m-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
}
