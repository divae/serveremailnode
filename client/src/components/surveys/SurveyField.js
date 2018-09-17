//SurveyField contains logic to render a sngle 
//label and text input
import React from 'react';

export default ({input,label, meta:{error,touched}}) => {
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    );
};