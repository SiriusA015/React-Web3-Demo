import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home2"?: {};
  //
  "/nft-detailt"?: {};
  "/market"?: {};
  "/page-collection"?: {};
  "/page-search"?: {};
  "/page-author"?: {};
  "/page-upload-item"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  //
  "/account"?: {};
  //
  "/blog"?: {};
  "/blog-single"?: {};

  "/about"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
  "/admin"?: {};
  "/admin/guardians/edit"?: {};
  "/faq"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
