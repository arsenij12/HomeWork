import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
  return (
    <div className="home-container">
        <a href='/' className="link-button">Home</a>
        <div className="personal-info">
            <p>Name: Arseniy</p>
            <p>Surname: Iskakov</p>
            <p>Date of Birth: 29.07.2005</p>
            <p>Phone Number: 87479838099</p>
            <p>Email: arseny.iskakov@gmail.com</p>
        </div>
    </div>
  );
}

export default EmailForm;