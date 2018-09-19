//SurveyFormReiew shows user their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from 'components/surveys/formFields';
import { withRouter } from 'react-router-dom';
import * as actions from 'actions/index.js'

const SurveyFormReview = ({ onCancel,formValues, submitSurvey, history}) => {

    const reviewFields = _.map(formFields,({label,name}) =>{
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button 
                className="yellow darkeen-3 btn-flat" 
                onClick={onCancel} >
                Back
            </button>
            <button className="green darken-3 btn-flat right white-text"
                onClick={() => submitSurvey(formValues,history)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));