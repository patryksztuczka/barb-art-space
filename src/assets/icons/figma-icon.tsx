import React from 'react';

const FigmaIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M2 12.133c0-3.547 0-5.32.69-6.675A6.33 6.33 0 0 1 5.458 2.69C6.813 2 8.586 2 12.133 2h7.734c3.547 0 5.32 0 6.675.69a6.33 6.33 0 0 1 2.768 2.768c.69 1.355.69 3.128.69 6.675v7.734c0 3.547 0 5.32-.69 6.675a6.33 6.33 0 0 1-2.768 2.768c-1.355.69-3.128.69-6.675.69h-7.734c-3.547 0-5.32 0-6.675-.69a6.33 6.33 0 0 1-2.768-2.768C2 25.187 2 23.414 2 19.867z"
        />
      </g>
      <path
        fill="#1ABCFE"
        fillRule="evenodd"
        d="M16 15.999a3.556 3.556 0 1 1 7.111 0 3.556 3.556 0 0 1-7.111 0"
        clipRule="evenodd"
      />
      <path
        fill="#0ACF83"
        fillRule="evenodd"
        d="M8.889 23.112a3.556 3.556 0 0 1 3.555-3.555H16v3.555a3.556 3.556 0 0 1-7.111 0"
        clipRule="evenodd"
      />
      <path
        fill="#FF7262"
        fillRule="evenodd"
        d="M16 5.334v7.111h3.556a3.556 3.556 0 0 0 0-7.111z"
        clipRule="evenodd"
      />
      <path
        fill="#F24E1E"
        fillRule="evenodd"
        d="M8.889 8.89a3.556 3.556 0 0 0 3.555 3.555H16V5.334h-3.556A3.556 3.556 0 0 0 8.89 8.89"
        clipRule="evenodd"
      />
      <path
        fill="#A259FF"
        fillRule="evenodd"
        d="M8.889 15.999a3.556 3.556 0 0 0 3.555 3.556H16v-7.112h-3.556A3.556 3.556 0 0 0 8.89 16"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="b"
          x1={16}
          x2={16}
          y1={2}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#121212" />
          <stop offset={1} />
        </linearGradient>
        <filter
          id="a"
          width={28}
          height={28}
          x={2}
          y={2}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={48} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2095_4273" />
        </filter>
      </defs>
    </svg>
  );
};

export default FigmaIcon;
