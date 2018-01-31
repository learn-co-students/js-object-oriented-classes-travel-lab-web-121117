
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date (startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled () {
    let travelled = 0;
     travelled +=  Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
     let beginningPoint = eastWest.indexOf(this.beginningLocation.horizontal);
     let endingPoint = eastWest.indexOf(this.endingLocation.horizontal);
     travelled += Math.abs(endingPoint - beginningPoint);
     return travelled;
  };

  estimatedTime (peak) {
    if(peak) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    };
  };
}
