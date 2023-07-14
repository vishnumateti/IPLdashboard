// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, imageUrl} = teamDetails

    return (
      <li className="list-container">
        <Link className="team-container" to={`/team-matches/${id}`}>
          <img className="logo" alt={`${name}`} src={imageUrl} />
          <p className="team-names">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
