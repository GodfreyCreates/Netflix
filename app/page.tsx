import { FirstFeature } from "@/components/Features/FirstFeature";
import { Hero } from "@/components/Hero/Hero";
import { Spacer } from "@/components/Spacer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Spacer/>
      <FirstFeature/>
    </main>
  );
}
