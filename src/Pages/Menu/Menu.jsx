import {Helmet } from 'react-helmet-async';
import Cover from '../Home/Home/Shared/Cover/Cover';

import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';

import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import drinksImg from '../../assets/menu/menu-bg.png';

import useMenu from '../../hooks/useMenu';
import SectionTitle from "../../../src/components/SectionTitle/SectionTitle";
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Menu | Food Client</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
            { /* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>

            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>

            {/* pizza menu items  */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

            {/* Salad menu items  */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

            {/* Soup menu items  */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

            {/* Drinks menu items  */}
            <MenuCategory items={drinks} title="drinks" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;