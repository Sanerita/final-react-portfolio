import React, { Component } from 'react';
import { theme } from '../theme';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  handleReload = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="d-flex align-items-center justify-content-center min-vh-100 p-4"
          style={{ background: theme.colors.bg, color: theme.colors.text }}
        >
          <div
            className="p-5 rounded-3 text-center"
            style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}`, maxWidth: '420px' }}
          >
            <div className="font-mono mb-2" style={{ fontSize: '0.72rem', color: theme.colors.primary, letterSpacing: '0.08em' }}>
              // error
            </div>
            <h2 className="mb-2" style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff' }}>
              Something went wrong
            </h2>
            <p style={{ fontSize: '0.85rem', color: theme.colors.textMuted, marginBottom: '1.5rem' }}>
              An unexpected error occurred. Your data is safe.
            </p>
            <button onClick={this.handleReload} className="btn-accent">
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;