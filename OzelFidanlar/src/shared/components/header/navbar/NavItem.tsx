import { NavLink } from "react-router-dom";
import type { NavItemType } from "./navData";
import { SlArrowRight } from "react-icons/sl";

interface Props {
  item: NavItemType;
  depth?: number;
}

const NavItem = ({ item, depth = 0 }: Props) => {
  const hasChildren = item.children && item.children.length > 0;
  const groupClass = depth === 0 ? "group/main" : "group/sub";

  return (
    <li className={`relative ${groupClass}`}>
      <div className="flex items-center h-8 hover:text-[#74ae38] hover:scale-[1.02] transition-all duration-300">
        {item.to ? (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors duration-300 ${
                isActive && item.to !== "/" ? "text-[#74ae38]" : "text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ) : (
          <span>{item.label}</span>
        )}

        {hasChildren && (
          <SlArrowRight
            className={`ml-1 w-2 h-2 text-white transition-all duration-300  
              ${
                depth === 0
                  ? "group-hover/main:rotate-90 group-hover/main:text-[#001064]"
                  : "group-hover/sub:text-[#001064]"
              } `}
          />
        )}
      </div>
      {hasChildren && (
        <ul
          className={`
            absolute z-50 bg-[#001064]/50 text-base px-3 mx-3
            opacity-0 invisible
            transition-all duration-300 ease-out

            ${
              depth === 0
                ? "top-12 -left-4 group-hover/main:opacity-100 group-hover/main:visible"
                : "top-0 left-full group-hover/sub:opacity-100 group-hover/sub:visible"
            }
          `}
        >
          {depth === 0 && (
            <span className="absolute -top-6 left-0 w-full h-6 bg-transparent"></span>
          )}
          {item.children!.map((child) => (
            <NavItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
