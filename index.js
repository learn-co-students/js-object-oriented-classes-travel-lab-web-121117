class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = [
      '1st Avenue', '2nd Avenue', '3rd Avenue',
      'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'
    ]
    let streets = 0;
    let avenues = 0;

    if(this.beginningLocation.vertical > this.endingLocation.vertical){
      streets = this.beginningLocation.vertical - this.endingLocation.vertical
    } else {
      streets = this.endingLocation.vertical - this.beginningLocation.vertical
    }

    if(eastWest.indexOf(this.beginningLocation.horizontal) > eastWest.indexOf(this.endingLocation.horizontal)){
      avenues = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
    } else {
      avenues = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    }

    return streets + avenues
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
