import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
  }
}

export default App;
