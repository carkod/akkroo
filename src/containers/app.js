
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getAttendeesRequestAction, addAttendeesToEventAction } from '../actions/attendees';
import Branding from '../components/branding/branding.component';
import AttendeeList from '../components/attendee-list/attendee-list.component';

import '../styles/app.scss';
import DataCaptureForm from '../components/data-capture-form/data-capture-form.component';
import Thanks from '../components/thanks/thanks.component';

const brandingUrl = 'https://global-uploads.webflow.com/5c2d9d75465264a6fc1aaf10/5d4066e0ba00e6189fc5e9a5_Integrate-landscape-white-2.svg';
const thanksText = 'We appreciate you taking the time to fill up the form.';

const App = ({
  getAttendeesRequestAction,
  guestList,
  isLoading,
  isError
}) => {

const [displayGuestList, setDisplayGuestList] = useState(true);
const [displayCaptureData, setDisplayCaptureData] = useState(false);
const [displayThanks, setDisplayThanks] = useState(false);
const [selectedGuest, setSelectedGuest] = useState({});

const submitData = (newGuestDetails) => {
  if (newGuestDetails.optIn) {
    dispatchEmail(newGuestDetails)
  }

  // TASK: Show saved details
  // PUT request here
  console.group()
  console.log('PUT::', newGuestDetails);
  console.groupEnd();

  // Static page navigation (routing)
  setDisplayThanks(true);
  setDisplayGuestList(false);
  setDisplayCaptureData(false);
  setTimeout(() => {
    setDisplayThanks(false);
    setDisplayGuestList(true);
  }, 3000)
}

const dispatchEmail = ({name}) => {
  const templateVars = {
    name: name
  }
  window.AkkrooAPI.sendEmail(name, 'Marketing-offers', templateVars)
}


return (
  <div>
    <Branding url={brandingUrl}/>
    <div className="u-content-wrapper">
    { displayGuestList && <AttendeeList 
    getAttendees={getAttendeesRequestAction}
    guestList={guestList}
    guestDetails={(guest) => { setSelectedGuest(guest); setDisplayCaptureData(true)}}
    isLoading={isLoading}
    isError={isError}
    onClick={() => {setDisplayGuestList(false)}}
  />
    }
  { displayCaptureData && <DataCaptureForm 
    guest={selectedGuest}
    onSubmit={submitData}
    />
  }
    { displayThanks && <Thanks text={thanksText} />}
  </div>
  </div>
);
}


const mapStateToProps = (state) => {
const { guestList, isLoading, isError } = state.attendeesListReducer;
  return  {
    guestList: guestList,
    isLoading: isLoading,
    isError: isError,
  }
}

const mapDispatch = {
  getAttendeesRequestAction,
  addAttendeesToEventAction,
};

export default connect(mapStateToProps, mapDispatch)(App);
