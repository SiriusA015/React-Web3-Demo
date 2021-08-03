import React, { FC } from "react";
import Heading from "shared/Heading/Heading";
import Nav from "shared/Nav/Nav";
import NavItem from "shared/NavItem/NavItem";
import { ChevronDownIcon } from "@heroicons/react/outline";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import TabFilters from "components/TabFilters";
import { Transition } from "@headlessui/react";

export interface HeaderFilterSectionProps {
  className?: string;
}

const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({
  className = "mb-12",
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [tabActive, setTabActive] = React.useState("All NFTs");

  return (
    <div className={`flex flex-col relative ${className}`}>
      <Heading>{"Featured NFTs"}</Heading>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
        >
          {["All NFTs", "Arts", "Musics", "Sports", "Photography"].map(
            (item, index) => (
              <NavItem
                key={index}
                isActive={tabActive === item}
                onClick={() => setTabActive(item)}
              >
                {item}
              </NavItem>
            )
          )}
        </Nav>
        <span className="block flex-shrink-0">
          <ButtonPrimary
            className="w-full !pr-16"
            sizeClass="pl-4 py-2.5 sm:pl-6"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg className={`w-6 h-6`} viewBox="0 0 24 24" fill="none">
              <path
                d="M14.3201 19.07C14.3201 19.68 13.92 20.48 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.87 17.12L18.87 16.12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="block truncate ml-2.5">Filter</span>
            <span className="absolute top-1/2 -translate-y-1/2 right-5">
              <ChevronDownIcon
                className={`w-5 h-5 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </span>
          </ButtonPrimary>
        </span>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700 my-8"></div>
        <TabFilters />
      </Transition>
    </div>
  );
};

export default HeaderFilterSection;
