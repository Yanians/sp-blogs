import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You can log this to a reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          { process.env.NODE_ENV !== 'development' && (
              <pre style={{ whiteSpace: 'pre-wrap', color: 'green', border:'1px dashed grey',padding:1,}}>
                {this.state.error?.stack}
              </pre> )
          }
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
