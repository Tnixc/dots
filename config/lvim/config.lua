-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/ Discord: https://discord.com/invite/Xb9B4Ny

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
        kind = "background",
      }
    } -- your configuration
  },
  { 'wakatime/vim-wakatime', lazy = false },
  { "olrtg/nvim-emmet", },
  { "LhKipp/nvim-nu" }
}
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

vim.api.nvim_create_autocmd({ "FileType" }, {
  pattern = "css,eruby,html,htmldjango,javascriptreact,less,pug,sass,scss,typescriptreact,vue",
  callback = function()
    vim.lsp.start({
      cmd = { "emmet-language-server", "--stdio" },
      root_dir = vim.fs.dirname(vim.fs.find({ ".git" }, { upward = true })[1]),
      -- Read more about this options in the [vscode docs](https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration).
      init_options = {
        ---@type table<string, string>
        includeLanguages = {},
        --- @type string[]
        excludeLanguages = {},
        --- @type string[]
        extensionsPath = {},
        --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/preferences/)
        preferences = {},
        --- @type boolean Defaults to `true`
        showAbbreviationSuggestions = true,
        --- @type "always" | "never" Defaults to `"always"`
        showExpandedAbbreviation = "always",
        --- @type boolean Defaults to `false`
        showSuggestionsAsSnippets = false,
        --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/syntax-profiles/)
        syntaxProfiles = {},
        --- @type table<string, string> [Emmet Docs](https://docs.emmet.io/customization/snippets/#variables)
        variables = {},
      },
    })
  end,
})

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

local opts = { noremap = true }

-- Buffer management
vim.keymap.set('n', '<M-w>', ':BufferKill<CR>', opts)
vim.keymap.set('n', '<M-Tab>', ':BufferLineCycleNext<CR>', opts)

-- Quickly switch to buffer number
for i = 1, 9 do
  vim.keymap.set('n', '<M-' .. i .. '>', ':BufferLineGoToBuffer ' .. i .. ' <CR>', opts)
end
