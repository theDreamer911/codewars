function fridayThe13(start, end) {
  save = [];
  if (end == undefined) {
    for (var month = 0; month < 12; month++) {
      var d = new Date(start, month, 13);
      if (d.getDay() == 5) {
        save.push(d);
      }
    }
  } else {
    for (var year = start; year <= end; year++) {
      for (let month = 0; month < 12; month++) {
        var thirteen = new Date(year, month, 13);
        if (thirteen.getDay() == 5) {
          // console.log(thirteen);
          save.push(thirteen);
        }
      }
    }
  }
  friday = save.map(
    (e) =>
      (e.getUTCMonth() + 1).toString() +
      "/" +
      e.getUTCDate() +
      "/" +
      e.getUTCFullYear().toString()
  );
  console.log(friday.join(" "));
}

console.log(fridayThe13(2002, 2004));

// function friday(start,end) {
//     save=[]
//     for(var month=0;month<12;month++){
//         var
//     }
// }
