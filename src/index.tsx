import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import ErrorBoundry from './components/common/error-boundry'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
