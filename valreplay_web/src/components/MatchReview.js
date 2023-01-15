import React from "react";

class MatchReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: {
                "map": "haven",
                "date": "today",
                "result": "loss",
                "score": "1-13",
                "matchId": 1234
            }
        };
    }

    render() {
        return (
            <div className="matchReview">
                <h3>MATCH REVIEW</h3>
                <p>Map: {this.state.match.map}</p>
                <p>Date: {this.state.match.date}</p>
                <p>Result: {this.state.match.result}</p>
                <p>Score: {this.state.match.score}</p>
            </div>
        );
    }
}