import { useState } from "react";

// Components
import CategorySection from "@/components/sections/Category.sections";
import TopCollectionSection from "@/components/sections/TopCollection.sections";
import LookBookSection from "@/components/sections/LookBook.sections";
import BestSellersSection from "@/components/sections/BestSellers.sections";
import DealSection from "@/components/sections/Deal.sections";
import OurBlogsSection from "@/components/sections/OurBlogs.sections";
import InfoSection from "@/components/sections/Info.sections";
import SocialSection from "@/components/sections/Social.sections";
import MainLayout from "@/layouts/Main.layouts";
import { getLocalData } from "@/lib/localdata";

export default function Home({ basket }: any) {
  return (
    <MainLayout basket={basket}>
      <CategorySection />
      <TopCollectionSection />
      <LookBookSection />
      <BestSellersSection />
      <DealSection />
      <OurBlogsSection />
      <InfoSection />
      <SocialSection />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData();

  const { basket } = localData;

  return {
    props: { basket },
  };
}
