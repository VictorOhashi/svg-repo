import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCartoonMoon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <Svg
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
      <Path
        d="M300 168c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
        fill="#F2F2F2"
      />
      <Mask
        id="CartoonMoon_svg__a"
        maskUnits="userSpaceOnUse"
        x={230}
        y={28}
        width={140}
        height={140}
      >
        <Path
          d="M300 168c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
          fill="#F2F2F2"
        />
      </Mask>
      <G fill="gray" mask="url(#CartoonMoon_svg__a)">
        <Path d="M98 112c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm37-51c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm-74-7a9 9 0 100-18 9 9 0 000 18zm-26.903 69.193a7.096 7.096 0 100-14.193 7.096 7.096 0 000 14.193zm-50 34a7.096 7.096 0 100-14.193 7.096 7.096 0 000 14.193zM-14 90a9 9 0 100-18 9 9 0 000 18z"></Path>
        <Path d="M98 112c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm37-51c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm-74-7a9 9 0 100-18 9 9 0 000 18zm-26.903 69.193a7.096 7.096 0 100-14.193 7.096 7.096 0 000 14.193zm-50 34a7.096 7.096 0 100-14.193 7.096 7.096 0 000 14.193zM-14 90a9 9 0 100-18 9 9 0 000 18z"></Path>
      </G>
    </Svg>
  );
}

const MemoSvgCartoonMoon = React.memo(SvgCartoonMoon);
export default MemoSvgCartoonMoon;
