const breakpoint = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const device = {
    mobileS: `(max-width: ${breakpoint.mobileS})`,
    mobileM: `(max-width: ${breakpoint.mobileM})`,
    mobileL: `(max-width: ${breakpoint.mobileL})`,
    tablet: `(max-width: ${breakpoint.tablet})`,
    laptop: `(max-width: ${breakpoint.laptop})`,
    laptopL: `(max-width: ${breakpoint.laptopL})`,
    desktop: `(max-width: ${breakpoint.desktop})`,
    desktopL: `(min-width: ${breakpoint.desktop})`
};

export { device };