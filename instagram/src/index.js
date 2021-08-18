import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UploadImage from './components/Upload';
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/Upload' component={UploadImage}/>

            </Switch>
        
        </Router>
    </React.StrictMode>,document.getElementById('root')
    //<App />, document.getElementById("root")

);

//reportWebVitals();

//serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

