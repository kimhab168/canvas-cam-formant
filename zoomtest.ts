let initialDistance = 0; // Store the initial distance between two fingers
let isZooming = false; // Flag to indicate whether the user is performing a zoom action

// Listen for the 'touch:gesture' event on the canvas
canvas.on("touch:gesture", function (opt) {
  // Check if exactly two fingers are touching the screen
  if (opt.e.touches && opt.e.touches.length === 2) {
    isZooming = true;

    // Get the two touch points
    let touch1 = opt.e.touches[0];
    let touch2 = opt.e.touches[1];

    // Calculate the initial distance between the two fingers
    initialDistance = getDistance(touch1, touch2);
  }
});

// Listen for the 'touch:drag' event to track movement
canvas.on("touch:drag", function (opt) {
  // Ensure that two fingers are still on the canvas and zooming is active
  if (isZooming && opt.e.touches && opt.e.touches.length === 2) {
    let touch1 = opt.e.touches[0];
    let touch2 = opt.e.touches[1];

    // Calculate the current distance between the two fingers
    let currentDistance = getDistance(touch1, touch2);

    // Determine if the gesture is zooming in or out
    if (currentDistance > initialDistance) {
      console.log("Zooming in");
      canvas.setZoom(canvas.getZoom() * 1.01); // Adjust zoom level (increase)
    } else if (currentDistance < initialDistance) {
      console.log("Zooming out");
      canvas.setZoom(canvas.getZoom() * 0.99); // Adjust zoom level (decrease)
    }

    // Update the initial distance for the next move
    initialDistance = currentDistance;

    // Prevent default behavior (like scrolling)
    opt.e.preventDefault();
  }
});

// Listen for the 'touch:end' event to reset the state
canvas.on("touch:end", function (opt) {
  // Reset zooming state and distance when gesture ends
  if (opt.e.touches.length < 2) {
    isZooming = false;
    initialDistance = 0;
  }
});

// Helper function to calculate the distance between two touch points
function getDistance(touch1, touch2) {
  let dx = touch2.pageX - touch1.pageX;
  let dy = touch2.pageY - touch1.pageY;
  return Math.sqrt(dx * dx + dy * dy);
}
