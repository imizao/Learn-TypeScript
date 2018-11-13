function printLabel(labelObj: {label: string}) {
  console.log(labelObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
printLabel(myObj)

interface LabelValue {
  label: string
}

function printLabel1(labelObj: LabelValue) {
  console.log(labelObj.label)
}

printLabel1(myObj)