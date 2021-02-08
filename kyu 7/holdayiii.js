function fireFight(s) {
  const array = s.split(" ");
  for (i = 0; i < array.length; i++) {
    const fire = array.findIndex((el) => el === "Fire");
    array[fire] = "~~";
  }
  return array.join(" ");
}

console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  )
);
