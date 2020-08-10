import romanize from 'romanize'
import _ from 'lodash'

const transform = (number) => {
    return romanize(number);
};

export {
    transform
};