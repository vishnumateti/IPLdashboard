import './App.css'
import {Route} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
  </div>
)

export default App
