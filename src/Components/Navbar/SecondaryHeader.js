import React from "react";
import { NavbarRoutes } from "../../Config";
import { Link } from "react-router-dom";
import { Dropdown } from "../Custom";

function SecondaryHeader() {
  return (
    <div className="bg-white flex p-4 gap-4">
      {NavbarRoutes.map((items, index) => {
        if (items.children) {
          return (
            <div className="flex  items-center">
              <div> {items.name}</div>

              <Dropdown items={items.children} />
            </div>
          );
        } else {
          console.log(items);

          return (
            <Link key={index} to={items.to}>
              {items.name}
            </Link>
          );
        }
      })}
    </div>
  );
}

export default SecondaryHeader;
