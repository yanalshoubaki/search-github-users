import React from "react";

export const SearchBar = ({ action: { getGithubUser, setSearch }, data }) => {
  return (
    <div class="flex items-center max-w-xl mx-auto">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Username"
        value={data}
        class="w-full text-lg px-4 py-4 bg-slate-400 text-white rounded-md rounded-r-none outline-none"
      />
      <div class="flex space-x-1">
        <button
          onClick={getGithubUser}
          class="bg-indigo-500 hover:bg-indigo-600 transition duration-100 text-xl py-4 px-8 rounded-md rounded-l-none text-white font-semibold"
        >
          Go
        </button>
      </div>
      <button
        onClick={() => {
          setSearch("");
        }}
        type="reset"
        class="text-xl py-4 px-6 ml-4 rounded-md font-semibold hover:bg-gray-200 transition duration-100 bg-slate-400 text-white"
      >
        Clear
      </button>
    </div>
  );
};
