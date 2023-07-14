// Write your code here
import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeamsAPIUrl()
  }

  getTeamsAPIUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const teamData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      imageUrl: eachData.team_image_url,
    }))

    this.setState({teamsData: teamData})
  }

  render() {
    const {teamsData} = this.state
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            className="image"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="dashboard">Dashboard</h1>
        </div>
        <ul className="teams-container">
          {teamsData.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
