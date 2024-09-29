import { fabric } from "fabric";
import { ZoomIn } from "lucide-react";
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
      canvas.on("object:modified", () => save());
      canvas.on("selection:created", (e) => {
        // console.log("selection created");

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
      canvas.on("mouse:wheel", function (opt) {
        if (opt.e.deltaY > 0) {
          console.log("Scrolling down zoomout");
          let zoomRatio = canvas.getZoom();
          zoomRatio -= 0.1;
          const center = canvas.getCenter();
          canvas.zoomToPoint(
            new fabric.Point(center.left, center.top),
            zoomRatio < 0.2 ? 0.2 : zoomRatio
          );
        } else {
          console.log("Scrolling up zoomin");
          let zoomRatio = canvas.getZoom();
          zoomRatio += 0.1;
          const center = canvas.getCenter();
          canvas.zoomToPoint(
            new fabric.Point(center.left, center.top),
            zoomRatio
          );
          // canvas.requestRenderAll();
        }

        // You can also prevent default scrolling behavior if needed
        opt.e.preventDefault();
      });

      // canvas.on("touch:gesture", function (event) {
      //   //@ts-ignore
      //   const touch = event.touches;
      //   if (touch.length === 2) {
      //     let touch1 = touch[0];
      //     let touch2 = touch[1];
      //     if (
      //       touch2.pageX - touch1.pageX > 0 ||
      //       touch2.pageY - touch1.pageY > 0
      //     ) {
      //       let zoomRatio = canvas.getZoom();
      //       zoomRatio += 0.1;
      //       const center = canvas.getCenter();
      //       canvas.zoomToPoint(
      //         new fabric.Point(center.left, center.top),
      //         zoomRatio
      //       );
      //     }
      //   }
      // });
    }
    return () => {
      if (canvas) {
        canvas.off("object:added");
        canvas.off("object:removed");
        canvas.off("object:modified");
        canvas.off("selection:created");
        canvas.off("selection:updated");
        canvas.off("selection:cleared");
        canvas.off("mouse:wheel");
      }
    };
  }, [canvas, clearSelectionCallback]);
};
