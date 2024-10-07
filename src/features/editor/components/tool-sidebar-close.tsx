import { ChevronsDown, ChevronsLeft } from "lucide-react";

interface ToolSidebarClosepProps {
  onClick: () => void;
}

export const ToolSidebarClose = ({ onClick }: ToolSidebarClosepProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white w-[60px] border rounded-t-sm  flex justify-center "
    >
      <ChevronsDown className="size-4 text-black group-hover:opacity-75 transition" />
    </button>
  );
};
