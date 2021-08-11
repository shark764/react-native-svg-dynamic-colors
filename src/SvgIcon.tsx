import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

function SvgIcon(props: SvgProps) {
  return (
    <Svg
      width="48px"
      height="1px"
      viewBox="0 0 48 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        id="icon_svg__Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G
          id="icon_svg__19-Separator"
          transform="translate(-129 -156)"
          fill={props.fill}
        >
          <G id="icon_svg__Controls/Settings" transform="translate(80)">
            <G id="icon_svg__Content" transform="translate(0 64)">
              <G id="icon_svg__Group" transform="translate(24 56)">
                <G id="icon_svg__Group-2">
                  <Path id="icon_svg__Rectangle-5" d="M25 36h48v1H25z" />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgIcon;

