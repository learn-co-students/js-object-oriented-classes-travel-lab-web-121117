class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

let eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(route) {
    let horizontalBlocks =
      eastWest.findIndex(element => {
        return this.beginningLocation.horizontal == element;
      }) -
      eastWest.findIndex(element => {
        return this.endingLocation.horizontal == element;
      });
    let verticalBlocks =
      this.beginningLocation.vertical - this.endingLocation.vertical;

    return Math.abs(horizontalBlocks) + Math.abs(verticalBlocks);
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
