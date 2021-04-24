import React from 'react'

import { IoWaterOutline } from "react-icons/io5";
import { IoWaterSharp } from "react-icons/io5";

export default function Water({ level }) {

    let icons;

    if (level === "low") {
        icons = (<>
            <IoWaterSharp />
            <IoWaterOutline />
            <IoWaterOutline />
        </>)
    } else if (level === "med") {
        icons = (<>
            <IoWaterSharp />
            <IoWaterSharp />
            <IoWaterOutline />
        </>)
    } else {
        icons = (<>
            <IoWaterSharp />
            <IoWaterSharp />
            <IoWaterSharp />
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


