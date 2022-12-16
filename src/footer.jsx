import React from "react";
import Alert from 'react-bootstrap/Alert';

const footer = () => {
    return (
        <>
        <div className="pie">
            <hr></hr>
        {[
          'secondary',
        
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
           Todos los Derechos Reservados ®
          </Alert>
        ))}
        </div>
      </>
    );
};
export default footer;
