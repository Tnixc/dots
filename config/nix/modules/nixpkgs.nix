{ pkgs, ... }: {
  environment.systemPackages = with pkgs; [
    # Dev tools
    eza
    neovim
    git
    just # use Justfile to simplify nix-darwin's commands 
    fzf
    fastfetch
    nushell
    lunarvim
    starship

    # Desktop
    yabai
    skhd
    sketchybar
    jankyborders

    # GUI apps
    raycast
    chromium
    kitty

  ];
  
  environment.variables.EDITOR = "lvim";
}
