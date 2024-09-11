import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
  {
    title: "Home",
    href: "localhost:3000",
    Icon: BiHomeAlt2,
  },
  {
    title: "Explore",
    href: "#prosec",
    Icon: FiSearch,
  },
  {
    title: "Projects",
    href: "/explore",
    Icon: IoPricetagsOutline,
  },
  {
    title: "Portfolio",
    href: "jonedoe3639.github.io/My-Website1",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "#",
    Icon: PiChatCircleBold,
  },
];