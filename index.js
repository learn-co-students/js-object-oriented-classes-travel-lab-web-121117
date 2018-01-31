class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  // startDate(startDate) {
  //   this.startDate = Date.parse(this.startDate);
  // }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = { ...beginningLocation };
    this.endingLocation = { ...endingLocation };
  }

  blocksTravelled() {
    const eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];

    const hBeginningIndex = eastWest.findIndex(
      streetB => streetB === this.beginningLocation.horizontal
    );

    const hEndIndex = eastWest.findIndex(
      streetE => streetE === this.endingLocation.horizontal
    );

    const horizontalTraveled = hEndIndex - hBeginningIndex;
    const verticalTraveled =
      parseInt(this.endingLocation.vertical) -
      parseInt(this.beginningLocation.vertical);

    return horizontalTraveled + verticalTraveled;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
