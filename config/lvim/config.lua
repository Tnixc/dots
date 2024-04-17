require("plugins")
require("line")
require("keymaps")
require("emmet")

vim.api.nvim_command("set termguicolors")
vim.api.nvim_command("set t_Co=256")

-- Folding options
lvim.builtin.which_key.setup.plugins.presets.z = true
vim.wo.foldmethod = "expr"
vim.wo.foldexpr = "nvim_treesitter#foldexpr()"
vim.wo.foldenable = false
vim.wo.foldnestmax = 2
vim.wo.foldminlines = 2
vim.wo.foldlevel = 99
vim.wo.foldtext =
[[' 󰁃...'. (v:foldend - v:foldstart + 1) . ' lines ' . substitute(getline(v:foldstart),'\\t',repeat('\ ',&tabstop),'g')."...".trim(getline(v:foldend)) | ]]


lvim.builtin.terminal.open_mapping = "<M-l>"
lvim.builtin.terminal.execs = {}

lvim.builtin.nvimtree.setup.git.enable = true
lvim.builtin.nvimtree.setup.renderer = {
  highlight_git = true,
  icons = {
    show = {
      git = true,
    },
  }
}

lvim.builtin.telescope.defaults = {
  initial_mode = "insert",
  layout_config = {
    preview_cutoff = 120,
    prompt_position = "bottom",
    width = 0.75,
    height = 0.75,
  },
  layout_strategy = "horizontal",
}
require("lvim.lsp.manager").setup("cssls", {
  settings = {
    css = {
      validate = true,
      lint = {
        unknownAtRules = "ignore"
      }
    },
    scss = {
      validate = true,
      lint = {
        unknownAtRules = "ignore"
      }
    },
    less = {
      validate = true,
      lint = {
        unknownAtRules = "ignore"
      }
    },
  },
})
local orig_util_open_floating_preview = vim.lsp.util.open_floating_preview
function vim.lsp.util.open_floating_preview(contents, syntax, opts, ...)
  opts = opts or {}
  opts.border = opts.border or 'single'
  opts.max_width = opts.max_width or 80
  return orig_util_open_floating_preview(contents, syntax, opts, ...)
end
