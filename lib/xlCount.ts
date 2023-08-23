export function xlCount(level: number) {
  let xlCandy = 0;

  for (let i = Math.min(level, 50); i > 40; i -= 0.5) {
    if (i >= 48.5) xlCandy += 20;
    else if (i >= 46.5) xlCandy += 17;
    else if (i >= 44.5) xlCandy += 15;
    else if (i >= 42.5) xlCandy += 12;
    else xlCandy += 10;
  }

  return xlCandy;
}
