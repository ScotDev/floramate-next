import React from 'react';

import Image from 'next/image';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid, ProfileImageContainer } from './ProfileUIComponents.js';

// import Spinner from '../utils/Spinner';

// import ProfileImage from './ProfileImage';

import TextBlock from "../mini-components/TextBlock";
import Pill from "../mini-components/Pill";


export default function Profile({ data }) {

    // const id = props.match.params.id

    // const getData = useAPI(`${APIurl}/profiles/${id}`)

    // if (getData.isLoading) {
    //     return <Spinner />
    // }

    // const data = getData.data;

    return (
        <>
            {/* <Navbar bgColor={"#2f3e46"} padding={"10vw"} /> */}
            {data && <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    <ProfileImageContainer>
                        <Image height={"100%"} width={"100%"} src={data.image_url} />
                        {/* <ProfileImage alt={`${data.common_name} profile`} */}
                        {/* //  thumb={data.image_url}  */}
                        {/* // src={data.image_url} /> */}
                    </ProfileImageContainer>
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>}
        </>
    )
}
