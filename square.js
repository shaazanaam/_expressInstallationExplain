//   to make the objects available outside



exports.area=(a)=>{return a*a};

exports.perimeter=(a)=>{return 4*a};

// if you want to export a complete object in one assignment instead of building it one 
//property at a time assign it to make the root of the exports object a constructor function

module.exports =  {
    area(a){return a*a},
    perimeter(a){return 4*a}
};
// This code exports a constructor function that creates an object with two properties: area and perimeter.