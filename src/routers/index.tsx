import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import SiteHeader from "pages/SiteHeader";
import PageHome from "pages/PageHome/PageHome";
import BlogPage from "pages/BlogPage/BlogPage";
import PageMarket from "pages/PageMarket";
import NftDetailPage from "pages/NftDetailPage/NftDetailPage";

// import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageCollection from "pages/PageCollection";
import PageFAQ from "pages/PageFAQ/PageFAQ";

// import NftDetailPage from "containers/NftDetailPage/NftDetailPage";
// import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import PageUploadItem from "containers/PageUploadItem";
import PageConnectWallet from "containers/PageConnectWallet";
import PageHome2 from "containers/PageHome/PageHome2";

import PageAdmin from "pages/PageAdmin/Pageadmin";
import GuardiansEdit from "pages/PageAdmin/GuardiansEdit";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome2 },
  { path: "/home2", exact: true, component: PageHome },
  //
  { path: "/market", component: PageMarket },
  { path: "/home-header-2", exact: true, component: PageHome },
  { path: "/nft-detailt", component: NftDetailPage },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  { path: "/page-author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/page-upload-item", component: PageUploadItem },
  { path: "/connect-wallet", component: PageConnectWallet },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
  { path: "/admin", exact: true, component: PageAdmin},
  { path: "/admin/guardians/edit", exact: true, component: GuardiansEdit},
  { path: "/faq", exact: true, component: PageFAQ}
];

const Routes = () => {
  return (
    <BrowserRouter 
      // basename="/ciscryp"
    >
      <ScrollToTop />
      <SiteHeader />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
