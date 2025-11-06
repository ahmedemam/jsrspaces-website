import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Track error in analytics (if available)
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        import('../utils/analytics').then(({ trackError }) => {
          trackError(error, errorInfo.componentStack);
        });
      } catch (e) {
        // Analytics not available, continue
      }
    }

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <Card className="max-w-2xl w-full border-red-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-red-100 p-4">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 mb-6">
                We're sorry for the inconvenience. An unexpected error has occurred.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Error Details (Development Only):
                  </p>
                  <p className="text-xs text-red-700 font-mono break-all">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs text-red-700 cursor-pointer">
                        Stack Trace
                      </summary>
                      <pre className="text-xs text-red-600 mt-2 overflow-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={this.handleReset}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button
                  onClick={this.handleGoHome}
                  className="bg-[#00009f] hover:bg-[#000080] text-white flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                If the problem persists, please{' '}
                <a
                  href="#contact"
                  className="text-[#00009f] hover:underline"
                  onClick={() => window.location.href = '#contact'}
                >
                  contact us
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

