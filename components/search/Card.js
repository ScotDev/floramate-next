import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ResultsCard, InnerCardGrid } from "./SearchUIComponents";
import Light from "../mini-components/Light";
import Water from "../mini-components/Water";

import { GiPlantRoots } from "react-icons/gi";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { IoIosSnow } from "react-icons/io";
import { RiPlantLine } from "react-icons/ri";

import { theme } from '../../config/Theme';

export default function Card(props) {
  const data = props.data;

  let accentBgColor;
  // switch (data.native) {
  //   case "Native":
  //     accentBgColor = theme.secondaryColour;
  //     break;
  //   case "Non_native":
  //     accentBgColor = theme.trafficLightAmber;
  //     break;
  //   case "Ancient_introduction":
  //     accentBgColor = theme.trafficLightAmber;
  //     break;
  //   case "Invasive":
  //     accentBgColor = theme.trafficLightRed;
  //     break;
  //   default:
  //     accentBgColor = theme.secondaryBlue;
  //     break;
  // }

  return (
    <Link href={`/species/${data.id}`}>
      <ResultsCard whileHover={{ type: 'spring', scale: 1.03, opacity: 0.75, transition: { duration: .1, mass: 0.1, stiffness: 50 } }} bgColor={accentBgColor}>
        {/* <img loading="lazy" src={data.profile_images[0].formats.medium.url} alt="" /> */}
        <Image src={data.profile_images[0].formats.medium.url} alt={data.profile_images[0].alternativeText} width={340} height={225} quality={100} />
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
