-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/ Discord: https://discord.com/invite/Xb9B4Ny

lvim.plugins = {
  { "ThePrimeagen/vim-be-good" },
  { "pocco81/auto-save.nvim" },
  { "stevearc/conform.nvim" },
  { "mg979/vim-visual-multi" },
  {
    "folke/trouble.nvim",
    dependencies = { "nvim-tree/nvim-web-devicons" }
  },
  {
    'petertriho/nvim-scrollbar',
    config = function()
      require('scrollbar').setup()
    end
  },
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
      require("copilot").setup({
        panel = {
          enabled = true,
          auto_refresh = false,
          keymap = {
            jump_prev = "[[",
            jump_next = "]]",
            accept = "<CR>",
            refresh = "gr",
            open = "<M-L>"
          },
          layout = {
            position = "right", -- | top | left | right
            ratio = 0.4
          },
        },
        suggestion = {
          enabled = true,
          auto_trigger = true,
          debounce = 75,
          keymap = {
            accept = "<M-i>",
            accept_word = false,
            accept_line = false,
            next = "<M-]>",
            prev = "<M-[>",
            dismiss = "<C-]>",
          },
        },

      })
    end,
  },
  -- {
  --   "zbirenbaum/copilot-cmp",
  --   config = function()
  --     require("copilot_cmp").setup({
  --       suggestion = { enabled = true },
  --       panel = { enabled = true }
  --     })
  --   end
  -- },
  {
    "nvim-pack/nvim-spectre",
    event = "BufRead",
    config = function()
      require("spectre").setup()
    end,
  },
  {
    "HiPhish/rainbow-delimiters.nvim",
    config = function()
      require("rainbow-delimiters.setup").setup({
        highlight = {
          "PackerString",
          "PackerHash",
          "PackerSuccess",
          "Debug"
        }
      })
    end,
  },
  {
    "brenoprata10/nvim-highlight-colors",
    config = function()
      require('nvim-highlight-colors').setup({
        render = 'background', -- or 'foreground'
        enable_named_colors = false,
        enable_tailwind = true,
      })
    end
  },
  { 'wakatime/vim-wakatime', lazy = false }
}

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
[['󰁃...'. (v:foldend - v:foldstart + 1) . ' lines ' . substitute(getline(v:foldstart),'\\t',repeat('\ ',&tabstop),'g')."...".trim(getline(v:foldend)) | ]]

-- Format command
vim.api.nvim_create_user_command("Format", function(args)
  local range = nil
  if args.count ~= -1 then
    local end_line = vim.api.nvim_buf_get_lines(0, args.line2 - 1, args.line2, true)[1]
    range = {
      start = { args.line1, 0 },
      ["end"] = { args.line2, end_line:len() },
    }
  end
  require("conform").format({ async = true, lsp_fallback = true, range = range })
end, { range = true })

lvim.builtin.terminal.open_mapping = "<M-l>"
lvim.builtin.terminal.execs = {}

vim.opt.wrap = true
vim.opt.linebreak = true

vim.keymap.set('n', '<M-w>', ':BufferKill<CR>', { noremap = true })
vim.keymap.set('n', '<M-Tab>', ':BufferLineCycleNext<CR>', { noremap = true })
vim.keymap.set('n', '<M-1>', ':BufferLineGoToBuffer 1 <CR>', { noremap = true })
vim.keymap.set('n', '<M-2>', ':BufferLineGoToBuffer 2 <CR>', { noremap = true })
vim.keymap.set('n', '<M-3>', ':BufferLineGoToBuffer 3 <CR>', { noremap = true })
vim.keymap.set('n', '<M-4>', ':BufferLineGoToBuffer 4 <CR>', { noremap = true })
vim.keymap.set('n', '<M-5>', ':BufferLineGoToBuffer 5 <CR>', { noremap = true })
vim.keymap.set('n', '<M-6>', ':BufferLineGoToBuffer 6 <CR>', { noremap = true })
vim.keymap.set('n', '<M-7>', ':BufferLineGoToBuffer 7 <CR>', { noremap = true })
vim.keymap.set('n', '<M-8>', ':BufferLineGoToBuffer 8 <CR>', { noremap = true })
vim.keymap.set('n', '<M-9>', ':BufferLineGoToBuffer 9 <CR>', { noremap = true })
