/**
 * Created by lotemh on 12/17/2014.
 */
var PrimeFactors = (function(){
    'use strict';

    function generate(num){
        var res = [];

        for (var i=2; i <= num; i++){
            while ((num % i) === 0){
                res.push(i);
                num = num/i;
            }
        }
        return res;
    }

    return {
        generate: generate
    }
})();