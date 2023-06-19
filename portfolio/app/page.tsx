import "@/styles/global.css";
import { SectionOne } from "@/components/SectionOne";
import { ContactSection } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";

export default function Home() {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <ContactSection />
      <Footer />
    </>
  );
}
