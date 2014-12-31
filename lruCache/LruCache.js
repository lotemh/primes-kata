/**
 * Created by lotemh on 12/17/2014.
 */
var LruCache = function lru(initialCapacity, element){
    var elements = [];
    var capacity = initialCapacity || 0;
    var result = {};

    Object.defineProperty(result, 'cache', {value: cache});
    Object.defineProperty(result, 'delete', {value: deleteElement});
    Object.defineProperty(result, 'size', {get: getSize});
    Object.defineProperty(result, 'capacity', {get: getCapacity, set: setCapacity, configurable: true});

    if (element){
        var key = Object.keys(element)[0];
        cache(key, element[key]);
    }

    function getSize(){
        return elements.length;
    }

    function getCapacity(){
        return capacity;
    }

    function setCapacity(newCapacity){
        capacity = newCapacity;
        verifySizeIsNoBiggerThanCapacity();
    }

    function updateUsedElement(key) {
        var index = elements.indexOf(key);
        if (index > -1) {
            elements.splice(index, 1);
            elements.push(key);
        }
    }

    function verifySizeIsNoBiggerThanCapacity() {
        while (getSize() > capacity) {
            var deleted = elements.shift();
            deleteElement(deleted)
        }
    }

    function cache(key, value){
        verifySizeIsNoBiggerThanCapacity();
        elements.push(key);

        var getValue = function () {
            updateUsedElement(key);
            return value;
        };
        Object.defineProperty(result, key, {get: getValue, enumerable: true, configurable: true});
        return result;
    }

    function deleteElement(key){
        delete result[key];
        var index = elements.indexOf(key);
        if (index > -1){
            elements.splice(index,1);
        }
    }

    return result;
};