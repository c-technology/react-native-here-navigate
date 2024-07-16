import Svg, { Path, type SvgProps } from 'react-native-svg';

/**
 * Icons made by Carbon Design
 * https://www.iconfinder.com/carbon-design
 */
export default function BicycleSVG(props: SvgProps) {
  return (
    <Svg id="icon" width={32} height={32} viewBox="0 0 32 32" {...props}>
      <Path
        fill="currentColor"
        d="M26 16c-.088 0-.173.01-.26.013L24.237 9H28V7h-5a1 1 0 00-.978 1.21L22.62 11H12.387l-1-3H14V6H7v2h2.28l1.041 3.123-2.57 5.14A6 6 0 1011.91 23h2.61a1.991 1.991 0 001.562-.75l7.058-8.824.644 3.004A5.99 5.99 0 1026 16zM6 26a4 4 0 11.836-7.91l-1.73 3.463.009.004A.983.983 0 005 22a.993.993 0 001.885.443l.01.004L8.617 19A3.983 3.983 0 016 26zm5.91-5a5.999 5.999 0 00-2.373-3.836l1.678-3.358L13.613 21zm3.458-1.06L13.054 13h7.865zM26 26a3.988 3.988 0 01-1.786-7.56l.808 3.77.02-.004A.986.986 0 0026 23a1 1 0 001-1 .946.946 0 00-.042-.206l.02-.004-.808-3.773A3.993 3.993 0 0126 26z"
      />
    </Svg>
  );
}
