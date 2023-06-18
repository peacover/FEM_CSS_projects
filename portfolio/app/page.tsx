import "@/styles/global.css";
import { SectionOne } from "@/components/SectionOne";
import { ContactSection } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <SectionOne />
      <NavBar />
      <ContactSection />
    </>
  );
}
