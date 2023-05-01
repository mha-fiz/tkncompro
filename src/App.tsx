import { MantineProvider } from "@mantine/core";
import { Hero } from "./sections/hero";
import { Header } from "./sections/header";
import { FeaturesCards } from "./sections/features/Features";
import { Footer } from "./sections/footer";
import { Tokenomic } from "./sections/tokenomic";
import { RoadMap } from "./sections/roadmap";
import { CallToAction } from "./sections/cta";

const headerLinks = [
  { link: "#", label: "Features", scrollId: "section-features" },
  { link: "#", label: "Details", scrollId: "section-details" },
  { link: "#", label: "Roadmap", scrollId: "section-roadmap" },
];

const footerLinks = [
  {
    link: "#",
    label: "Community",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Careers",
  },
];

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header links={headerLinks} />
      <Hero />
      <FeaturesCards />
      <Tokenomic />
      <RoadMap />
      <CallToAction />
      <Footer links={footerLinks} />
    </MantineProvider>
  );
}

export default App;
