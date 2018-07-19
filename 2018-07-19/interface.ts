interface LabelValue{
  label: string;
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myObj = {
  "label": "Hello interface"
}

printLabel(myObj);