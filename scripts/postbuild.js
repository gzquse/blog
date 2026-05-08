const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(distDir)) {
  throw new Error("The dist directory does not exist. Run the Parcel build before postbuild.");
}

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
}
