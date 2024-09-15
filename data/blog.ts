interface BlogType {
    id: number;
    img: string;
    title: string;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    createdAt: number;
}
export const blog: BlogType[] = [
    {
        id: 1,
        img: "/assets/images/blog/thumb-1.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-2.jpg",
        },
        createdAt: 1640995200000,
    },
    {
        id: 2,
        img: "/assets/images/blog/thumg-3-1.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "Tyler Covington",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
        createdAt: 1647340800000,
    },
    {
        id: 3,
        img: "/assets/images/blog/thumb-4.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "Freddie Carpenter",
            avatar: "/assets/images/avatar/avt-6.jpg",
        },
        createdAt: 1656633600000,
    },
    {
        id: 4,
        img: "/assets/images/blog/thumb-2.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-4.jpg",
        },
        createdAt: 1663910400000,
    },
    {
        id: 5,
        img: "/assets/images/blog/thumb-5.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "Tyler Covington",
            avatar: "/assets/images/avatar/avt-8.jpg",
        },
        createdAt: 1670726400000,
    },
    {
        id: 6,
        img: "/assets/images/blog/thumb-6-1.jpg",
        title: "The next big trend in crypto",
        description: `Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...`,
        author: {
            name: "Freddie Carpenter",
            avatar: "/assets/images/avatar/avt-6.jpg",
        },
        createdAt: 1677638400000,
    },
];
