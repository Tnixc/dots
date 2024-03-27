local c = require("lvim.core.lualine.colors")
lvim.builtin.lualine.options.theme = "auto"
lvim.builtin.lualine.options.component_separators = { left = "", right = "/" }
lvim.builtin.lualine.options.section_separators = { left = "", right = "" }
lvim.builtin.lualine.sections.lualine_a = { "mode" }
lvim.builtin.lualine.sections.lualine_b = { "branch" }
lvim.builtin.lualine.sections.lualine_c = {
  { "diff", diff_color = { added = { fg = c.green }, modified = { fg = c.yellow }, removed = { fg = c.red } } },
  "diagnostics",
  "filename",
}
lvim.builtin.lualine.sections.lualine_x = { "lsp", "copilot", "treesitter", "filetype" }
lvim.builtin.lualine.sections.lualine_y = { "searchcount", "progress" }
lvim.builtin.lualine.sections.lualine_z = { "location" }
