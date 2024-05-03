"use client";

import React from "react";
import JobCardDesktop from "./JobCardDesktop";
import JobCardMobile from "./JobCardMobile";
import Image from "next/image";
import BgImgDesktop from "@/images/bg-header-desktop.svg";
import BgImgMobile from "@/images/bg-header-mobile.svg";
import SelectedItem from "./SelectedItem";
import { jobs } from "../data/jobs";

const JobCardsWrapper = () => {
  const [filterLanguages, setFilteredLanguages] = React.useState<
    string[] | null
  >(null);

  return (
    <div className="px-2 sm:px-6">
      <Image
        src={BgImgDesktop}
        alt="background"
        className="hidden xs:block w-full"
      />
      <Image src={BgImgMobile} alt="background" className="xs:hidden w-full" />
      {!!filterLanguages && (
        <SelectedItem
          filterLanguages={filterLanguages}
          setFilteredLanguages={setFilteredLanguages}
        />
      )}
      <div className="py-10">
        {jobs.map((job) => (
          <React.Fragment key={job.id}>
            <div className="hidden sm:block mb-8">
              <JobCardDesktop
                job={job}
                setFilteredLanguages={setFilteredLanguages}
              />
            </div>
            <div className="sm:hidden  mb-8">
              <JobCardMobile job={job} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default JobCardsWrapper;
