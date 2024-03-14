-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/ Discord: https://discord.com/invite/Xb9B4Ny

lvim.plugins = {
  { "ThePrimeagen/vim-be-good" },
  { "pocco81/auto-save.nvim" },
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
        enable_tailwind = true,
      })
    end
  },
  { 'wakatime/vim-wakatime', lazy = false },
  {
    "olrtg/nvim-emmet",
    config = function()
      vim.keymap.set({ "n", "v" }, '<leader>xe', require('nvim-emmet').wrap_with_abbreviation)
    end,
  },
  { "LhKipp/nvim-nu" }
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
      -- **Note:** only the options listed in the table are supported.
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
