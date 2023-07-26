import React from 'react'

import './Typography.style.css';

type TypographyProps = {
    value: string;
    className?: string;
}

export const Typography = ({value: string,  className} : TypographyProps) => {
    return(
        <span className={className}>{value}</span>
    )
}
