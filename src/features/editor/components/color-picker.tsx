import { ChromePicker, CirclePicker } from "react-color";
import { colors } from "@/features/editor/types";
import { rgbaObjectToString } from "@/features/editor/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className="whitespace-nowrap flex space-x-2 p-4"
        style={{ scrollBehavior: "smooth" }}
      >
        <CirclePicker
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
