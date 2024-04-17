import React from 'react';

const Subtract = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M12.079 0H12c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12h.079c0-6.601 5.33-11.957 11.921-12-6.591-.043-11.921-5.399-11.921-12"
        clipRule="evenodd"
        opacity={0.9}
      />
      <defs>
        <linearGradient
          id="a"
          x1={0}
          x2={24}
          y1={12}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF004D" />
          <stop offset={1} stopColor="#FF9000" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Subtract;
