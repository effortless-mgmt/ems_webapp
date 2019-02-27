export function sortUserNamesABC(ar) {
  return ar.sort(function(a, b) {
    var A = a.firstName.toUpperCase();
    var AL = a.lastName.toUpperCase();
    var B = b.firstName.toUpperCase();
    var BL = b.lastName.toUpperCase();

    if (A < B) return -1;
    if (A > B) return 1;
    if (AL < BL) return -1;
    if (AL > BL) return 1;

    return 0;
  });
}
