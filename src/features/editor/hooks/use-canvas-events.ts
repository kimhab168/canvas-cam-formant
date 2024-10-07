import { fabric } from "fabric";
import { useEffect } from "react";

interface UseCanvasEventsProps {
  save: () => void;
  canvas: fabric.Canvas | null;
  setSelectedObjects: (object: fabric.Object[]) => void;
  clearSelectionCallback?: () => void;
}

export const UseCanvasEvents = ({
  save,
  canvas,
  setSelectedObjects,
  clearSelectionCallback,
}: UseCanvasEventsProps) => {
  useEffect(() => {
    if (canvas) {
      canvas.on("object:added", () => save());
      canvas.on("object:removed", () => save());
      canvas.on("object:modified", () => {
        const activeObject = canvas.getActiveObject();
        // More general check using 'text' in the object type
        if (activeObject && activeObject.type?.includes("text")) {
          const originalFontSize = (activeObject as fabric.Textbox).fontSize;
          const scaleX = activeObject.scaleX||1; // Scale factor in X direction
          const scaleY = activeObject.scaleY||1; // Scale factor in Y direction

          // Calculate the effective font size based on the scaling factors
          const effectiveFontSize = Math.round(originalFontSize! * Math.min(scaleX, scaleY));

          console.log("Original font size:", originalFontSize);
          console.log("Effective font size after scaling:", effectiveFontSize);
          save();
      }});
      canvas.on("selection:created", (e) => {

        console.log("selection created , hello success");

        setSelectedObjects(e.selected || []);
      });

      canvas.on("selection:updated", (e) => {
        // console.log("selection updated");
        setSelectedObjects(e.selected || []);
      });
      //clear selected
      canvas.on("selection:cleared", () => {
        // console.log("selection cleared");
        setSelectedObjects([]);
        clearSelectionCallback?.();
      });
    }
    return () => {
      if (canvas) {
        canvas.off("object:added");
        canvas.off("object:removed");
        canvas.off("object:modified");
        canvas.off("selection:created");
        canvas.off("selection:updated");
        canvas.off("selection:cleared");
      }
    };
  }, [canvas, clearSelectionCallback]);
};
