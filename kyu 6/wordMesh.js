function wordMesh(arr) {
  let word = "";
  for (let i = 0; i < arr.length - 1; i++) {
    let mesh = (arr[i] + " " + arr[i + 1]).match(/(.+) \1/);
    if (!mesh) return "failed to mesh";
    console.log(mesh);
    // word += mesh[1];
  }
  return word;
}
console.log(wordMesh(["allow", "lowering", "ringmaster", "terror"]));
