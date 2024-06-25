return {
  black = 0xff25273A,
  white = 0xffb5c9ff,
  red = 0xffFF6C8D,
  green = 0xff90D05A,
  blue = 0xff6EA3FE,
  yellow = 0xffE9AD5B,
  orange = 0xffFF9856,
  magenta = 0xffC198FD,
  grey = 0xff9AA9D9,
  transparent = 0x00000000,

  bar = {
    bg = 0x00ffffff,
    border = 0x00ffffff,
  },
  popup = {
    bg = 0xee25273A,
    border = 0xff1E2030,
  },
  bg1 = 0xff25273A,
  bg2 = 0xff1E2030,

  with_alpha = function(color, alpha)
    if alpha > 1.0 or alpha < 0.0 then return color end
    return (color & 0x00ffffff) | (math.floor(alpha * 255.0) << 24)
  end,
}
