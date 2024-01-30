import { useState } from "react";

// Components
import MainBanner from "@/components/banners/Main.banners";
import TopHeader from "@/components/headers/Top.headers";
import CategorySection from "@/components/sections/Category.sections";
import TopCollectionSection from "@/components/sections/TopCollection.sections";
import LookBookSection from "@/components/sections/LookBook.sections";
import BestSellersSection from "@/components/sections/BestSellers.sections";
import DealSection from "@/components/sections/Deal.sections";
import OurBlogsSection from "@/components/sections/OurBlogs.sections";
import InfoSection from "@/components/sections/Info.sections";
import SocialSection from "@/components/sections/Social.sections";
import MainFooter from "@/components/footers/Main.footers";
import LoginSection from "@/components/sections/Login.sections";

export default function Home() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);

  return (
    <>
      <TopHeader
        setOpenSearch={setOpenSearch}
        openSearch={openSearch}
        setOpenAccount={setOpenAccount}
      />
      <MainBanner openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <LoginSection setOpenAccount={setOpenAccount} openAccount={openAccount} />
      <main>
        <CategorySection />
        <TopCollectionSection />
        <LookBookSection />
        <BestSellersSection />
        <DealSection />
        <OurBlogsSection />
        <InfoSection />
        <SocialSection />
        <MainFooter />
      </main>
    </>
  );
}
