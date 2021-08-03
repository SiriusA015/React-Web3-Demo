import React, { FC } from "react";

export interface PrevProps {
  btnClassName?: string;
  className?: string;
  onClickPrev?: () => void;
}

const Prev: FC<PrevProps> = ({
  className = "relative",
  onClickPrev = () => {},
  btnClassName = "w-10 h-10",
}) => {
  return (
    <div
      className={`nc-Prev text-neutral-500 dark:text-neutral-400 ${className}`}
      data-glide-el="controls"
    >
      <button
        className={`${btnClassName} rounded-full flex items-center justify-center border-2 hover:border-neutral-200 dark:hover:border-neutral-6000 border-transparent `}
        onClick={onClickPrev}
        title="Prev"
        data-glide-dir="<"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 12H3.67004"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Prev;
