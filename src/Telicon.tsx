import React from 'react';
import { View, Text } from 'react-native';
import { Use } from 'react-native-svg';
import SvgTelicon300 from './SvgTelicon';

interface Props {
  size: string;
  name: string;
  fill: string;
  fillSecondary: string;
}

const sizes: { [key: string]: number } = {
  default: 100,
  xsmall: 10,
  small: 50,
  medium: 100,
  large: 150,
  xlarge: 200
};

const getSize = (value: string) => sizes[value];

const Telicon = ({ size, fill, fillSecondary, ...props }: Props) => {
  const sizeValue = getSize(size);

  return (
    <SvgTelicon300
      width={sizeValue}
      height={sizeValue}
      fill={fill}
      fillSecondary={fillSecondary}
    >
      <Use
        href={`#telicon-3_0_0_svg__${props.name}`}
        width={sizeValue}
        height={sizeValue}
        fill={fill}
      />
    </SvgTelicon300>
  );
};

export default Telicon;
