import React from 'react'

import { IoSunnyOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

// This components should be combined with the Water components

export default function Light({ level }) {

    let icons;

    if (level === "low") {
        icons = (<>
            <IoSunnySharp />
            <IoSunnyOutline />
            <IoSunnyOutline />
        </>)
    } else if (level === "med") {
        icons = (<>
            <IoSunnySharp />
            <IoSunnySharp />
            <IoSunnyOutline />
        </>)
    } else {
        icons = (<>
            <IoSunnySharp />
            <IoSunnySharp />
            <IoSunnySharp />
        </>)
    }

    // Maybe better to map these out, but would require change in CMS

    return (
        <>
            <p>{icons}</p>
            {/* {item.light_requirements === "low" }

    {item.light_requirements.map((i) => {
        if (i === "low") {
            return <>{<IoSunnySharp />}</>;
        } else {
            return <>{<IoSunnyOutline />}</>;
        }
    })} */}
        </>
    )
}


