local clients_lsp = function()
  -- local bufnr = vim.api.nvim_get_current_buf()
  local clients = vim.lsp.get_active_clients()
  if next(clients) == nil then
    return ''
  end
  local c = {}
  for _, client in pairs(clients) do
    table.insert(c, client.name)
  end
  return '󰌨 ' .. table.concat(c, '|')
end

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
lvim.builtin.lualine.sections.lualine_x = { clients_lsp, "filetype" }
lvim.builtin.lualine.sections.lualine_y = { "searchcount", "progress" }
lvim.builtin.lualine.sections.lualine_z = { "location" }
vim.o.cmdheight=0




