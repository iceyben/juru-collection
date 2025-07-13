import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="pages p-5 ">
      <h1 className="text-center text-2xl uppercase font-bold pb-2 underline underline-offset-6 decoration-blue-500 decoration-4">
        Product page
      </h1>

      <nav className="product-nav ">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive
              ? "pro-nav-list border-b-4 border-blue-500 text-blue-600"
              : "pro-nav-list text-gray-600"
          }
        >
          <li className="pro-nav-list list-none">All</li>
        </NavLink>
        <NavLink
          to="men"
          className={({ isActive }) =>
            isActive
              ? "pro-nav-list border-b-4 border-blue-500 text-blue-600"
              : "pro-nav-list text-gray-600"
          }
        >
          <li className="pro-nav-list list-none">Men</li>
        </NavLink>
        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive
              ? "pro-nav-list border-b-4 border-blue-500 text-blue-600"
              : "pro-nav-list text-gray-600"
          }
        >
          <li className="pro-nav-list list-none">Women</li>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Product;
