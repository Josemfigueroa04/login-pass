import React from "react";

const Alert = ({ message, type }) => {
    return (
        <>
         <div className={`alert alert-${type} mt-2 text-center`} role="alert">
        {message}
        </div>
        </>
       
    );
    }

export default Alert;