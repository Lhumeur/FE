export const lodash = {
    map: function (arr, callback) {
        const newArr = [];
        for(let i = 0; i < arr.length; i++){
            newArr.push(callback(arr[i],i));
        }
    },
    // filter: function (arr, callback) {
    //     const newArr = [];
    //     for(let i = 0; i < arr.length; i++){
    //         newArr.push(callback(arr[i],i));
    //     }
    // }
}