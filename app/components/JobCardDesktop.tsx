import Image from "next/image";
import React from "react";
import { IJob } from "../types/job";

interface Props {
  job: IJob;
  filterLanguages: string[] | null;
  setFilteredLanguages: React.Dispatch<React.SetStateAction<string[] | null>>;
}

const JobCardDesktop = (props: Props) => {
  const selectLanguage = (item: string) => {
    props.setFilteredLanguages((prevLanguages) => {
      if (!prevLanguages) return [item];
      if (prevLanguages.includes(item)) return prevLanguages;
      return [...prevLanguages, item];
    });
  };

  return (
    <div
      className={`${
        props.job?.new && props.job?.featured
          ? "border-l-primary border-l-4"
          : ""
      } text-primary bg-white w-full font-medium text-fs15 p-5  rounded-md shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={props.job?.logo}
            alt="image"
            width={100}
            height={100}
            className="rounded-[50%]"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-bold">{props.job?.company}</p>
              {props.job?.new && (
                <p className="bg-primary rounded-3xl py-1 px-2 text-white">
                  NEW!
                </p>
              )}

              {props.job?.featured && (
                <p className="bg-black rounded-3xl py-1 px-2 text-white">
                  FEATURED
                </p>
              )}
            </div>
            <p className="font-bold mb-1 text-black hover:text-primary cursor-pointer">
              {props.job?.position}
            </p>
            <div className="flex items-center gap-2 text-neutral2">
              <p>{props.job?.postedAt}</p>
              <p>•</p>
              <p>{props.job?.contract}</p>
              <p>•</p>
              <p>{props.job?.location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[...props.job?.languages, ...props.job?.tools]?.map(
            (item, index) => (
              <p
                key={index + item}
                className="bg-neutral1 px-2 py-[2px] rounded-md hover:text-white hover:bg-primary cursor-pointer"
                onClick={() => selectLanguage(item)}
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default JobCardDesktop;
