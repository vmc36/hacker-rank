function timeConversion() {
  let timenotConverted = "07:05:45PM";
  let timeSplited = timenotConverted.split(":");
  let hoursFrame = parseInt(timeSplited[0]);

  let amOrPm = timeSplited[2].slice(2);

  let seconds = timeSplited[2].slice(0, 2);
  console.log(amOrPm);
  console.log(hoursFrame);
  if (amOrPm === "PM" && hoursFrame !== 12) {
    hoursFrame += 12;
  }
  if (amOrPm === "AM" && hoursFrame === 12) {
    hoursFrame = "00";
  } else if (hoursFrame < 10) {
    hoursFrame = "0" + hoursFrame.toString();
  } else {
    hoursFrame = hoursFrame.toString();
  }

  console.log([hoursFrame, timeSplited[1], seconds].join(":"));
}
timeConversion();
