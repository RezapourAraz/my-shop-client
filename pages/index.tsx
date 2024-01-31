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

export default function Home() {
  return (
    <MainLayout>
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
