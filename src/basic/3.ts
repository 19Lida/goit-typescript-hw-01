function mix(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

function activeButton(state: "enable" | "disable") {
  if (state === "enable") {
    console.log("Button is active");
  } else if (state === "disable") {
    console.log("Button is unactive");
  }
}
