local opts = { noremap = true }

-- Buffer management
vim.keymap.set('n', '<M-w>', ':BufferKill<CR>', opts)
vim.keymap.set('n', '<M-Tab>', ':BufferLineCycleNext<CR>', opts)

-- Quickly switch to buffer number
for i = 1, 9 do
  vim.keymap.set('n', '<M-' .. i .. '>', ':BufferLineGoToBuffer ' .. i .. ' <CR>', opts)
end
