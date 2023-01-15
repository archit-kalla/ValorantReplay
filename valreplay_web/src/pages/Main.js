import React from "react";
import MatchList from "../components/MatchList";
// left column has a list of matches with a search bar
// right side has a list of maps

function Main() {
    

    return (
        <div className="main">
            <h1>MAIN</h1>
            <MatchList matchList={[{"map":"haven",
                                    "date":"today",
                                    "result":"loss", 
                                    "score":"1-13",
                                    "matchId":1234},
                                    {"map":"split",
                                    "date":"yesterday",
                                    "result":"loss", 
                                    "score":"9-13",
                                    "matchId":1254},
                                ]} />

        </div>
    );
}

export default Main;