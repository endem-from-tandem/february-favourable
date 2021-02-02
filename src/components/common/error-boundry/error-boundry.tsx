import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'

type ErrorBoundryState = {
  hasError: boolean
}

export default class ErrorBoundry extends Component<{}, ErrorBoundryState> {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}
