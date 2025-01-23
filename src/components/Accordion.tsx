"use client"

import React, { useState } from 'react';

type AccordionProps = {
  items: {
    id: number;
    title: string;
    content: string;
  }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-md shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <span>{item.title}</span>
            <span
              className={`transform transition-transform ${
                activeItem === item.id ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {activeItem === item.id && (
            <div className="px-4 py-3 bg-white text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
