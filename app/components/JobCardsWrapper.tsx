"use client";

import React from "react";
import JobCardDesktop from "./JobCardDesktop";
import JobCardMobile from "./JobCardMobile";
import Image from "next/image";
import BgImgDesktop from "@/images/bg-header-desktop.svg";
import BgImgMobile from "@/images/bg-header-mobile.svg";
import SelectedItem from "./SelectedItem";
import { jobs } from "../data/jobs";
import { IJob } from "../types/job";

const JobCardsWrapper = () => {
  const [filteredLanguages, setFilteredLanguages] = React.useState<
    string[] | null
  >(null);

  const [filteredJobs, setFilteredJobs] = React.useState<IJob[]>(jobs);

  React.useEffect(() => {
    console.log("filtered", filteredLanguages);
    if (!filteredLanguages || filteredLanguages?.length < 1) {
      setFilteredJobs(jobs);
      return;
    }

    const selectedJobs = jobs.filter((job) => {
      for (const language of filteredLanguages) {
        if (job.languages.includes(language) || job.tools.includes(language)) {
          return true;
        }
      }

      return false; //if no match, exclude the job
    });

    setFilteredJobs(selectedJobs);
  }, [filteredLanguages]);

  return (
    <div className="px-2 sm:px-6 relative">
      <Image
        src={BgImgDesktop}
        alt="background"
        className="hidden xs:block w-full"
      />
      <Image src={BgImgMobile} alt="background" className="xs:hidden w-full" />
      {!!filteredLanguages && (
        <div className="sticky top-0 z-10 shadow-lg">
          <SelectedItem
            filterLanguages={filteredLanguages}
            setFilteredLanguages={setFilteredLanguages}
          />
        </div>
      )}
      <div className="py-10">
        {filteredJobs.map((job) => (
          <React.Fragment key={job.id}>
            <div className="hidden sm:block mb-8">
              <JobCardDesktop
                job={job}
                setFilteredLanguages={setFilteredLanguages}
                filterLanguages={filteredLanguages}
              />
            </div>
            <div className="sm:hidden  mb-8">
              <JobCardMobile
                job={job}
                setFilteredLanguages={setFilteredLanguages}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default JobCardsWrapper;
