// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatches} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatches

    return (
      <div className="latest-match-container">
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img alt={competingTeam} src={competingTeamLogo} />
        <div>
          <p>
            First Innings <br />
            {firstInnings}
          </p>
          <p>
            Second Innings <br />
            {secondInnings}
          </p>
          <p>
            Man Of The Match <br />
            {manOfTheMatch}
          </p>
          <p>
            Umpires <br />
            {umpires}
          </p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
