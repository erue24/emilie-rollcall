import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Session = ({ sessions }) => {
    const navigate = useNavigate();

    const parameters = useParams();
    const sessionIDParamAsString = parameters.sid;

    // when you get the ID back, it's returned as a string. We need to convert it to a number:
    const sessionIDParam = Number(sessionIDParamAsString);

    // Now, we're going through the sessions to find the one that has the ID that we need. All JS arrays have a FIND function. Store it in a const after
    const selectedSession = sessions.find((item) => (item.id === sessionIDParam));

    return (
        <>
            <h3>{selectedSession.name}</h3>
        </>
    )
}

export default Session
