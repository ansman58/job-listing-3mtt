import React from "react";
import Img from "@/images/photosnap.svg";
import Image from "next/image";
import { IJob } from "../types/job";

interface Props {
  job: IJob;
}
const JobCardMobile = ({ job }: Props) => {
  return (
    <div className="text-primary bg-white w-full font-medium text-fs15 p-5 border-l-primary relative hover:border-l-4 rounded-md shadow-lg">
      <Image
        src={job?.logo}
        alt="image"
        width={40}
        height={40}
        className="absolute -top-6"
      />
      <div className="">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-bold">{job?.company}</p>
          {job?.new && (
            <p className="bg-primary rounded-3xl py-1 px-2 text-white text-xs">
              NEW!
            </p>
          )}
          {job?.featured && (
            <p className="bg-black rounded-3xl py-1 px-2 text-white text-xs">
              FEATURED
            </p>
          )}
        </div>
        <p className="font-bold mb-1 text-black hover:text-primary cursor-pointer">
          {job?.position}
        </p>
        <div className="flex items-center gap-2 text-neutral2 mb-6">
          <p>{job?.postedAt}</p>
          <p>•</p>
          <p>{job?.contract}</p>
          <p>•</p>
          <p>{job?.location}</p>
        </div>
        <hr className="bg-neutral1 mb-6" />
        <div className="flex items-center gap-2 flex-wrap">
          {[...job?.languages, ...job?.tools]?.map((item, index) => (
            <p
              key={index + item}
              className="bg-neutral1 px-2 py-1 rounded-md hover:text-white hover:bg-primary cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCardMobile;
