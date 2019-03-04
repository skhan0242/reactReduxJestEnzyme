import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Headline from "./index"
import {findByTestAttr, checkProps } from "./../../../utils/index"

Enzyme.configure({
    adapter: new Adapter()
})

const setUp = (props={}) =>{
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () =>{

    describe('checking propTypes', () =>{
        it('should not throw a warning' ,() =>{ 
            const expectedProps = {
                header: 'test header',
                desc: 'test desc',
                tempArr: [{
                    fName: 'test fName',
                    lName: 'test lName',
                    email: 'skhan@gmail.com',
                    age: 32,
                    onlineStatus: true
                }]
            }
            const propErr = checkProps(Headline, expectedProps)
            expect(propErr).toBeUndefined();
        })
    })

    describe('Have props', () =>{
        let component ;
        beforeEach(() =>{
            const props = {
                header:'test header',
                desc: 'test desc'
            }
            component = setUp(props)
        })

        it('should render without error', () =>{
            const wrapper = findByTestAttr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        })
        it('should render H1', () =>{
            const h1 = findByTestAttr(component, 'header');
            expect(h1.length).toBe(1);
        })
        it('should render description', () =>{
            const desc = findByTestAttr(component, 'desc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Have no props', () =>{
        let component;
        beforeEach(() =>{
            component = setUp();
        })

        it('should not render', () =>{
            const wrapper = findByTestAttr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(0);
        })
    })
})