import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

//Icons
import Globe from "@/assets/icons/Globe";

interface TimelineItemProps {
  date: string;
  title: string;
  url: string;
  companyLogo: StaticImport;
}

export const TimelineItem = ({
  date,
  title,
  url,
  companyLogo,
}: TimelineItemProps) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white" />

    <span className="mb-1 text-sm font-normal leading-none text-black dark:text-white">
      {date}
    </span>

    <div className="flex flex-row gap-3 items-center">
      <Image
        src={companyLogo}
        alt="Company Logo"
        className="h-16 w-16 rounded-lg object-cover my-3"
      />

      <div className="flex flex-col">
        <h3 className="text-sm sm:text-lg font-semibold text-black dark:text-white mb-1">
          {title}
        </h3>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-900 dark:bg-black/20 dark:text-white rounded-full w-fit text-xs sm:text-sm font-light"
        >
          <Globe className="h-4 w-4 sm:h-6 sm:w-6" />
          <span>{url}</span>
        </a>
      </div>
    </div>
  </li>
);
