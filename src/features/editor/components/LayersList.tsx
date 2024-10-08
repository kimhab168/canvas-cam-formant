import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GripVertical } from "lucide-react";

interface LayersListProps {
    canvas: fabric.Canvas | null;
}

const LayersList = ({ canvas }: LayersListProps) => {
    const [layers, setLayers] = useState<fabric.Object[]>([]);
    // Function to update the layers list whenever the canvas changes
    const updateLayersList = () => {
        if (canvas) {
            const objects = canvas.getObjects();
            setLayers([...objects]); // Trigger re-render with updated layers
        }
    };

    // Listen for changes in the canvas using useEffect
    useEffect(() => {
        if (!canvas) return;

        // Update the layers list initially
        updateLayersList();

        // Add event listeners to canvas to detect changes
        canvas.on("object:added", updateLayersList);
        canvas.on("object:removed", updateLayersList);
        canvas.on("object:modified", updateLayersList);

        // Clean up listeners on component unmount
        return () => {
            canvas.off("object:added", updateLayersList);
            canvas.off("object:removed", updateLayersList);
            canvas.off("object:modified", updateLayersList);
        };
    }, [canvas]);

    // Re-render layers when objects change on the canvas
    useEffect(() => {
        updateLayersList();
    }, [canvas?.getObjects().length]);

    // Handle the drag end event
    const handleDragEnd = (result: any) => {
        if (!result.destination) return; // Dropped outside the list

        // Reorder the layers array based on drag result
        const reorderedLayers = Array.from(layers);
        const [movedLayer] = reorderedLayers.splice(result.source.index, 1);
        reorderedLayers.splice(result.destination.index, 0, movedLayer);

        setLayers(reorderedLayers);

        // Reorder the Fabric.js canvas layers based on the new order
        reorderedLayers.forEach((layer, index) => {
            canvas?.moveTo(layer, index); // Update layer order in canvas
        });

        // Re-render the canvas
        canvas?.renderAll();
    };

    const onDragEnd = (result: any) => {
        // Handle the drag end event
        if (!result.destination) return;
        const items = Array.from(layers);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // Update the state with the new order
        setLayers(items); // Assuming you have a state setter for layers
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="layers">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="layers-list"
                        >
                            {layers.map((layer, index) => (
                                <Draggable
                                    key={layer.id}
                                    draggableId={layer.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            className="layer-item"
                                            onClick={() => {
                                                if (canvas) {
                                                    canvas.setActiveObject(
                                                        layer
                                                    );
                                                    canvas.renderAll();
                                                }
                                            }}
                                            // style={{
                                            //     backgroundColor:
                                            //         layer ===
                                            //         canvas?.getActiveObject()
                                            //             ? "#e6e6e6"
                                            //             : "#fff",
                                            // }}
                                        >
                                            <span
                                                {...provided.dragHandleProps}
                                                className="drag-handle"
                                            >
                                                <GripVertical size={20} />
                                            </span>
                                            Layer {index + 1}: {layer.type}{" "}
                                            {layer.id
                                                ? `(ID: ${layer.id})`
                                                : ""}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </DragDropContext>
    );
};

export default LayersList;
