import React from 'react';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid, ProfileImageContainer } from './ProfileUIComponents.js';

import ProfileImage from './ProfileImage';

import TextBlock from "../mini-components/TextBlock";
import Pill from "../mini-components/Pill";


export default function Profile({ data }) {

    return (
        <>
            {data && <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    <ProfileImageContainer>
                        <ProfileImage alt={`${data.common_name} profile`}
                            thumb={data.profile_images[0].formats.thumbnail.url}
                            src={data.profile_images[0].url} />
                    </ProfileImageContainer>
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>}
        </>
    )
}
