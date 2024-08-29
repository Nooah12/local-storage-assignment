const breakpoints = {
    mobile: "375px",
    tablet: "767px",
    desktop: "1240px"
}

const screens = {
    sm: `(min-width : ${breakpoints.mobile})`,
    md: `(min-width : ${breakpoints.tablet})`,
    lg: `(min-witdh : ${breakpoints.desktop})`
}

export default screens;