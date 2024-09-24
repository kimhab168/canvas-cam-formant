"use client";
import React from "react";
import { SidebarItem } from "@/features/editor/components/sidebar-item";
import { ActiveTool } from "@/features/editor/types";
import {
  LayoutTemplate,
  ImageIcon,
  Pencil,
  Presentation,
  Settings,
  Shapes,
  Sparkles,
  Type,
} from "lucide-react";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export function Sidebar({ activeTool, onChangeActiveTool }: SidebarProps) {
  return (
    <aside className="bg-white h-20 border-r flex w-full overflow-x-auto whitespace-nowrap gap-x-2">
      <SidebarItem
        icon={LayoutTemplate}
        label="Design"
        isActive={activeTool === "templates"}
        onClick={() => onChangeActiveTool("templates")}
      />
      <SidebarItem
        icon={ImageIcon}
        label="Image"
        isActive={activeTool === "images"}
        onClick={() => onChangeActiveTool("images")}
      />
      <SidebarItem
        icon={Type}
        label="Text"
        isActive={activeTool === "text"}
        onClick={() => onChangeActiveTool("text")}
      />
      <SidebarItem
        icon={Shapes}
        label="Shapes"
        isActive={activeTool === "shapes"}
        onClick={() => onChangeActiveTool("shapes")}
      />
      <SidebarItem
        icon={Sparkles}
        label="AI"
        isActive={activeTool === "ai"}
        onClick={() => onChangeActiveTool("ai")}
      />
      <SidebarItem
        icon={Settings}
        label="Settings"
        isActive={activeTool === "settings"}
        onClick={() => onChangeActiveTool("settings")}
      />
    </aside>
  );
}
