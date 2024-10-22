import Svg, { SvgProps, Path } from "react-native-svg";

export default function Home({ width = 24, height = 24, ...props }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 23"
      fill="none"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.44064 8.9032L12.1195 2.22433L18.7984 8.9032H18.7969V20.0322H5.44206V8.9032H5.44064ZM3.21625 11.1276L1.57275 12.7711L0 11.1983L10.547 0.65137C11.4155 -0.217123 12.8236 -0.217123 13.6921 0.65137L24.239 11.1983L22.6663 12.7711L21.0227 11.1275V20.0322C21.0227 21.2615 20.0262 22.258 18.7969 22.258H5.44206C4.21278 22.258 3.21625 21.2615 3.21625 20.0322V11.1276Z"
        fill="currentColor"
      />
    </Svg>
  );
}
