import React, { FC, ReactNode, useState } from "react";
import { useRouter } from "next/router";

// Components
import MainBanner from "@/components/banners/Main.banners";
import TopHeader from "@/components/headers/Top.headers";
import BasketSection from "@/components/sections/Basket.sections";
import LoginSection from "@/components/sections/Login.sections";
import MainFooter from "@/components/footers/Main.footers";

// types
type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  // hooks
  const router = useRouter();

  // states
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openBasket, setOpenBasket] = useState<boolean>(false);

  return (
    <>
      <TopHeader
        setOpenSearch={setOpenSearch}
        openSearch={openSearch}
        setOpenAccount={setOpenAccount}
        setOpenBasket={setOpenBasket}
      />
      {router.route === "/" && (
        <MainBanner openSearch={openSearch} setOpenSearch={setOpenSearch} />
      )}
      <LoginSection setOpenAccount={setOpenAccount} openAccount={openAccount} />
      <BasketSection setOpenBasket={setOpenBasket} openBasket={openBasket} />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
