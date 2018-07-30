interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
  return;
}

let pet = getSmallPet();
/**
 * 以下这样式会出错的
 */
// if (pet.swim) {
//   pet.swim();
// }
// else if (pet.fly) {
//   pet.fly();
// }

if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
}
else if {
  (<Bird>pet).fly();
} 