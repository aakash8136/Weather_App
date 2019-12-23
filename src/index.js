import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spinner from './Spinner';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>error : {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            //return <div>latitude : {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner  />;
        //return <div>loading!</div>;
    }


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        // if(this.state.errorMessage && !this.state.lat)
        // {
        // return <div>error : {this.state.errorMessage}</div>;
        // }

        // if(!this.state.errorMessage && this.state.lat)
        // {
        // //return <div>latitude : {this.state.lat}</div>;
        // return <SeasonDisplay lat={this.state.lat} />;
        // }

        // return <Spinner message="please accept location request "/>;
        // //return <div>loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
