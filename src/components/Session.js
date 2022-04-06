import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Session = ({ sessions, changeName }) => {
    // useNavigate allows you to navigate between different components 
    const navigate = useNavigate();

    const parameters = useParams();
    const sessionIDParamAsString = parameters.sid;

    // when you get the ID back, it's returned as a string. We need to convert it to a number:
    const sessionIDParam = Number(sessionIDParamAsString);

    // Now, we're going through the sessions to find the one that has the ID that we need. All JS arrays have a FIND function. Store it in a const after
    const selectedSession = sessions.find((item) => (item.id === sessionIDParam));

    const [theSession, setTheSession] = useState(selectedSession);

    const handleNamechange = (browserEvent) => {
        console.log(browserEvent);
        setTheSession({ ...theSession, name: browserEvent.target.value });
        changeName(theSession.id, theSession.name);
    }

    const handleBackButton = () => (
        navigate(-1)
    )

    return (
        <>
            <form method="POST" onSubmit={() => console.log("form submitted")}>
                <h3>{theSession.name}</h3>
                <input type="text" value={theSession.name} onChange={handleNamechange} />
                <p>Date: {selectedSession.date} | Start Time: {selectedSession.sTime} | End Time: {selectedSession.eTime} </p>
                <ul className="studentList">
                    {/* call each thing student, map it to a list item. each li needs a unique key */}
                    {selectedSession.rollcall.map((student) => (
                        <li key={student.id}>
                            <input type="checkbox" defaultChecked={student.present} />
                            {student.fName}
                        </li>
                    ))}
                </ul>
            </form>

            {/* navigate(-1) means go back up one page */}
            {/*ONE WAY TO WRITE IT: <button onClick={() => (navigate(-1))}>Back</button> */}

            <button onClick={handleBackButton}>Back</button>
        </>
    )
}

export default Session
