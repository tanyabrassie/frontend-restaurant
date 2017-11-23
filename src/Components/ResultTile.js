import React from 'react';

function ResultTile ({ item }) {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.address}</p>
            <strong>Grade: {item.grade}, Score: {item.score}</strong>
            <ul>
            {item.violationList.map((violation) => {
                return (
                    <li><strong>{violation.date}</strong> {violation.description}</li>
                )
            })}
            </ul>
        </div>    
    );
};

export default ResultTile;