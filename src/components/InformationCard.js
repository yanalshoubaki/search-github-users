import React from "react";
import moment from "moment";

export const InformationCard = ({ data }) => {
  return (
    <div class="flex p-5 mt-8 space-x-6  bg-slate-600 shadow-xl w-2/4 rounded-md">
      <img
        src={data.avatar_url}
        alt={data.name}
        class="h-40 w-40 border-2	border-white  shadow-xl rounded-full"
      />
      <div className="text-left">
        <h2 class="text-slate-200 font-semibold text-3xl">
          {data.name}{" "}
          <span className="text-slate-200 text-sm font-normal">
            joined in {moment(data.created_at).format("D MMM YYYY")}
          </span>
        </h2>
        <span className="text-slate-300 text-sm mb-4 block">
          @{data.login}{" "}
        </span>
        <p className="text-slate-300 text-sm mb-4 block">{data.bio}</p>
        <div className="status ">
          <span className="text-gray-200 text-sm">
            {data.followers} Followers - {data.public_repos} Repos
          </span>
        </div>
        <a
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-4 py-2 mt-4"
          href={data.html_url}
          target="_blank"
        >
          view profile
        </a>
      </div>
    </div>
  );
};
