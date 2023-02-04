export function isSubsequence(a: string, b: string): boolean {
  let aIndex = 0;

  for (const char of b) {
    // if the current character in b matches the character at the current
    // position in a then we should move to the next position in a
    if (char === a[aIndex]) {
      aIndex++;
    }

    // if we've reached the end of string a then all characters in a appear in
    // the same order in b
    if (aIndex === a.length) {
      return true;
    }
  }

  // if the loop finishes then all characters in a did not appear in the same order in b
  return false;
}
