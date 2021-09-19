import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from 'components/layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={React.lazy(() => import('./home'))} />
          <Route exact path='/bikes' component={React.lazy(() => import('./product-grid'))} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
