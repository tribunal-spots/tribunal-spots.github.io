export default [
    {
        test: () => !window.fetch,
        load: () => import('whatwg-fetch'),
    },
    
    {
        test: () => !Array.prototype.find,
        load: () => import('core-js/fn/array/find'),
    },
    
    {
        test: () => !Array.prototype.findIndex,
        load: () => import('core-js/fn/array/find-index'),
    },
];