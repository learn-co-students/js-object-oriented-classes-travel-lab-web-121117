class Driver {
  constructor(name, joinDate){
    this.name = name
    this.joinDate = joinDate
    this.startDate = new Date(this.joinDate)
    }

  yearsExperienceFromBeginningOf(year){
    const beginningYear = this.startDate.getFullYear()
    return year - beginningYear
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    const eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const nsBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const ewBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return nsBlocks + ewBlocks
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    } else{
      return this.blocksTravelled() / 3
    }
  }
}
