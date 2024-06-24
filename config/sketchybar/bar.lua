local colors = require("colors")

-- Equivalent to the --bar domain
sbar.bar({
  topmost = "window",
  height = 42,
  color = colors.bar.bg,
  padding_right = 12,
  padding_left = 12,
})
