import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu, Button} from "antd";
import 'antd/dist/antd.css';
import './navigation.css';
import Logo from './logo.png';
const NavigationWrapper = () => (
    <div>
       <Navigation/>
    </div>
);

const Navigation = () => (
    <Menu mode={"horizontal"} theme={"dark"}>
         <Menu.Item>
             <Link to={ROUTES.LANDING}><img alt = "the logo of this site. This is the logo of Ismail Hozain, circa 2018, a black dragon surrounding his initials I and H" src={Logo}/></Link>
         </Menu.Item>
        <Menu.Item> {/*TODO ALIGN RIGHT THIS*/}
            <Button type={"primary"}><Link to={ROUTES.LANDING/*TODO MAKE MY OWN WEBSITE BEFORE LAUNCH*/}>Made by Ismail Hozain</Link></Button>
        </Menu.Item>
    </Menu>
);
export default NavigationWrapper;
