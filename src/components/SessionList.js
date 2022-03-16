import React from 'react'

// Unpack the prop. This component is passed a prop called sessions. Sessions is your array
const SessionList = ({ sessions }) => {
    return (

        /* You can only return one parent. The parent can have many children. You can do this by putting everything into a div or using a fragment */
        <>
            <h3>Rollcalls</h3>
            <ul>
                {/* You need curly brackets to go back into JS mode */}
                {sessions.map((sessionItemInArray) => (
                    // Each list item must have a key. Each key has to have a unique identifier
                    <li key={sessionItemInArray.id}>
                        {sessionItemInArray.name}, {sessionItemInArray.date}
                    </li>

                ))}
            </ul>
        </>
    )
}

export default SessionList
