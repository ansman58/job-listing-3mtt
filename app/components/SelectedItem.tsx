import React from "react";
import RemoveIcon from "@/images/icon-remove.svg";
import Image from "next/image";

interface Props {
  filterLanguages: string[] | null;
  setFilteredLanguages: React.Dispatch<React.SetStateAction<string[] | null>>;
}

const SelectedItem = (props: Props) => {
  const unSelectLanguage = (item: string) => {
    const updatedLanguages = props.filterLanguages?.filter(
      (language) => language !== item
    );
    if (!updatedLanguages) return;
    props.setFilteredLanguages(updatedLanguages);
  };

  const unSelectAllLanguages = () => {
    props.setFilteredLanguages(null);
  };

  return (
    <div className="bg-white p-6 flex justify-between items-center gap-8">
      <div className="flex gap-4 flex-wrap">
        {props.filterLanguages?.map((language, index) => (
          <div
            key={index + language}
            className="flex justify-between max-w-max"
            onClick={() => unSelectLanguage(language)}
          >
            <p className="bg-neutral1 px-2 py-1 rounded-md rounded-r-none hover:text-white text-primary hover:bg-primary cursor-pointer basis-[80%]">
              {language}
            </p>
            <button className="bg-primary flex justify-center rounded-r-md p-2 items-center basis-[20%] h-40px min-w-[30px]">
              <Image src={RemoveIcon} alt="remove" width={30} height={30} />
            </button>
          </div>
        ))}
      </div>

      <button className="text-neutral2" onClick={unSelectAllLanguages}>
        Clear
      </button>
    </div>
  );
};

export default SelectedItem;
