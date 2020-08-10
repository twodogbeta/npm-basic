import {transform} from "../src/romanizer";

describe('romanizer',function(){
    it('should return x when input 10',function(){
        let input = 10
        let output = transform(input)
        expect(output).toEqual('X')
    });
});