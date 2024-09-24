import { cn } from "@/lib/utils";

import { ActiveTool, Editor } from "@/features/editor/types";

import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TextSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const TextSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: TextSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[200px] h-full flex flex-col",
        activeTool === "text" ? "visible" : "hidden"
      )}
    >
      {/* Header Sidebar */}
      <ToolSidebarHeader title="Text" description="Add text to your canvas" />
      <ScrollArea>
        <div className="p-4 space-y-5 border-b">
          <Button
            className="w-36 h-16"
            onClick={() => editor?.addText("Hello World!")}
          >
            Textbox
          </Button>
          <Button
            className="w-36 h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Heading", {
                fontSize: 48,
                fontWeight: 700,
              })
            }
          >
            <span className="text-2xl font-bold">Heading</span>
          </Button>
          <Button
            className="w-36 h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Subheading", {
                fontSize: 30,
                fontWeight: 600,
              })
            }
          >
            <span className="text-xl font-semibold">Sub heading</span>
          </Button>
          <Button
            className="w-36 h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Paragraph", {
                fontSize: 18,
              })
            }
          >
            Paragraph
          </Button>
        </div>
      </ScrollArea>
      {/* Footer SideBar */}
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
