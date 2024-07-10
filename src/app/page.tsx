//Components
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Skills } from "@/components/skills/skills";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-0 relative">
      <Header />

      <About />
      <Experience />
      <Skills />
      <Contact />

      <ScrollToTop />
      <Footer />
    </main>
  );
}
