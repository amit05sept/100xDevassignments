function clock() {
  const today = new Date();
  //   console.log(today.getHours());
  const hh = today.getHours();
  const mm = today.getMinutes();
  const ss = today.getSeconds();
  const amPm = hh < 12 ? "AM" : "PM";
  console.log(
    `${(hh + "").padStart(2, "0")}:${(mm + "").padStart(2, "0")}:${(
      ss + ""
    ).padStart(2, "0")}:${amPm}`
  );
  setTimeout(clock, 1000);
}
clock();
