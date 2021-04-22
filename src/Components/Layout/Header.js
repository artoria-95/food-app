import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
const Header = props=>{
    return (
        <Fragment>
            <header>
                <h1>React meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage}/>
            </div>
        </Fragment>
    )
}