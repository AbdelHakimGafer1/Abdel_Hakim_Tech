import Link from "next/link";
import { routes } from "./routes";

const Desktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route,ind) => {
        const { Icon, href, title } = route;
        return (
          <li kye={ind}>
            <Link
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Desktop;