const categories = require("./src/models/categoryModel");

(async () =>{
    const data =  await categories.insertMany([
        {
            name:"Kitoblar",
            photo: "book_icon.jpg",

        },
        {
            name:"Mashinalarr",
            photo: "cars_icon.png",
            
        },
        {
            name:"Electronic",
            photo: "electronic.jpg",
            
        },
        {
            name:"Tekinga almashaman"
        },

    ]);
    console.log(data);
})();