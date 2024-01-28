import { useState } from "react";

// Components
import MainBanner from "@/components/banners/Main.banners";
import TopHeader from "@/components/headers/Top.headers";

export default function Home() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <>
      <TopHeader setOpenSearch={setOpenSearch} openSearch={openSearch} />
      <MainBanner openSearch={openSearch} />
    </>
  );
}
