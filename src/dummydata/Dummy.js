// import React from "react";

const dummyData = [
    {
        id: 0,
        icon: "/public/images/comp_science.jpg",
        course_avatart: "../../public/images/learning_avatar.jpg",
        name: "Comp Sci.",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,",
        author_avatar: "../../public/images/comp_science.jpg",
        author: "Kariuki Ng'ang'a",
        duration: 600,
        lessons: 12,
        price: 2000,
        classification: "Computer Science & Information Technology",
        course_breakdown: [
            {
                tag: "Week 1",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 2",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 3",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 4",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 5",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 7",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 8",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 9",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 10",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
        ],
    },
    {
        id: 1,
        icon: "../../public/images/physics.jpeg",
        course_avatart: "../../public/images/learning_avatar.jpg",
        name: "Engineering",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "../../public/images/physics.jpeg",
        author: "Kariuki Ng'ang'a",
        duration: 620,
        lessons: 8,
        price: 2000,
        classification: "Science",
        course_breakdown: [
            {
                tag: "Week 1",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 2",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 3",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 4",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 5",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 7",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 8",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 9",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 10",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
        ],
    },
    {
        id: 2,
        icon: "../../public/images/nut.jpg",
        course_avatart: "../../public/images/learning_avatar.jpg",
        name: "Nutrition & Dietetics",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "../../public/images/nut.jpg",
        author: "Kariuki Ng'ang'a",
        duration: 400,
        lessons: 6,
        price: 2000,
        classification: "Food Science",
        course_breakdown: [
            {
                tag: "Week 1",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 2",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 3",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 4",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 5",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 7",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 8",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 9",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 10",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
        ],
    },
    {
        id: 3,
        icon: "../../public/images/maths.jpeg",
        course_avatart: "../../public/images/learning_avatar.jpg",
        name: "Maths & Comp Sci.",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "../../public/images/maths.jpeg",
        author: "Kariuki Ng'ang'a",
        duration: 800,
        lessons: 12,
        price: 2000,
        price: 2000,
        classification: "Computer Science & Information Technology",
        course_breakdown: [
            {
                tag: "Week 1",
                lessons: [
                    { id: 0, lesson_title:"lorem ipsum", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, lesson_title:"lorem ipsum", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 2",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 3",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 4",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 5",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 7",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 8",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 9",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 10",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
        ],
    },
    {
        id: 4,
        icon: "../../public/images/geog.jpg",
        course_avatart: "../../public/images/learning_avatar.jpg",
        name: "Geography",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "../../public/images/geog.jpg",
        author: "Kariuki Ng'ang'a",
        duration: 300,
        lessons: 4,
        price: 2000,
        classification: "Humanities",
        course_breakdown: [
            {
                tag: "Week 1",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 2",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 3",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 4",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 5",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 7",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 8",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 9",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
            {
                tag: "Week 10",
                lessons: [
                    { id: 0, type: "video", lesson_title:"lorem ipsum", lesson: "1", completionTime: "5 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 1, type: "document", lesson_title:"lorem ipsum", lesson: "2", completionTime: "2 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 2, type: "document", lesson_title:"lorem ipsum", lesson: "3", completionTime: "3 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 3, type: "video", lesson_title:"lorem ipsum", lesson: "4", completionTime: "4 hours", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " },
                    { id: 4, type: "document", lesson_title:"lorem ipsum", lesson: "5", completionTime: "1 hour", downloadPdfLink: "/123456789", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eum, ad accusantium iure molestias iste atque qui quia enim facere in cupiditate, maiores " }
                ]
            },
        ],
    },
];


export { dummyData };
