import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {types} from "../action/types"
import {successReducer} from "./successReducer"

Enzyme.configure({
    adapter: new Adapter()
})

describe('Post Reducers', () =>{

    it('should render default state', () =>{
        const newState = successReducer(undefined, {}); //passing default state and empty object
        expect(newState).toEqual([]);
    })
    
    it('should return new state if receiving type', () =>{
        const post = [{title: 'title1'},{title: 'title2'},{title: 'title3'}]
        const newState = successReducer(undefined, {
            type: types.GET_POST,
            payload: post
        })
        expect(newState).toBe(post)
    })
})

