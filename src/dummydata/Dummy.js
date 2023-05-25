// import React from "react";

const dummyData = [
    {
        id: 0,
        icon: "/assets/comp_science.jpg",
        course_avatart: "/assets/learning_avatar.png",
        name: "Comp Sci.",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,",
        author_avatar: "/assets/comp_science.jpg",
        author_avatar: "/assets/comp_science.jpg",
        author_avatar: "/assets/comp_science.jpg",
        author_avatar: "/assets/comp_science.jpg",
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
        icon: "/assets/physics.jpeg",
        course_avatart: "/assets/learning_avatar.png",
        icon: "/assets/physics.jpeg",
        course_avatart: "/assets/learning_avatar.png",
        name: "Engineering",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "/assets/physics.jpeg",
        author_avatar: "/assets/physics.jpeg",
        author_avatar: "/assets/physics.jpeg",
        author_avatar: "/assets/physics.jpeg",
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
        icon: "/assets/nut.jpg",
        course_avatart: "/assets/learning_avatar.png",
        icon: "/assets/nut.jpg",
        course_avatart: "/assets/learning_avatar.png",
        name: "Nutrition & Dietetics",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "/assets/nut.jpg",
        author_avatar: "/assets/nut.jpg",
        author_avatar: "/assets/nut.jpg",
        author_avatar: "/assets/nut.jpg",
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
        icon: "/assets/maths.jpeg",
        course_avatart: "/assets/learning_avatar.png",
        icon: "/assets/maths.jpeg",
        course_avatart: "/assets/learning_avatar.png",
        name: "Maths & Comp Sci.",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "/assets/maths.jpeg",
        author_avatar: "/assets/maths.jpeg",
        author_avatar: "/assets/maths.jpeg",
        author_avatar: "/assets/maths.jpeg",
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
        icon: "/assets/geog.jpg",
        course_avatart: "/assets/learning_avatar.png",
        icon: "/assets/geog.jpg",
        course_avatart: "/assets/learning_avatar.png",
        name: "Geography",
        instructorName: "Kennedy",
        description: "Lorem ipsum dolor sit,  ",
        author_avatar: "/assets/geog.jpg",
        author_avatar: "/assets/geog.jpg",
        author_avatar: "/assets/geog.jpg",
        author_avatar: "/assets/geog.jpg",
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
