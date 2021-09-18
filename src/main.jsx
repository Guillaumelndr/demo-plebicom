import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from 'views'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback='...loading'>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)