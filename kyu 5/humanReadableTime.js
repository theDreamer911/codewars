// function humanReadable(seconds) {
//   let SS = Math.floor(seconds % 60);
//   let MM = Math.floor((seconds / 60) % 60);
//   let HH = Math.floor((seconds / 60 / 60) % 60);

//   secondLength = SS.toString().length;
//   minutesLength = MM.toString().length;
//   hoursLength = HH.toString().length;

//   if (seconds >= 359999) {
//     HH = 99;
//     MM = 59;
//     SS = 59;
//     return `${HH}:${MM}:${SS}`;
//   }

//   if (hoursLength == 1) {
//     HH = `0${HH}`;
//   }
//   if (minutesLength == 1) {
//     MM = `0${MM}`;
//   }
//   if (secondLength == 1) {
//     SS = `0${SS}`;
//   }
//   return `${HH}:${MM}:${SS}`;
// }

function humanReadable(seconds) {
  let time = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return `${time(parseInt(seconds / (60 * 60)))}:${time(
    parseInt((seconds / 60) % 60)
  )}:${time(seconds % 60)}`;
}

console.log(humanReadable(88));
