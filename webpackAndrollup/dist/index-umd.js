(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    const arrowFunction = () => {
        console.log('hello');
    };

    arrowFunction();

})));
