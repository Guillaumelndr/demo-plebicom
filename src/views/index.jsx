import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={React.lazy(() => import('./home'))} />
      </Switch>
    </Router>
  )
}

export default App
