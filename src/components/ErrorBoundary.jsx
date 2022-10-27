import {Component} from "react"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
   
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      const {error} = this.state
      const {resetFunction, FallbackComponent, resetButton} = this.props
      return (
        
          
          <FallbackComponent {...{error, resetFunction, resetButton}} />
        
      );
    }
   
    return this.props.children;
  }  
}