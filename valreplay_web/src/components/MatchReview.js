import React from "react";

function MatchReview(props) {
    let matchId = props.match_selected;


    //send api call to get match data
    //display match data

    return (
        <div className="matchReview">
            <h3>MATCH REVIEW</h3>
            <p>Match ID: {matchId}</p>
        </div>
    );

}
export default MatchReview;