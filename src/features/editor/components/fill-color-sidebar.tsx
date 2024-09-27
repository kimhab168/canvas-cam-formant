import { cn } from "@/lib/utils";

import { ActiveTool, Editor, FILL_COLOR } from "@/features/editor/types";

import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";

import { ColorPicker } from "@/features/editor/components/color-picker";

import { ScrollArea } from "@/components/ui/scroll-area";

interface FillColorSidebarProps {
    editor: Editor | undefined;
    activeTool: ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void;
}

export const FillColorSidebar = ({
    editor,
    activeTool,
    onChangeActiveTool,
}: FillColorSidebarProps) => {
    const value = editor?.getActiveFillColor() || FILL_COLOR;

    const onClose = () => {
        onChangeActiveTool("select");
    };

    const onChange = (value: string) => {
        editor?.changeFillColor(value);
    };

    return (
        <aside
            className={cn(
                "bg-red-200 border-r z-[40] flex absolute justify-center bottom-[108px] w-full",
                activeTool === "fill" ? "visible" : "hidden"
            )}
        >
            {/* Header Sidebar */}
            {/* <ToolSidebarHeader
        title="Fill Color"
        description="Add fill color to your element"
      /> */}
            <ColorPicker value={value} onChange={onChange} />
            {/* Footer SideBar */}
            {/* <ToolSidebarClose onClick={onClose} /> */}
        </aside>
    );
};
