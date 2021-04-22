import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = props=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='food'/>
            </div>
        </Fragment>
    )
};

export default Header;