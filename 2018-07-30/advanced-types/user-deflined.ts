interface Fish {
  swim();
  layEggs();
}

interface Bird {
  fly();
  layEggs();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}