import React from "react";
import Match from "./Match";

// make this scrollable
function MatchList(props) {
    // let matchList = this.props.matchList;

    return (
        <div className="matchList">
            <h3>MATCH LIST</h3>
            {props.matchList.map((match) => (
                <Match match={match} key={match.matchId}/>
            ))}
        </div>
    );
}
export default MatchList;