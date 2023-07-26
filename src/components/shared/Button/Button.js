import React from 'react';
import cn from 'classnames';

import './Button.styles.css';

type ButtonProps = {
    value: string;
    appearance?: string;
    size?: string;
    onClick: any;
    className?: string;
}


export const Button = ({value, appearance="default", size="md", onClick, className} : ButtonProps) => {
    
    return(
        <button className={cn({
            'default' : appearance === 'default',
            'green' : appearance === 'green',
            'blue' : appearance === 'blue',
        },{
            'sm' : size === 'sm',
            'md' : size === 'md',
            'lg' : size === 'lg',
        }, className)} onClick={onClick}>{value}</button>
    )
}