import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class  extends Component {
    render() { 
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/news" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
 

export default App;