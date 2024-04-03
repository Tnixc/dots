{
  description = "Example Darwin system flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin.url = "github:LnL7/nix-darwin";
    nix-darwin.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ self, nix-darwin, nixpkgs }:
  let
    configuration = { pkgs, ... }: {

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
    bat
    trash-cli

    # Desktop
    yabai
    skhd
    sketchybar
    jankyborders

  ];

      # Auto upgrade nix package and the daemon service.
      services.nix-daemon.enable = true;
      nix.package = pkgs.nix;

      # Necessary for using flakes on this system.
      nix.settings.experimental-features = "nix-command flakes";

      # Create /etc/zshrc that loads the nix-darwin environment.
      programs.zsh.enable = true;  # default shell on catalina

      # Set Git commit hash for darwin-version.
      system.configurationRevision = self.rev or self.dirtyRev or null;

      # Used for backwards compatibility, please read the changelog before changing.
      # $ darwin-rebuild changelog
      system.stateVersion = 4;

      # The platform the configuration will be used on.
      nixpkgs.hostPlatform = "aarch64-darwin";

      # Sudo via fingerprint
      security.pam.enableSudoTouchIdAuth = true;

    };
  in
  {
    # Build darwin flake using:
    # $ darwin-rebuild build --flake .#simple
    darwinConfigurations."Stardom" = nix-darwin.lib.darwinSystem {
      modules = [ 
        configuration
        ./modules/homebrew.nix
        #./modules/nixpkgs.nix
      ];
    };

    # Expose the package set, including overlays, for convenience.
    darwinPackages = self.darwinConfigurations."simple".pkgs;
  };
}
