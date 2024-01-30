import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Habilidades de desarrollo web",
  desc: "Algunas de las tecnologías y habilidades que utilizo para el desarrollo de aplicaciones web.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Javascript + ReactJS + NextJS",
      desc: "Desarrollo de aplicaciones serverless web y wpas",
      icon: <FaceSmileIcon />,
    },
    {
      title: "MongoDB",
      desc: "Manejo de base de datos con Mongo DB Atlas",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Diseño UX/UI",
      desc: "Desarrollo y diseño de interfaz y experiencia de usuario",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
