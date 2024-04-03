local helpers = require("null-ls.helpers")
local FORMATTING = require("null-ls.methods").internal.FORMATTING

require("null-ls").register({
  --your custom sources go here
  helpers.make_builtin({
    name = "alejandra",
    meta = {
      url = "https://github.com/threedaymonk/htmlbeautifier",
      description = "The Uncompromising Nix Code Formatter"
    },
    method = FORMATTING,
    filetypes = { "nix" },
    generator_opts = {
      command = "alejandra",
      args = {}, -- put any required arguments in this table
      to_stdin = true, -- instructs the command to ingest the file from STDIN (i.e. run the currently open buffer through the linter/formatter)
    },
    factory = helpers.formatter_factory,
  })
})
