import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="d-flex align-items-center justify-content-center min-vh-100 p-4 text-center"
          style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}
        >
          <div className="glass-card p-5 rounded-4 max-w-md shadow-2xl border border-slate-700">
            <div className="text-emerald-400 mb-3" style={{ fontSize: '2.5rem' }}>⚠️</div>
            <h2 className="h4 fw-bold mb-2">Something went wrong</h2>
            <p className="text-slate-300 small mb-4">
              An unexpected unexpected error occurred. Don't worry, your data is safe.
            </p>
            <button 
              onClick={this.handleReload}
              className="btn rounded-pill px-4 py-2 fw-semibold"
              style={{ backgroundColor: '#2a7f7d', color: '#ffffff', border: 'none' }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
