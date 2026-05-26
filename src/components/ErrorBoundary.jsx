import React, {
  Component,
} from "react";
import '../commonStyles/errorBoundary.css';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,

      error: null,
    };
  }

  // ======================
  // UPDATE ERROR STATE
  // ======================

  static getDerivedStateFromError(
    error
  ) {

    return {
      hasError: true,

      error,
    };
  }

  // ======================
  // LOG ERROR
  // ======================

  componentDidCatch(
    error,
    errorInfo
  ) {

    console.error(
      "Error Boundary:",
      error,
      errorInfo
    );
  }

  // ======================
  // RESET HANDLER
  // ======================

  handleReload = () => {

    this.setState({
      hasError: false,

      error: null,
    });
  };

  // ======================
  // RENDER
  // ======================

  render() {

    if (
      this.state.hasError
    ) {

      return (
        <div className="error-boundary">

          <h2>
            Something went wrong
          </h2>

          <p>
            Please try again.
          </p>

          <button
            onClick={
              this.handleReload
            }
          >
            Retry
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;