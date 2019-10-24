import React, { Fragment, useEffect } from 'react';
import '../../styles/guest-list.scss';
import ErrorMessage from '../error/error.component';
import GuestCard from '../guest-card/guest-card.component';
import Loader from '../loader/loader.component';


const AttendeesList = ({
  guestList, 
  getAttendees,
  isLoading,
  isError,
  guestDetails,
  onClick,
}) => {

  // ComponentDidMount
  useEffect(()  => { getAttendees() }, [getAttendees]);

  return (
    <Fragment>
      {isLoading && <Loader text="Loading Attendees"/>}
      {isError && <ErrorMessage text="Error Loading Attendees"/>}
      {!isLoading && !isError && (
        <ul className="c-attendee-list">
          {guestList.map((guest, index) => (
            <li key={index}>
            <GuestCard 
            name={guest.name}
            email={guest.email}
            handleClick={() => {guestDetails(guest); onClick()}}
            /></li>
          ))}
      </ul>
      )}
    </Fragment>
  );
};

export default AttendeesList;