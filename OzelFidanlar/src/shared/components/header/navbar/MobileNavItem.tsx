import React, { memo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import type { NavItemType } from "./navData";
import { SlArrowDown } from "react-icons/sl";

interface Props {
  item: NavItemType;
  onNavigate: () => void;
}

const MobileNavItem = memo(({ item, onNavigate }: Props) => {
  const [open, setOpen] = useState(false);

  const hasChildren = !!item.children?.length;

  useEffect(() => {
    setOpen(false);
  }, [onNavigate]);

  const handleNavigate = () => {
    setOpen(false);
    onNavigate();
  };

  return (
    <li>
      <div className="flex items-center justify-between py-2">
        {item.to ? (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `font-medium ${isActive && item.to !== "/" ? "text-[#74ae38]" : ""}`
            }
            onClick={handleNavigate}
          >
            {item.label}
          </NavLink>
        ) : (
          <span className="font-medium">{item.label}</span>
        )}

        {hasChildren && (
          <button
            type="button"
            aria-expanded={open}
            aria-label={`${item.label} alt menü`}
            onClick={() => setOpen((prev) => !prev)}
            className="ml-2"
          >
            <SlArrowDown
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {hasChildren && open && (
        <ul className="ml-4 mt-2 flex flex-col gap-2 border-l border-white/20 pl-4">
          {item.children!.map((child) => (
            <MobileNavItem
              key={`${child.label}`}
              item={child}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
});

export default MobileNavItem;
