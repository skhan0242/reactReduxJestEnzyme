import React from "react";
import Header from "./index";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {findByTestAttr} from "./../../../utils"

Enzyme.configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
})

const setup = (props ={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header component', () =>{
    let component;
    beforeEach(() =>{
        component = setup();
    })
    it('should render without error', () =>{
        const wrapper = findByTestAttr(component, 'headerWrapper');
        expect(wrapper.length).toBe(1);
    })
    it('should render a logo', () =>{
        const logo = findByTestAttr(component, 'logo');
        expect(logo.length).toBe(1);
    })
})