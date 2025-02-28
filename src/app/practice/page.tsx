"use client";
import { MouseEvent, useState } from "react";

const page = () => {
  let items = ["first", "second", "third", "forth"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="border-2 rounded-md overflow-hidden *:py-2  border-black w-52 *:border-b-2 *:border-black  *:pl-4">
        {items.map((item) => (
          <li key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
