import React from "react";

export const Header = () => {
  return (
    <nav class="w-full bg-slate-500 flex justify-between px-6 py-4 shadow-md">
      <div class="flex space-x-2 items-center">
        <h1 class="text-xl font-bold text-white cursor-pointer">
          Yanal Shoubaki
        </h1>
      </div>
      <div class="flex space-x-10 items-center"></div>
    </nav>
  );
};
