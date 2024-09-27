import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { Editor } from "../types";

interface NudgePositionProps {
  value: number;
  onChange: (value: number) => void;
  editor: Editor | undefined;
}

export const NudgePosition = ({
  value,
  onChange,
  editor,
}: NudgePositionProps) => {
  const increment = () => onChange(value + 1);
  const left = () => editor?.onMoveLeft();
  const right = () => editor?.onMoveRight();
  const up = () => editor?.onMoveUp();
  const down = () => editor?.onMoveDown();
  const decrement = () => onChange(value - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div className="flex items-center">
      {/* <Button
        onClick={left}
        variant="outline"
        className="p-2 rounded-r-none border-r-0"
        size="icon"
      >
        <Minus className="size-4" />
      </Button> */}
      <Button
        onClick={left}
        variant="outline"
        className="p-2 rounded-r-none border-r-0"
        size="icon"
      >
        left
      </Button>
      <Button
        onClick={right}
        variant="outline"
        className="p-2 rounded-r-none border-r-0"
        size="icon"
      >
        right
      </Button>
      <Button
        onClick={up}
        variant="outline"
        className="p-2 rounded-r-none border-r-0"
        size="icon"
      >
        Up
      </Button>
      <Button
        onClick={down}
        variant="outline"
        className="p-2 rounded-r-none border-r-0"
        size="icon"
      >
        down
      </Button>
      {/* <Input
        className="w-[50px] h-8 focus-visible:ring-0 rounded-none"
        onChange={handleChange}
        value={value}
      /> */}
      {/* <Button
        onClick={increment}
        variant="outline"
        className="p-2 rounded-l-none border-l-0"
        size="icon"
      >
        <Plus className="size-4" />
      </Button> */}
    </div>
  );
};
