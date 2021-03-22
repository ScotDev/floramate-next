import React from "react";
import { PillsContainer, PillItem } from "./UIComponents";

export default function Pill({ status, native }) {

    // Process data with underscores (maybe regex, or simple if)

    let displayStatus = status;

    if (displayStatus === "Locally_common") {
        displayStatus = "Locally common"
    } else if (displayStatus === "Very_rare") {
        displayStatus = "Very rare"
    }


    let displayNative = native;

    if (displayNative === "Non_native") {
        displayNative = "Non native"
    } else if (displayNative === "Ancient_introduction") {
        displayNative = "Ancient introduction"
    }

    return (
        <PillsContainer>
            {status &&
                <PillItem native>
                    {displayStatus}
                </PillItem>}

            <PillItem bgColor={"#000"}>
                {displayNative}
            </PillItem>
        </PillsContainer>
    )
}
