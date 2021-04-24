import React from 'react';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid, ProfileImageContainer } from './ProfileUIComponents.js';

import ProfileImage from './ProfileImage';

import TextBlock from "@utils/TextBlock";
import Pill from "@utils/Pill";

import ImageSlider from "@utils/ImageSlider";


export default function Profile({ data }) {

    return (
        <>
            {data && <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    <ProfileImageContainer>
                        <ImageSlider data={data.profile_images}></ImageSlider>
                        {/*   <ProfileImage alt={`${data.common_name} profile`}
                            thumb={data.profile_images[0].formats.thumbnail.url}
                            src={data.profile_images[0].url} /> */}
                    </ProfileImageContainer>
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>}
        </>
    )
}
