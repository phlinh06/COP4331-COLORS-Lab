function formatColor(color) {
  return color.trim().toLowerCase();
}

function isValidHex(color) {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

module.exports = { formatColor, isValidHex };
