from fastapi import FastAPI
import json

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/matchlist/{username}")
async def matchlist(username: str):
    retval = json.dumps([{"map":"haven",
            "date":"today",
            "result":"loss", 
            "score":"1-13",
            "matchId":1234},
            {"map":"split",
            "date":"yesterday",
            "result":"loss", 
            "score":"9-13",
            "matchId":14}
            ])
    return { retval }

