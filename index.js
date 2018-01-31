class Driver {
  constructor(name, hireDate) {
    this.name = name;
    this.startDate = new Date(hireDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];
    let hori =
      eastWest.indexOf(this.endingLocation.horizontal) -
      eastWest.indexOf(this.beginningLocation.horizontal);
    let vert = this.endingLocation.vertical - this.beginningLocation.vertical;
    return vert + hori;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
