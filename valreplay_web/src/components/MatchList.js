import React from "react";
import Match from "./Match";

// make this scrollable
// call api to get matchlist for uuid
function MatchList(props) {
    // let matchList = this.props.matchList;
    let currOpen = 0;
    const onClickHandler = (matchId) => {
        currOpen = matchId;
        props.currentMatch(currOpen);
    }
    const eachMatch = props.matchList.map((match) => (
        <Match match={match} key={match.matchId} onClick={onClickHandler}/>
    ));


    return (
        <div className="matchList">
            <h3>MATCH LIST</h3>
            {eachMatch}
        </div>
    );
}
export default MatchList;