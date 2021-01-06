function getID(url) {
  const urls = url.split("-");

  for (i = 0; i < urls.length; i++) {
    let beforeId = urls.lastIndexOf("p");
    // console.log(a)
    if (beforeId) {
      return urls[beforeId + 1];
    }
  }
}

console.log(
  getID(
    "http://www.exampleshop.com/wc-toilets/public-toilet-proximity-radar-p-942312798-01012020.html"
  )
);
