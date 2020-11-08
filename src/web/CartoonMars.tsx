import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCartoonMars({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={600}
      height={200}
      viewBox="0 0 600 200"
      fill="none"
      style={{
        margin: "auto",
        height: "100%",
      }}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M300 168c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
        fill="#DE4625"
      />
      <mask
        id="CartoonMars_svg__a"
        maskUnits="userSpaceOnUse"
        x={230}
        y={28}
        width={140}
        height={140}
      >
        <path
          d="M300 168c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
          fill="#DE4625"
        />
      </mask>
      <g fill="#820000" mask="url(#CartoonMars_svg__a)">
        <path d="M93 96.5a7.5 7.5 0 017.5-7.5h60a7.5 7.5 0 010 15h-60a7.5 7.5 0 01-7.5-7.5zM83.5 60c0-8.008 6.492-14.5 14.5-14.5h50c8.008 0 14.5 6.492 14.5 14.5s-6.492 14.5-14.5 14.5H98c-8.008 0-14.5-6.492-14.5-14.5zM57 131.662c0-5.523 4.477-10 10-10h59c5.523 0 10 4.477 10 10s-4.477 10-10 10H67c-5.523 0-10-4.477-10-10zM-27 43a7 7 0 017-7h72a7 7 0 110 14h-72a7 7 0 01-7-7zm11.5 39c0-5.523 4.477-10 10-10h61c5.523 0 10 4.477 10 10s-4.477 10-10 10h-61c-5.523 0-10-4.477-10-10zm-31 22a6.5 6.5 0 016.5-6.5h67a6.5 6.5 0 110 13h-67a6.5 6.5 0 01-6.5-6.5zm3 27a5 5 0 015-5h32a5 5 0 010 10h-32a5 5 0 01-5-5z">
          <animateTransform
            attributeName="transform"
            type="translate"
            repeatCount="indefinite"
            dur="4s"
            keyTimes="0;1"
            from={0}
            to={250}
          />
        </path>
        <path d="M93 96.5a7.5 7.5 0 017.5-7.5h60a7.5 7.5 0 010 15h-60a7.5 7.5 0 01-7.5-7.5zM83.5 60c0-8.008 6.492-14.5 14.5-14.5h50c8.008 0 14.5 6.492 14.5 14.5s-6.492 14.5-14.5 14.5H98c-8.008 0-14.5-6.492-14.5-14.5zM57 131.662c0-5.523 4.477-10 10-10h59c5.523 0 10 4.477 10 10s-4.477 10-10 10H67c-5.523 0-10-4.477-10-10zM-27 43a7 7 0 017-7h72a7 7 0 110 14h-72a7 7 0 01-7-7zm11.5 39c0-5.523 4.477-10 10-10h61c5.523 0 10 4.477 10 10s-4.477 10-10 10h-61c-5.523 0-10-4.477-10-10zm-31 22a6.5 6.5 0 016.5-6.5h67a6.5 6.5 0 110 13h-67a6.5 6.5 0 01-6.5-6.5zm3 27a5 5 0 015-5h32a5 5 0 010 10h-32a5 5 0 01-5-5z">
          <animateTransform
            attributeName="transform"
            type="translate"
            repeatCount="indefinite"
            dur="4s"
            keyTimes="0;1"
            from={250}
            to={500}
          />
        </path>
      </g>
    </svg>
  );
}

const MemoSvgCartoonMars = React.memo(SvgCartoonMars);
export default MemoSvgCartoonMars;
