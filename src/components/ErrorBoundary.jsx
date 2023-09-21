import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service (e.g., Sentry)
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong</h1>
          {/* You can add additional error information or a button to refresh the page */}
        </div>
      );
    }

    // If there's no error, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
