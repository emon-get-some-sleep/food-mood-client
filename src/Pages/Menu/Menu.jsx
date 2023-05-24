import {Helmet } from 'react-helmet-async';
import Cover from '../Home/Home/Shared/Cover/Cover';

import menuImg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Food Client</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
            <Cover title="Our Menu" img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
            <Cover title="Our Menu" img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;