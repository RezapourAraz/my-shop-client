import { useState } from "react";

// Components
import MainBanner from "@/components/banners/Main.banners";
import TopHeader from "@/components/headers/Top.headers";
import CategorySection from "@/components/sections/Category.sections";
import TopCollectionSection from "@/components/sections/TopCollection.sections";
import LookBookSection from "@/components/sections/LookBook.sections";

export default function Home() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <>
      <TopHeader setOpenSearch={setOpenSearch} openSearch={openSearch} />
      <MainBanner openSearch={openSearch} />
      <main>
        <CategorySection />
        <TopCollectionSection />
        <LookBookSection />
      </main>
    </>
  );
}
