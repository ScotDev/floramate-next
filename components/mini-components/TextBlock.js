import React from "react";
import Link from 'next/link'
import { TextBlockItem } from '../styled-components/Utils';

export default function TextBlock(props) {

    const data = props.data;

    return (
        <>
            <TextBlockItem>
                <h3>Description</h3>
                <p>{data.description}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Ecology</h3>
                <p>{data.ecology}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Distribution</h3>
                <p>{data.distribution}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Cultivation</h3>
                <p>{data.cultivation}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Propagation</h3>
                <p>{data.propagation}</p>
            </TextBlockItem>

            <TextBlockItem>
                <h3>Similar species</h3>
                <ul>
                    <li>
                        <Link href="/">Downy birch (Betula pubescens)</Link>
                    </li>
                    <li>
                        <Link href="/">Aspen (Populus tremula)</Link>
                    </li>
                </ul>
            </TextBlockItem>
        </>
    );
}
