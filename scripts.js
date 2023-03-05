// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
  const takeOffButton = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackgroundColor = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const landButton = document.getElementById("landing");
  const rocketImg = document.getElementById("rocket");
  const fuelTank = document.getElementById("fuelTank");
  const abortMissionButton = document.getElementById("missionAbort");

  //   const leftButton = document.getElementById("left");
  //   const rightButton = document.getElementById("right");
  //   const upButton = document.getElementById("up");
  //   const downButton = document.getElementById("down");
  let altitude = 0;
  let rocketPositionX = 0;
  let rocketPositionY = 0;

  takeOffButton.addEventListener("click", function () {
    let takeOffStatus = confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (takeOffStatus) {
      altitude = 10000;
      flightStatus.innerHTML = "Shuttle is in flight.";
      shuttleBackgroundColor.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = altitude;
      rocketImg.style.bottom = "30px";
      fuelTank.innerHTML = "80%";
    }
  });

  landButton.addEventListener("click", function () {
    let landingStatus = confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    if (landingStatus) {
      altitude = 0;
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackgroundColor.style.backgroundColor = "green";
      shuttleHeight.innerHTML = altitude;
      rocketImg.style.bottom = "0px";
      fuelTank.innerHTML = "Empty - Refuel Needed";
    }
  });

  abortMissionButton.addEventListener("click", function () {
    let abortMissionConfirmation = confirm(
      "Confirm that you want to abort the mission."
    );
    alert("Mission aborted.");
    if (abortMissionConfirmation) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackgroundColor.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
      rocketImg.style.top = "240px";
      fuelTank.innerHTML = "80%";
    }
  });

  document.addEventListener("click", function (event) {
    console.log(event.target.id);
    if (event.target.id === "up") {
      altitude += 10000;
      shuttleHeight.innerHTML = altitude;
      rocketPositionX += 10;
      rocketImg.style.bottom = `${rocketPositionX}px`;
    } else if (event.target.id === "down") {
      altitude -= 10000;
      shuttleHeight.innerHTML = altitude;
      rocketPositionX -= 10;
      rocketImg.style.bottom = `${rocketPositionX}px`;
    } else if (event.target.id === "left") {
      shuttleHeight.innerHTML = altitude;
      rocketPositionY += 10;
      launchPosition = 98;
      rocketImg.style.left = `${launchPosition + rocketPositionY}px`;
      console.log(rocketPositionY);
    } else if (event.target.id === "right") {
      shuttleHeight.innerHTML = altitude;
      rocketPositionY -= 10;
      launchPosition = 98;
      rocketImg.style.left = `${launchPosition + rocketPositionY}px`;
      console.log(rocketPositionY);
    }
  });
});
