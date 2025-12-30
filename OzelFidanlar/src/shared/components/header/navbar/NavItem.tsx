import React from "react";
import { NavLink } from "react-router-dom";
import type { NavItemType } from "./navData";

interface Props {
  item: NavItemType;
}

const NavItem = ({ item }: Props) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      {item.to ? (
        <NavLink to={item.to}>{item.label}</NavLink>
      ) : (
        <span>{item.label}</span>
      )}

      {hasChildren && (
        <ul
        className="hidden absolute bg-white">
          {item.children!.map((child) => (
            <NavItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
