import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {View} from 'react-native';

// SVG Logo converted with React-SVGR
// https://docs.expo.dev/ui-programming/using-svgs/#converting-individual-svg-files-for-react-native
// https://stackoverflow.com/a/70626899

const originalWidth = 1500;
const originalHeight = 566;
const aspectRatio = originalWidth / originalHeight;

const SvgComponent = ({height, ...props}) => (
  <View style={{height, aspectRatio}}>
    <Svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      {...props}
    >
      <Rect width={566} height={566} rx={100} fill="url(#a)" />
      <Path
        stroke="#fff"
        strokeWidth={15}
        d="m133.421 246.082-27.999 192M166.049 223.281l146.344-23.156"
      />
      <Path
        stroke="url(#b)"
        strokeWidth={15}
        d="m464.503 96.378-110.221 97.254"
      />
      <Path
        stroke="#fff"
        strokeWidth={15}
        d="m298.606 442.743 36.279-213.312M257.817 475.498l-123-3M131.5 468.5c0 15.365-12.661 28-28.5 28-15.84 0-28.5-12.635-28.5-28s12.66-28 28.5-28c15.839 0 28.5 12.635 28.5 28Z"
      />
      <Circle cx={289.5} cy={472.5} r={28} stroke="#fff" strokeWidth={15} />
      <Circle
        cx={143.139}
        cy={224.205}
        r={23.066}
        stroke="#fff"
        strokeWidth={15}
      />
      <Circle
        cx={336.721}
        cy={207.533}
        r={23.066}
        stroke="#fff"
        strokeWidth={15}
      />
      <Path
        d="m460.541 52 12.008 32.451L505 96.459l-32.451 12.008-12.008 32.451-12.008-32.451-32.451-12.008 32.451-12.008L460.541 52Z"
        fill="url(#c)"
        stroke="#fff"
        strokeWidth={6}
      />
      <Path
        fill="#fff"
        d="m200.651 81.5 14.85-14.85 14.848 14.85L215.5 96.35zM175.686 331 187 319.686 198.313 331 187 342.314zM408.686 275 420 263.686 431.313 275 420 286.314zM453.686 433 465 421.686 476.313 433 465 444.314zM499.308 326.006l8.697-8.697 8.698 8.697-8.698 8.697zM50 207.698l8.697-8.697 8.698 8.697-8.698 8.697z"
      />
      <Path
        d="M692.75 427.909V137h78.977v227.273h117.614v63.636H692.75Z"
        fill="url(#d)"
      />
      <Path
        d="M942.786 509.727c-8.997 0-17.567-.71-25.711-2.13-8.144-1.326-15.293-3.173-21.449-5.54l17.046-55.682c6.439 2.273 12.31 3.741 17.614 4.403 5.397.663 9.99.284 13.778-1.136 3.883-1.42 6.676-4.119 8.381-8.097l1.704-3.977-76.704-227.841h81.818l35.227 151.137h2.273l35.797-151.137h82.38l-79.54 236.364c-3.98 12.026-9.75 22.822-17.33 32.386-7.48 9.659-17.33 17.282-29.546 22.87-12.216 5.587-27.462 8.38-45.738 8.38Z"
        fill="url(#e)"
      />
      <Path
        d="M1137.25 427.909V209.727h76.13v41.478h2.27c3.98-15.341 10.28-26.563 18.9-33.665 8.71-7.102 18.89-10.654 30.54-10.654 3.41 0 6.77.284 10.08.853 3.41.473 6.68 1.183 9.8 2.13v66.904c-3.88-1.326-8.66-2.32-14.34-2.983-5.69-.663-10.56-.995-14.63-.995-7.67 0-14.59 1.752-20.74 5.256-6.06 3.409-10.85 8.239-14.35 14.489-3.5 6.155-5.26 13.399-5.26 21.733v113.636h-78.4Z"
        fill="url(#f)"
      />
      <Path
        d="M1361.32 431.318c-13.92 0-26.23-2.273-36.93-6.818-10.61-4.64-18.94-11.648-25-21.023-6.06-9.375-9.09-21.307-9.09-35.795 0-11.932 2.04-22.112 6.11-30.54 4.07-8.523 9.75-15.483 17.04-20.881 7.29-5.397 15.77-9.517 25.43-12.358 9.75-2.84 20.26-4.687 31.53-5.539 12.22-.947 22.02-2.084 29.41-3.409 7.48-1.421 12.88-3.362 16.19-5.824 3.31-2.557 4.97-5.919 4.97-10.086v-.568c0-5.682-2.18-10.038-6.53-13.068-4.36-3.03-9.95-4.545-16.76-4.545-7.48 0-13.59 1.657-18.33 4.971-4.64 3.22-7.43 8.192-8.38 14.915h-72.16c.95-13.258 5.16-25.473 12.64-36.648 7.58-11.269 18.61-20.265 33.1-26.988 14.49-6.819 32.58-10.228 54.26-10.228 15.63 0 29.64 1.847 42.05 5.54 12.4 3.599 22.96 8.665 31.67 15.199 8.72 6.439 15.34 14.015 19.89 22.727 4.64 8.618 6.96 17.993 6.96 28.125v149.432h-73.29v-30.682h-1.71c-4.36 8.144-9.66 14.726-15.91 19.745-6.15 5.019-13.21 8.664-21.16 10.937-7.86 2.273-16.53 3.409-26 3.409Zm25.57-49.432c5.97 0 11.55-1.231 16.76-3.693 5.31-2.462 9.61-6.013 12.93-10.653 3.31-4.64 4.97-10.275 4.97-16.904v-18.181a89.472 89.472 0 0 1-6.68 2.414 99.925 99.925 0 0 1-7.38 2.131 137.58 137.58 0 0 1-8.24 1.847c-2.84.568-5.83 1.089-8.95 1.562-6.06.947-11.03 2.51-14.92 4.688-3.78 2.083-6.62 4.687-8.52 7.812-1.8 3.03-2.7 6.439-2.7 10.227 0 6.061 2.13 10.701 6.4 13.921 4.26 3.22 9.7 4.829 16.33 4.829Z"
        fill="url(#g)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={566}
          y1={0}
          x2={0}
          y2={566}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={404.43}
          y1={139.381}
          x2={403.769}
          y2={138.631}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#E1E1E1" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={460.541}
          y1={52}
          x2={460.541}
          y2={140.918}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={693}
          y1={137}
          x2={1499}
          y2={510}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={693}
          y1={137}
          x2={1499}
          y2={510}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={693}
          y1={137}
          x2={1499}
          y2={510}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={693}
          y1={137}
          x2={1499}
          y2={510}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC700" />
          <Stop offset={1} stopColor="#FF00E5" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);

export default SvgComponent;
