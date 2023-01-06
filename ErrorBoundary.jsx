import { Component } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if(this.state.hasError){
            return (
                <h2>There was an error here. <Link to="/">Click to return to home page.</Link></h2>
            
            );
        }

        return this.props.children;
    }
}

function DetailsErrorBoundary(props){
    return (
        <ErrorBoundary>
            <Details {...props}/>
        </ErrorBoundary>
    )
}

export default DetailsErrorBoundary;