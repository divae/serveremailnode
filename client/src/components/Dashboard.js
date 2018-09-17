import React from 'react';
import {Link} from 'react-router-dom';
import SurveyNew from 'components/surveys/SurveyNew';

const Dashboard = () => {
    return(
        <div>
            <div className="fixed-action-btn">
                <Link to="/surveys/news" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>              
            </div>
        </div>
    );
};

export default Dashboard;