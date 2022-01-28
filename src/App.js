import React, { useState, useEffect } from "react";
import axios from "axios";

import { InformationCard } from "./components/InformationCard";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
export const App = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("yanalshoubaki");

  const getGithubUser = async () => {
    const response = await axios.get(`https://api.github.com/users/${search}`);
    setData(response.data);
  };

  useEffect(() => {
    getGithubUser();
  }, []);

  return (
    <div class="bg-slate-200">
      <div>
        <Header />

        <main class="mt-16 h-screen">
          <SearchBar action={{ setSearch, getGithubUser }} data={search} />
          <div class="flex flex-wrap justify-center">
            <InformationCard data={data} />
          </div>
        </main>
      </div>
    </div>
  );
};
