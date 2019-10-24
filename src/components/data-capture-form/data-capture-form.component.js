import React, { useState } from 'react';
import '../../styles/data-capture.scss';
import { useFormInput } from './use-form-input';


const DataCaptureForm = ({ emailLabel, checkboxLabel, pcLabel, guest, onSubmit }) => {

  const { value: email, bind: bindEmail, reset: resetEmail } = useFormInput(guest.email);
  const { value: postcode, bind: bindPostcode, reset: resetPostcode } = useFormInput(guest.postcode);
  const [optIn, setConsent] = useState(guest.optIn)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newGuestDetails = {
      name: guest.name,
      email: email || '',
      optIn: optIn || false,
      postcode: postcode || ''
    }
    onSubmit(newGuestDetails)
    resetEmail();
    resetPostcode();
  }


  return (
    <form className="c-data-capture" onSubmit={handleSubmit}>
      <h1 className="u-heading-1">Hello {guest.name}!</h1>
        <>
          <div className="c-data-capture-email" >
            <label className="u-default-label" htmlFor="email">{emailLabel || 'Email'}</label>
            <input className="u-default-input" type="email" name="email" placeholder="Please enter your email" {...bindEmail} />
          </div>
          <div className="c-data-capture-consent u-checkbox-container">
          
            <label className="u-default-label">{checkboxLabel || 'Tick this box if you consent to receive email with offers'}
              <input type="checkbox" className="u-checkbox" name="consent" checked={optIn ? 'checked' : ''} onChange={() => setConsent(!optIn)}/>
              <span className="u-checkmark"></span>
            </label>
          </div>
        </>

      <div className="c-data-capture-postcode" >
        <label className="u-default-label" htmlFor="postcode">{pcLabel || 'PostCode'}</label>
        <input className="u-default-input" type="text" name="postcode" placeholder="Please enter your postcode" {...bindPostcode} />
      </div>
      <button type="submit" className="u-default-button">Save</button>
    </form>
  )
};

export default DataCaptureForm;