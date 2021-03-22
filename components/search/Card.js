import React from "react";
import Link from 'next/link';
import { ResultsCard, InnerCardGrid } from "./SearchUIComponents";

import { GiPlantRoots } from "react-icons/gi";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { IoIosSnow } from "react-icons/io";
import { RiPlantLine } from "react-icons/ri";



import Light from "../mini-components/Light";
import Water from "../mini-components/Water";


export default function Card(props) {
  const data = props.data;

  return (
    <Link href={`/species/${data.id}`}>
      <ResultsCard whileHover={{ type: 'spring', scale: 1.06, opacity: 0.75, transition: { duration: .1, bounce: 1, mass: 0.1, damping: 300, stiffness: 300, velocity: 5 } }}  >
        {/* use next image */}
        <img loading="lazy" src={data.image_url} alt="" />
        <h4>{data.common_name}</h4>
        <div id="divider"></div>
        <h5>{data.latin_name}</h5>
        <InnerCardGrid>
          <div>
            <GiPlantRoots />
            <p>{data.type}</p>
          </div>
          <div>
            <AiOutlineVerticalAlignTop />
            <p>{data.max_height}m</p>
          </div>
          <div>
            <Light level={data.light_requirements} />
          </div>
          <div>
            <IoIosSnow />
            <p>{data.hardiness}</p>
          </div>
          <div>
            <div>
              <Water level={data.water_requirements} />
            </div>
          </div>
          <div>
            <RiPlantLine />
            <p>{data.difficulty}</p>
          </div>
        </InnerCardGrid>
      </ResultsCard>
    </Link>

  );

}
