{ pkgs, ...}: {

  environment.systemPackages = with pkgs; [
    git
  ];
  homebrew = {
    enable = true;

    onActivation = {
      autoUpdate = true;
      # 'zap': uninstalls all formulae(and related files) not listed here.
      # cleanup = "zap";
    };

    taps = [
    ];

    brews = [
      "wget"
    ];

    casks = [
      "chromium"
    ];
  };
}
