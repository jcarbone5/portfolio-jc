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
    <div className="absolute w-4 h-4 bg-white dark:bg-slate-800 rounded-full mt-1.5 -start-2 border-2 border-slate-300 dark:border-slate-600 shadow-sm" />

    <span className="mb-2 text-sm font-medium leading-none text-slate-600 dark:text-slate-400">
      {date}
    </span>

    <div className="flex flex-row gap-3 items-center">
      <Image
        src={companyLogo}
        alt="Company Logo"
        className="h-16 w-16 rounded-xl object-cover my-3 shadow-md ring-1 ring-slate-200 dark:ring-slate-700"
      />

      <div className="flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
          {title}
        </h3>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 px-4 py-2 bg-white/80 text-slate-600 dark:bg-slate-800/80 dark:text-slate-300 rounded-full w-fit text-xs sm:text-sm font-medium hover:bg-white dark:hover:bg-slate-700/90 transition-colors shadow-sm backdrop-blur-sm"
        >
          <Globe className="h-4 w-4 sm:h-6 sm:w-6" />
          <span>{url}</span>
        </a>
      </div>
    </div>
  </li>
);
