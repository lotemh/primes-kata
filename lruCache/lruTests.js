/**
 * Created by lotemh on 12/17/2014.
 */

describe("Lru cache", function () {

    describe("default", function(){

        it("should create a new cache with no initial parameters", function () {
            expect(new LruCache()).toBeDefined();
        });

        it("should have the initial capacity of 0", function () {
            var lruCache = new LruCache();
            expect(lruCache.capacity).toBe(0);
        });

        it("should have the initial size of 0", function () {
            var lruCache = new LruCache();
            expect(lruCache.size).toBe(0);
        });

    });

    describe("with initial capacity of 2 and initial element {a:1}", function(){

        var lruCache;

        beforeEach(function(){
            var initialCapacity = 2;
            lruCache = new LruCache(initialCapacity, {a: 1});
        });

        it("should have the given initial capacity of 2", function () {
            expect(lruCache.capacity).toBe(2);
        });

        it("should have size 1 in case an object is given", function () {
            expect(lruCache.size).toBe(1);
        });

        it("should have a property a with value 1", function () {
            expect(lruCache.a).toBe(1);
        });

        it("should cache a element {b: 2}", function () {
            lruCache.cache('b', 2);
            expect(lruCache.b).toBe(2);
        });

        it("should return itself after cache", function () {
            expect(lruCache.cache('b', 2)['b']).toBe(2);
        });

        it("should increase size when caching a new element", function () {
            lruCache.cache('b', 2);
            expect(lruCache.size).toBe(2);
        });

        it("should delete the least recently used element when the capacity is exceeded", function () {
            lruCache.cache('b', 2);
            lruCache.a;
            expect(lruCache.cache('c', 3).b).toBeUndefined();
        });

        it("should delete element ", function () {
            lruCache.cache('b', 2);
            lruCache.delete('a');
            expect(lruCache.a).toBeUndefined();
        });

        it("should decrease size when deleting an element ", function () {
            lruCache.cache('b', 2);
            var sizeBeforeDelete = lruCache.size;
            lruCache.delete('a');
            expect(lruCache.size).toBe(sizeBeforeDelete-1);
        });

        it("should update the capacity", function () {
            var newCapacity = 1;
            lruCache.capacity = newCapacity;
            expect(lruCache.capacity).toBe(newCapacity);
        });

        it("should update the size when capacity is updated", function () {
            lruCache.cache('b', 2);
            var newCapacity = 1;
            lruCache.capacity = newCapacity;
            expect(lruCache.size).not.toBeGreaterThan(newCapacity);
        });

    });

});