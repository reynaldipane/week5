function cariPelaku(str) {
    var pelaku = /abc/g;
    var ketemu = str.match(pelaku);
    return ketemu.length;
}
  
// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2