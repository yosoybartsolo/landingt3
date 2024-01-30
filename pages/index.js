import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tallercito de Next para T3</title>
        <meta
          name="description"
          content="Tallercito básico de Next.js + Tailwind CSS + Stackblitz + Vercel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Habilidades"
        title="Cositas que sé hacer">
        Algunas de las herramientas que sé usar y cosas que sé hacer.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;