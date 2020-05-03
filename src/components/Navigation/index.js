import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu} from "antd";
import 'antd/dist/antd.css';
import './navigation.css';
const NavigationWrapper = () => (
    <div>
       <Navigation/>
    </div>
);

const Navigation = () => (
    <Menu mode={"horizontal"}>
         <Menu.Item>
        </Menu.Item>
    </Menu>
);
export default NavigationWrapper;
