lvim.plugins = {
  -- { 'nvim-treesitter/nvim-treesitter' },
  { "ThePrimeagen/vim-be-good" },
  { "pocco81/auto-save.nvim" },
  { "kdheepak/lazygit.nvim" },
  {
    "NStefan002/visual-surround.nvim",
    config = function()
      require("visual-surround").setup({})
    end,
  },
  { "mg979/vim-visual-multi" },
  {
    'stevearc/oil.nvim',
    opts = {},
    dependencies = { "nvim-tree/nvim-web-devicons" },
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
          auto_refresh = true,
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
  { "AndreM222/copilot-lualine" },
  {
    "CopilotC-Nvim/CopilotChat.nvim",
    branch = "canary",
    dependencies = {
      { "zbirenbaum/copilot.lua" }, -- or github/copilot.vim
      { "nvim-lua/plenary.nvim" },  -- for curl, log wrapper
    },
    opts = {
      debug = false,
    },
  },
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
        enable_tailwind = false,
      })
    end
  },
  {
    "luckasRanarison/tailwind-tools.nvim",
    opts = {
      document_color = {
        kind = "background"
      }
    } -- your configuration
  },
  { 'wakatime/vim-wakatime', lazy = false },
  { "olrtg/nvim-emmet", },
  { "LhKipp/nvim-nu" }
}
