/* sophisticated_code.js */

// This code generates a fractal tree using the HTML5 canvas element

// Set up the canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// Set up the tree parameters
const branchLength = 100;
const angle = Math.PI / 4;
const branchWidth = 10;
const decayFactor = 0.7;

// Recursive function to draw a branch
function drawBranch(startX, startY, angle, length, width) {
  ctx.beginPath();
  ctx.save();

  // Translate and rotate the canvas to the starting point of the branch
  ctx.translate(startX, startY);
  ctx.rotate(angle);

  // Draw the branch
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.lineWidth = width;
  ctx.stroke();

  // Reduce the length and width for the next branch
  length *= decayFactor;
  width *= decayFactor;

  if (length > 10) {
    // Draw two child branches
    drawBranch(0, -length, angle, length, width);
    drawBranch(0, -length, -angle, length, width);
  }

  ctx.restore();
}

// Draw the trunk of the tree
ctx.fillStyle = "brown";
ctx.fillRect(canvas.width / 2 - branchWidth / 2, canvas.height, branchWidth, -branchLength);

// Draw the branches
ctx.strokeStyle = "green";
drawBranch(canvas.width / 2, canvas.height - branchLength, 0, branchLength, branchWidth);

// Add some falling leaves
const numLeaves = 100;
const leafSize = 10;
for (let i = 0; i < numLeaves; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const rotation = Math.random() * 2 * Math.PI;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = "orange";
  ctx.fillRect(-leafSize / 2, -leafSize / 2, leafSize, leafSize);
  ctx.restore();
}