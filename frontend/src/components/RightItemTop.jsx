import React from "react";
import Clock from "./Clock";
import BeatContainer from "./BeatAnimationContainer";
import RunningText from "./RunningText";
import SpotifyContainer from "./SpotifyContainer";
import StatusLife from "./StatusLife";

function RightItemTop() {
    return (
        <div className="flex flex-col gap-2 w-3/4 items-start">
            <Clock />
            <div className="w-full flex pdl:w-[345px] tdn:w-[277px] ttl:w-[332px] flex-row borderx rounded-lg">
                <BeatContainer />
                <StatusLife />
            </div>
            <RunningText />
            <SpotifyContainer />
        </div>
    )
}

export default RightItemTop;