import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCartoonEarth({
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
        fill="#218BD7"
      />
      <mask
        id="CartoonEarth_svg__a"
        maskUnits="userSpaceOnUse"
        x={230}
        y={28}
        width={140}
        height={140}
      >
        <path
          d="M300 168c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
          fill="#218BD7"
        />
      </mask>
      <g mask="url(#CartoonEarth_svg__a)">
        <g fill="#1BC47D">
          <path d="M-81 99v-6a5 5 0 015-5h18a5 5 0 015 5v6a5 5 0 01-5 5h-18a5 5 0 01-5-5zm-6-21V68a5 5 0 015-5h40a5 5 0 015 5v10a5 5 0 01-5 5h-40a5 5 0 01-5-5zm43 68.5h-4.5a4 4 0 01-4-4v-1a4 4 0 00-4-4H-60a4 4 0 01-4-4v-4a4 4 0 00-4-4h-4a4 4 0 01-4-4v-6a4 4 0 014-4h28a4 4 0 014 4v27a4 4 0 01-4 4zM-54.5 32v5.5a5 5 0 005 5h57a5 5 0 005-5V32a5 5 0 00-5-5h-57a5 5 0 00-5 5zM-17 73V61a5 5 0 015-5h63a5 5 0 015 5v12a5 5 0 01-5 5H15.75a2.75 2.75 0 100 5.5h5.75a5 5 0 015 5V117a5 5 0 01-5 5H14a5 5 0 00-5 5v10.5a5 5 0 01-5 5H-6a3 3 0 01-3-3 3 3 0 00-3-3h-1.75a4.75 4.75 0 01-4.75-4.75V88.5a5 5 0 015-5h5.75a2.75 2.75 0 100-5.5H-12a5 5 0 01-5-5zm103 43.5V95a5 5 0 00-5-5H48.5a5 5 0 00-5 5v36.5a5 5 0 005 5h12a5 5 0 005-5v-5a5 5 0 015-5H81a5 5 0 005-5zM10 169v-6a5 5 0 015-5h58a5 5 0 015 5v6a5 5 0 01-5 5H15a5 5 0 01-5-5z">
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
          <path d="M-81 99v-6a5 5 0 015-5h18a5 5 0 015 5v6a5 5 0 01-5 5h-18a5 5 0 01-5-5zm-6-21V68a5 5 0 015-5h40a5 5 0 015 5v10a5 5 0 01-5 5h-40a5 5 0 01-5-5zm43 68.5h-4.5a4 4 0 01-4-4v-1a4 4 0 00-4-4H-60a4 4 0 01-4-4v-4a4 4 0 00-4-4h-4a4 4 0 01-4-4v-6a4 4 0 014-4h28a4 4 0 014 4v27a4 4 0 01-4 4zM-54.5 32v5.5a5 5 0 005 5h57a5 5 0 005-5V32a5 5 0 00-5-5h-57a5 5 0 00-5 5zM-17 73V61a5 5 0 015-5h63a5 5 0 015 5v12a5 5 0 01-5 5H15.75a2.75 2.75 0 100 5.5h5.75a5 5 0 015 5V117a5 5 0 01-5 5H14a5 5 0 00-5 5v10.5a5 5 0 01-5 5H-6a3 3 0 01-3-3 3 3 0 00-3-3h-1.75a4.75 4.75 0 01-4.75-4.75V88.5a5 5 0 015-5h5.75a2.75 2.75 0 100-5.5H-12a5 5 0 01-5-5zm103 43.5V95a5 5 0 00-5-5H48.5a5 5 0 00-5 5v36.5a5 5 0 005 5h12a5 5 0 005-5v-5a5 5 0 015-5H81a5 5 0 005-5zM10 169v-6a5 5 0 015-5h58a5 5 0 015 5v6a5 5 0 01-5 5H15a5 5 0 01-5-5z">
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
        <g fill="#fff">
          <path d="M8 102h-20a5 5 0 010-10H8a5 5 0 010 10zm-4.5 17.5h-7a4 4 0 010-8H20a4 4 0 010 8h-1a3.5 3.5 0 100 7h4.5a5 5 0 015 5v2a5 5 0 01-5 5h-35a5 5 0 01-5-5v-2a5 5 0 015-5h15a3.5 3.5 0 100-7zm10.5-60V55a5 5 0 015-5h43a5 5 0 015 5v12a5 5 0 01-5 5H40.25a3.75 3.75 0 01-3.75-3.75 3.75 3.75 0 00-3.75-3.75H19a5 5 0 01-5-5zM48.5 95v-1.5a5 5 0 015-5H71a5 5 0 015 5V95a5 5 0 01-5 5H53.5a5 5 0 01-5-5zM62 151h-5a5 5 0 01-5-5v-22a5 5 0 015-5h6.75a3.25 3.25 0 013.25 3.25 3.25 3.25 0 003.25 3.25H73a4 4 0 004-4 4 4 0 014-4h1.5a5 5 0 015 5V137a5 5 0 01-5 5h-2a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 00-3.5-3.5H72a5 5 0 00-5 5v6a5 5 0 01-5 5zm33.5-56.5v-14a5 5 0 015-5h40a5 5 0 015 5v14a5 5 0 01-5 5h-40a5 5 0 01-5-5z">
            <animateTransform
              attributeName="transform"
              type="translate"
              repeatCount="indefinite"
              dur="4s"
              keyTimes="0;1"
              from={0}
              to={300}
            />
          </path>
          <path d="M8 102h-20a5 5 0 010-10H8a5 5 0 010 10zm-4.5 17.5h-7a4 4 0 010-8H20a4 4 0 010 8h-1a3.5 3.5 0 100 7h4.5a5 5 0 015 5v2a5 5 0 01-5 5h-35a5 5 0 01-5-5v-2a5 5 0 015-5h15a3.5 3.5 0 100-7zm10.5-60V55a5 5 0 015-5h43a5 5 0 015 5v12a5 5 0 01-5 5H40.25a3.75 3.75 0 01-3.75-3.75 3.75 3.75 0 00-3.75-3.75H19a5 5 0 01-5-5zM48.5 95v-1.5a5 5 0 015-5H71a5 5 0 015 5V95a5 5 0 01-5 5H53.5a5 5 0 01-5-5zM62 151h-5a5 5 0 01-5-5v-22a5 5 0 015-5h6.75a3.25 3.25 0 013.25 3.25 3.25 3.25 0 003.25 3.25H73a4 4 0 004-4 4 4 0 014-4h1.5a5 5 0 015 5V137a5 5 0 01-5 5h-2a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 00-3.5-3.5H72a5 5 0 00-5 5v6a5 5 0 01-5 5zm33.5-56.5v-14a5 5 0 015-5h40a5 5 0 015 5v14a5 5 0 01-5 5h-40a5 5 0 01-5-5z">
            <animateTransform
              attributeName="transform"
              type="translate"
              repeatCount="indefinite"
              dur="4s"
              keyTimes="0;1"
              from={300}
              to={600}
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

const MemoSvgCartoonEarth = React.memo(SvgCartoonEarth);
export default MemoSvgCartoonEarth;
