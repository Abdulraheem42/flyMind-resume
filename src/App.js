import React from 'react';
import ResumeForm from "./sign-up-form/ResumeForm";
import '../src/App.css';
import SignUpPage from "./components/home-page/SignUpPage";
import SignInPage from "./components/home-page/SignInPage.js";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">

        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={SignUpPage} />
                    <Route path="/resume" component={ResumeForm} />
                    <Route path="/sign-in" component={SignInPage}/>

                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
