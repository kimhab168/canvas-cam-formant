import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "flex-shrink-0 w-auto h-full px-4 flex flex-col rounded-none items-center justify-center",
        isActive && "bg-muted text-primary"
      )}
    >
      <Icon className="size-4 stroke-2 shrink-0" />
      <span className="mt-2 text-xs">{label}</span>
    </Button>
  );
};
