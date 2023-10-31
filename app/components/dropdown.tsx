"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../styles/dropdown.css";

interface dropdown {
  title: string;
  items: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDown({ title, items, state, setState }: dropdown) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(event.target as Node)) {
          setIsActive(false);
        }
      }
    };
    window.addEventListener("click", close);
    return () => {
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <div className="dropdown_detail_container col-12 ">
      <div
        ref={dropdownRef}
        className="dropdown_detail_title col-12"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <p>{state === "" ? title : state}</p>
        <FaChevronDown
          style={{
            rotate: isActive ? "180deg" : "0deg",
            transition: "0.2s ease-in-out",
          }}
          className="dropdown_detail_icon"
        />
        {isActive && (
          <div className="dropdown_dropdown_container">
            {items.map((item , index) => (
              <div
                key={index}
                className="dropdown_dropdown_items"
                onClick={() => {
                  setState(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
