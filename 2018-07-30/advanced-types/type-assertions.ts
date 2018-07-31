function f(sn: string | null): string {
  if (sn == null) {
    return "default";
  }
  else {
    return sn;
  }
}

/**
 * and
 */
function f1(sn: string | null) {
  return sn || "default";
}