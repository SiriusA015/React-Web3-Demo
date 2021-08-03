import React, { FC } from "react";
import MainNav from "./MainNav";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header2 relative w-full z-40 ">
      <MainNav />
    </div>
  );
};

export default Header;
