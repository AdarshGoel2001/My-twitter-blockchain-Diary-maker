const main = () => {
  const day = "0x" + document.getElementById("1").value;
  const doings = document.getElementById("2").value;
  const mentions = document.getElementById("3").value;
  const text = document.getElementById("4").value;
  const ratio = "0x" + document.getElementById("5").value;
  const hours = "0x" + document.getElementById("6").value;
  const PapaHash = "0x" + document.getElementById("7").value;
  const funness = document.getElementById("8").value;
  const random = "0x" + document.getElementById("9").value;
  const time = document.getElementById("10").value;

  var hashable = `{
    "number": "${day}",
    "WhatIDidToday": "${doings}",
    "SpecialThanksTo": "${mentions}",
    "PlansForTomorrow": "${text}",
    "RatioOfPlannedGoalsAchieved": "${ratio}",
    "approximateHoursDevoted": "${hours}",
    "parentHash": "${PapaHash}",
    "difficulty_satisfaction": "${funness}",
    "nonce": "${random}",
    "timestamp": "${time}",
  }`;

  hash = keccak256(hashable).toString("hex");

  var obj = `>{
    number: ${day},
    WhatIDidToday: "${doings}",
    SpecialThanksTo: "${mentions}",
    PlansForTomorrow: "${text}",
    RatioOfPlannedGoalsAchieved: ${ratio},
    approximateHoursDevoted: ${hours},
    hash: "0x" +"${hash}",
    parentHash: "${PapaHash}",
    difficulty_satisfaction: "${funness}",
    nonce: ${random},
    timestamp: "${time}",
  }`;
  console.log(obj);

  document.getElementById("print").innerHTML = obj;
};
