import React from 'react';

import { CreditSection } from '../styled-components/Utils'

export default function Credits() {
    return (
        <CreditSection>
            <a href="https://www.scotdev.uk" rel="noopener noreferrer" target="_blank"
            >Created by ScotDev <i className="fab fa-github"></i></a>
        </CreditSection>
    )
}
