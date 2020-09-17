import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClickHandler,
    buttonStyle,
    buttonSize
}) => {

    const usedButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const usedButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='sign-up' className='btn-mobile'>
            <button className={`btn ${usedButtonStyle} ${usedButtonSize}`}
             onClick={onClickHandler}
             type={type}
            >
                {children}
            </button>
        </Link>
    );
}