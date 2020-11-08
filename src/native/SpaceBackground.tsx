import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animate, filter */

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
    <Svg
      width={1453}
      height={848}
      viewBox="0 0 1453 848"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <G filter="url(#SpaceBackground_svg__filter0_d)">
        <Path
          d="M1449 0H4v221.539c288.298 165.388 554.764 6.724 638.768 100.352 84.004 93.628-38.607 224.272 16.045 397.011 54.651 172.74 292.541 127.163 790.187 67.5V0z"
          fill="url(#SpaceBackground_svg__paint0_linear)"
        />
      </G>
      <Path
        d="M671 236a5 5 0 11-10.001-.001A5 5 0 01671 236zm430-81a5.001 5.001 0 01-10 0 5.001 5.001 0 0110 0zM775 693a5 5 0 11-10.001-.001A5 5 0 01775 693zM227 205a5 5 0 11-10.001-.001A5 5 0 01227 205zm1173 388a5.001 5.001 0 01-10 0 5.001 5.001 0 0110 0z"
        fill="#E1E1E1"
      ></Path>
      <Path
        d="M59 111.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1326 127a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-726-127a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm201 86a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm404 224a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        fill="#fff"
      ></Path>
      <Defs>
        <LinearGradient
          id="SpaceBackground_svg__paint0_linear"
          x1={726.5}
          y1={0}
          x2={726.5}
          y2={750.474}
          gradientUnits="userSpaceOnUse"
        >
          <Stop />
          <Stop offset={0.531} stopColor="#0B013C" />
          <Stop offset={1} stopColor="#130A80" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const MemoSvgSpaceBackground = React.memo(SvgSpaceBackground);
export default MemoSvgSpaceBackground;
