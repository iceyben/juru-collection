import React from "react";
import { Link } from "react-router-dom";

const CollectionDropdown = ({ title = "Collections" }) => {
  const items = [
    { label: "Men's Suits", link: "/collections/men" },
    { label: "Men's Slippers", link: "/collections/men" },
    { label: "Men's Sandals", link: "/collections/men" },
    { label: "Men's Shirt", link: "/collections/men" },
    { label: "Women's Suit", link: "/collections/women" },
    { label: "Women's Slippers", link: "/collections/women" },
    { label: "Women's Sandals", link: "/collections/women" },
    { label: "Women's Shirt", link: "/collections/women" },
  ];

  return (
    <div className="dropdown-container relative group">
      <div className="flex items-center cursor-pointer nav-items  ">
        {title}
      </div>

      <ul className="dropdown-list">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionDropdown;
