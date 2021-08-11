import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Slider,
  SafeAreaView,
  ScrollView
} from 'react-native';
import BallIcon from './src/ball.svg';
import AvatarIcon from './src/avatar.svg';
import MessageIcon from './src/heart.svg';
import ExampleIcon from './src/example.svg';
import DocIcon from './src/doc.svg';
import Svg, { Use } from 'react-native-svg';
import SvgComponent from './SvgEx1';
import SvgFlame from './src/Flame';
import SvgBall from './src/Ball';
import SvgTelicon300 from './src/SvgTelicon';
import Telicon from './src/Telicon';

const { width } = Dimensions.get('window');
const iconSize = width * 0.15;

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)', // purple
  '#45914f',
  '#205070'
];

export default function App() {
  const [index, setIndex] = useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <BallIcon width={iconSize} height={iconSize} fill={primaryColor} />
          </View>

          <View style={styles.row}>
            <AvatarIcon
              width={iconSize}
              height={iconSize}
              fill={primaryColor}
              fillSecondary={secondaryColor}
            />
          </View>

          <View style={styles.row}>
            <Telicon
              name="star"
              size="default"
              fill={primaryColor}
              fillSecondary={secondaryColor}
            />
          </View>

          <View style={styles.row}>
            <SvgFlame
              width={iconSize}
              height={iconSize}
              fill={primaryColor}
              fillSecondary={secondaryColor}
            >
              <Use
                href="#flame_svg__fire"
                x="0"
                y="-10"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                stroke={secondaryColor}
                // stroke="orange"
                strokeWidth="5px"
              />
              <Use
                href="#flame_svg__fire"
                x="30"
                y="-5"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                stroke={secondaryColor}
                // stroke="orange"
                strokeWidth="5px"
              />
            </SvgFlame>
          </View>

          <View style={styles.row}>
            <Telicon
              name="warning--octagon"
              size="small"
              fill={primaryColor}
              fillSecondary={secondaryColor}
            />
          </View>

          <View style={styles.row}>
            <SvgBall
              width={iconSize}
              height={iconSize}
              fill={primaryColor}
              fillSecondary={secondaryColor}
            />
          </View>

          <View style={styles.row}>
            <SvgComponent width={400} height={100}>
              <Use
                href="#svg-sync"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                fillSecondary={secondaryColor}
              />
              <Use
                href="#svg-bug"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                fillSecondary={secondaryColor}
                x={100}
              />
              <Use
                href="#svg-block"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                fillSecondary={secondaryColor}
                x={200}
              />
              <Use
                href="#svg-bin"
                width={iconSize}
                height={iconSize}
                fill={primaryColor}
                fillSecondary={secondaryColor}
                x={300}
              />
            </SvgComponent>
          </View>

          <View style={styles.row}>
            <MessageIcon
              width={iconSize}
              height={iconSize}
              fill={primaryColor}
              fillSecondary={secondaryColor}
            />
          </View>

          <Slider
            step={1}
            minimumValue={1}
            maximumValue={colors.length}
            onValueChange={setIndex}
            style={styles.slider}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40
  },
  row: {
    paddingTop: 20
  },
  slider: {
    marginTop: 30,
    width: '90%'
  }
});
