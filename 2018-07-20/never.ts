// 返回的never函数必须存在无法到达的终点

function error(message: string): never {
  throw new Error(message);
}

//error('2323'); // Error: 2323

function fail() {
  return error("Something failed");
}

// fail(); // Error: Something failed

function infiniteLoop(): never {
  while (true) {

  }
}

infiniteLoop(); // 终端一直开着，无穷无尽