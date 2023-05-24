
import { HeroBanner } from "@/components/global/layout/HeroBanner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroBanner />
    </>
  );
}