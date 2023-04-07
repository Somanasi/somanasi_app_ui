import React from "react";

const dummyData=[
        {
            id:0,
            icon:require("../img/logo.png"),
            name:"Comp Science",
            instructorName:"Kennedy",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores ",
            dummyLessons:[
                {id:0, lesson:"1", completionTime:"5 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:1, lesson:"2", completionTime:"2 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:2, lesson:"3", completionTime:"3 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:3, lesson:"4", completionTime:"4 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:4, lesson:"5", completionTime:"1 hour", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
            ],
        },
        {
            id:1,
            icon:require("../img/logo.png"),
            name:"Engineering",
            instructorName:"Kennedy",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores ",
            dummyLessons:[
                {id:0, lesson:"1", completionTime:"5 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:1, lesson:"2", completionTime:"2 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:2, lesson:"3", completionTime:"3 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:3, lesson:"4", completionTime:"4 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:4, lesson:"5", completionTime:"1 hour", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "}
            ],
        },
        {
            id:2,
            icon:require("../img/logo.png"),
            name:"Nutrition and Dietetics",
            instructorName:"Kennedy",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores ",
            dummyLessons:[
                {id:0, lesson:"1", completionTime:"5 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:1, lesson:"2", completionTime:"2 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:2, lesson:"3", completionTime:"3 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:3, lesson:"4", completionTime:"4 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:4, lesson:"5", completionTime:"1 hour", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "}
            ],
        },
        {
            id:3,
            icon:require("../img/logo.png"),
            name:"Mathematics and Comp Science",
            instructorName:"Kennedy",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores ",
            dummyLessons:[
                {id:0, lesson:"1", completionTime:"5 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:1, lesson:"2", completionTime:"2 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:2, lesson:"3", completionTime:"3 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:3, lesson:"4", completionTime:"4 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:4, lesson:"5", completionTime:"1 hour", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "}
            ],
        },
        {
            id:4,
            icon:require("../img/logo.png"),
            name:"Geographical Studies",
            instructorName:"Kennedy",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores ",
            dummyLessons:[
                {id:0, lesson:"1", completionTime:"5 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:1, lesson:"2", completionTime:"2 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:2, lesson:"3", completionTime:"3 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:3, lesson:"4", completionTime:"4 hours", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "},
                {id:4, lesson:"5", completionTime:"1 hour", downloadPdfLink:"/123456789", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores "}
            ],
        },
    ];


export {dummyData};
