import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from 'components/layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={React.lazy(() => import('./home'))} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
