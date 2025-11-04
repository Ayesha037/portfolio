import React from 'react';
import Portfolio from './Portfolio';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('App runtime error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Something went wrong.</h1>
          <p style={{ marginTop: 8 }}>Please check the browser console and share the error; I will fix it.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  );
}


