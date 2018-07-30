interface Brid {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Brid {
  // ...
  return;
}

let pet = getSmallPet();
pet.layEggs();        //只能访问此联合类型的所有类型里共有的成员
// pet.fly();
// pet.swim();