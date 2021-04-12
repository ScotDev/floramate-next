import React from 'react';

import { FlexBox, FlexBoxItem } from '../styled-components/Utils';
import { LargeText, RegularText } from '../styled-components/Text';

const parentVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.22,
        }
    },
    hidden: {
        opacity: 0
    }
}

const childrenVariants = {
    visible: {
        opacity: 1
    },
    hidden: { opacity: 0 },
    hover: { scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }
}

export default function Info({ color }) {
    return (
        <FlexBox initial="hidden" animate="visible" variants={parentVariants}>
            <FlexBoxItem variants={childrenVariants} >
                <LargeText color={color} textAlign={"center"}>
                    Native trees
        </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </RegularText>
            </FlexBoxItem>
            <FlexBoxItem variants={childrenVariants}>
                <LargeText color={color} textAlign={"center"}>
                    Wildflowers
        </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </RegularText>
            </FlexBoxItem>
            <FlexBoxItem variants={childrenVariants}>
                <LargeText color={color} textAlign={"center"}>
                    Introduced plants
            </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </RegularText>
            </FlexBoxItem>
        </FlexBox>
    )
}
