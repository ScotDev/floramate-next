import React from "react";
import { PillsContainer, PillItem } from "./UIComponents";
import { theme } from '@config/Theme';

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

    let statusPillBgColor;
    switch (status) {
        case "Common":
            statusPillBgColor = theme.secondaryColour;
            break;
        case "Locally_common":
            statusPillBgColor = theme.secondaryColourLight;
            break;
        case "Rare":
            statusPillBgColor = theme.trafficLightAmber;
            break;
        case "Very_rare":
            statusPillBgColor = theme.trafficLightRed;
            break;
        default:
            statusPillBgColor = theme.secondaryBlue;
            break;
    }

    let nativePillBgColor;
    switch (native) {
        case "Native":
            nativePillBgColor = theme.secondaryColour;
            break;
        case "Non_native":
            nativePillBgColor = theme.trafficLightAmber;
            break;
        case "Ancient_introduction":
            nativePillBgColor = theme.trafficLightAmber;
            break;
        case "Invasive":
            nativePillBgColor = theme.trafficLightRed;
            break;
        default:
            nativePillBgColor = theme.secondaryBlue;
            break;
    }



    return (
        <PillsContainer>
            {status &&
                <PillItem bgColor={statusPillBgColor}>
                    {displayStatus}
                </PillItem>}

            <PillItem bgColor={nativePillBgColor}>
                {displayNative}
            </PillItem>
        </PillsContainer>
    )
}
