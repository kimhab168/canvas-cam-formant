import { ChromePicker, CirclePicker } from "react-color";
import { colors } from "@/features/editor/types";
import { rgbaObjectToString } from "@/features/editor/utils";
interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({
  value = "rgba(0, 0, 0, 1)",
  onChange = () => {},
}: ColorPickerProps) => {
  return (
    <div className="h-full overflow-x-scroll overflow-y-hidden flex justify-center items-center">
      <div className="p-2" style={{ scrollBehavior: "smooth" }}>
        <CirclePicker
          circleSize={25}
          className="circle-picker "
          color={value}
          colors={colors}
          onChangeComplete={(color) => {
            const formattedValue = rgbaObjectToString(color.rgb);
            onChange(formattedValue);
          }}
        />
      </div>
    </div>
  );
};

// {/* <div className="w-full space-y-4 flex overflow-x-scroll"> */}
// {/* <ChromePicker
//   color={value}
//   onChange={(color) => {
//     const formattedValue = rgbaObjectToString(color.rgb);
//     onChange(formattedValue);
//   }}
//   className="border rounded-lg"
// // /> */}
