import Svg, { SvgProps, Path } from "react-native-svg";

export default function Chat({ width = 24, height = 24, ...props }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 1.83333C5.9417 1.83333 1.83333 5.94043 1.83333 10.9954C1.83333 12.5927 2.25792 14.1744 3.06553 15.5644C3.06565 15.5646 3.06578 15.5649 3.0659 15.5651L3.25754 15.8934C3.38084 16.1047 3.41458 16.3565 3.35124 16.5928L2.59814 19.4023L5.40953 18.6494C5.64564 18.5862 5.89723 18.6199 6.10839 18.743L6.43486 18.9333C6.43539 18.9337 6.43592 18.934 6.43645 18.9343C7.79987 19.7208 9.32609 20.1431 10.8774 20.1657C10.9177 20.1603 10.9586 20.1575 11 20.1575C16.0583 20.1575 20.1667 16.0504 20.1667 10.9954C20.1667 5.94043 16.0583 1.83333 11 1.83333ZM11.1451 21.9899C17.1484 21.9121 22 17.0153 22 10.9954C22 4.92713 17.07 0 11 0C4.92997 0 0 4.92713 0 10.9954C0 12.9163 0.510287 14.8161 1.48077 16.4862L1.48145 16.4874L0.416258 20.4612C0.331467 20.7775 0.421869 21.115 0.653412 21.3466C0.884955 21.5782 1.22246 21.6687 1.5388 21.584L5.51488 20.5191L5.51494 20.5192L5.51847 20.5212C7.19608 21.4894 9.08635 22 11.0092 22C11.0551 22 11.1005 21.9966 11.1451 21.9899Z"
        fill="currentColor"
      />
    </Svg>
  );
}