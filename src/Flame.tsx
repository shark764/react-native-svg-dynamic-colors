import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

type Props = SvgProps & {
  children: React.ReactNode;
};

function SvgFlame({ children, ...props }: Props) {
  return (
    <Svg width={300} height={300} viewBox="0 0 300 300" {...props}>
      <G fill="#777">
        <Path d="M26.851 222.754H0v49.004C0 286.751 14.555 299 32.443 299H267.52c17.888 0 32.48-12.249 32.48-27.242v-49.004h-26.888v43.78c0 5.533-5.296 9.95-11.842 9.95H38.693c-6.546 0-11.842-4.426-11.842-9.95v-43.78z" />
      </G>
      <Defs>
        <G id="flame_svg__fire" transform="translate(0 10)">
          <Path d="M101.138 160.949c-6.222-6.485-47.6-50.779-5.861-89.147C130.054 39.868 135.137 13.003 123.434 0c0 0 88.525 33.692 36.443 111.877-8.879 13.286-31.175 28.966-19.508 61.252l-39.231-12.18z" />
          <Path d="M155.503 171.572c-1.879-6.553-10.361-20.826 15.518-49.269 13.852-15.131 19.083-37.561 20.287-46.002 0 0 45.859 24.361.268 83.914l-36.073 11.357z" />
        </G>
      </Defs>
      <G transform="translate(0 10)" fill="#530" stroke="#310" strokeWidth={0}>
        <Path d="M240.344 255.473v-38.599L59.378 160.915v38.598z" />
        <Path d="M165.259 180.707l75.062-23.219v38.599l-12.694 3.903z" />
        <Path d="M134.519 235.715l-75.1 23.185v-38.599l12.732-3.868z" />
      </G>

      {children}
    </Svg>
  );
}

export default SvgFlame;
