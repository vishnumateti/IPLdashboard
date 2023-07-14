// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: []}

  componentDidMount() {
    this.getTeamMatchesApiUrl()
  }

  getTeamMatchesApiUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const filteredData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        venue: data.latest_match_details.venue,
        umpires: data.latest_match_details.umpires,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamMatches: filteredData})
  }

  render() {
    const {teamMatches} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatches

    return (
      <div className="bg-container">
        <div>
          <img alt="team banner" src={teamBannerUrl} />
        </div>
        <p>Latest Matches</p>
        <LatestMatch latestMatches={latestMatchDetails} />
      </div>
    )
  }
}
export default TeamMatches
