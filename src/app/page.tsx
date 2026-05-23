import { Hero }         from "@/components/sections/Hero";
import { About }        from "@/components/sections/About";
import { Skills }       from "@/components/sections/Skills";
import { Projects }     from "@/components/sections/Projects";
import { LatestPaper }  from "@/components/sections/LatestPaper";
import { Contact }      from "@/components/sections/Contact";
import { getAllPapers }  from "@/lib/papers";

export default function HomePage() {
  const papers     = getAllPapers();
  const latestPaper = papers[0];

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {latestPaper && <LatestPaper paper={latestPaper} />}
      <Contact />
    </>
  );
}