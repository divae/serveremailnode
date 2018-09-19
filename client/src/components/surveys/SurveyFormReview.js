//SurveyFormReiew shows user their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from 'components/surveys/formFields';

const SurveyFormReview = ({ onCancel,formValues}) => {

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
                onClick={onCancel}
            >
            Back
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps)(SurveyFormReview);