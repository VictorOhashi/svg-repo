import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSpaceBackground({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={1453}
      height={848}
      viewBox="0 0 1453 848"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g filter="url(#SpaceBackground_svg__filter0_d)">
        <path
          d="M1449 0H4v221.539c288.298 165.388 554.764 6.724 638.768 100.352 84.004 93.628-38.607 224.272 16.045 397.011 54.651 172.74 292.541 127.163 790.187 67.5V0z"
          fill="url(#SpaceBackground_svg__paint0_linear)"
        />
      </g>
      <path
        d="M671 236a5 5 0 11-10.001-.001A5 5 0 01671 236zm430-81a5.001 5.001 0 01-10 0 5.001 5.001 0 0110 0zM775 693a5 5 0 11-10.001-.001A5 5 0 01775 693zM227 205a5 5 0 11-10.001-.001A5 5 0 01227 205zm1173 388a5.001 5.001 0 01-10 0 5.001 5.001 0 0110 0z"
        fill="#E1E1E1"
      >
        <animate
          id="SpaceBackground_svg__b"
          attributeName="opacity"
          values="1;0;1"
          dur="4s"
          begin="0s;a.end"
        />
      </path>
      <path
        d="M59 111.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1326 127a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-726-127a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm201 86a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm404 224a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        fill="#fff"
      >
        <animate
          id="SpaceBackground_svg__a"
          attributeName="opacity"
          values="1;0;1"
          dur="4s"
          begin="b.end"
        />
      </path>
      <defs>
        <linearGradient
          id="SpaceBackground_svg__paint0_linear"
          x1={726.5}
          y1={0}
          x2={726.5}
          y2={750.474}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.531} stopColor="#0B013C" />
          <stop offset={1} stopColor="#130A80" />
        </linearGradient>
        <filter
          id="SpaceBackground_svg__filter0_d"
          x={0}
          y={0}
          width={1453}
          height={848}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const MemoSvgSpaceBackground = React.memo(SvgSpaceBackground);
export default MemoSvgSpaceBackground;
