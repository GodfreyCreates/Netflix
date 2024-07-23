import { FirstFeature } from "@/components/Features/FirstFeature";
import { SecondFeature } from "@/components/Features/SecondFeature";
import { Hero } from "@/components/Hero/Hero";
import { Spacer } from "@/components/Spacer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Spacer/>
      <FirstFeature/>
      <Spacer/>
      <SecondFeature/>
      <Spacer/>
    </main>
  );
}
