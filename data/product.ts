interface Product1Type {
    id: number;
    hert: number;
    status: string;
    img: string;
    auction: number;
    title: string;
    tag: string;
    eth: number;
    author: {
        status: string;
        name: string;
        avatar: string;
    };
    type: string;
    history?: boolean;
    collection: {
        status: string;
        name: string;
        avatar: string;
    };
}

export const product1: Product1Type[] = [
    {
        id: 1,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/card-item8.jpg",
        auction: 2.5,
        title: `"Hamlet Contemplates Contemplates"`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-11.jpg",
        },
        type: "art",
        history: false,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 2,
        hert: 220,
        status: "Coming Soon",
        img: "/assets/images/box-item/image-box-10.jpg",
        auction: 6,
        title: `"Triumphant Awakening Contemplates"`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "Trista Francis",
            avatar: "/assets/images/avatar/avt-12.jpg",
        },
        type: "music",
        history: true,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-16.jpg",
        },
    },
    {
        id: 3,
        hert: 90,
        status: "",
        img: "/assets/images/box-item/image-box-11.jpg",
        auction: 4.5,
        title: `"Living Vase 01 by Lanza Contemplates "`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "Freddie Carpenter",
            avatar: "/assets/images/avatar/avt-13.jpg",
        },
        type: "collectibles",
        history: false,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-17.jpg",
        },
    },
    {
        id: 4,
        hert: 145,
        status: "",
        img: "/assets/images/box-item/image-box-21.jpg",
        auction: 3.1,
        title: `"Flame Dress' by Balmain Contemplates "`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "Tyler Covington",
            avatar: "/assets/images/avatar/avt-14.jpg",
        },
        type: "sports",
        history: false,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 5,
        hert: 100,
        status: "Coming Soon",
        img: "/assets/images/box-item/card-item8.jpg",
        auction: 2.5,
        title: `"Hamlet Contemplates Contemplates"`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-11.jpg",
        },
        type: "art",
        history: true,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 6,
        hert: 220,
        status: "",
        img: "/assets/images/box-item/image-box-10.jpg",
        auction: 6.2,
        title: `"Triumphant Awakening Contemplates "`,
        tag: "bsc",
        eth: 0.89,
        author: {
            status: "Creator",
            name: "Trista Francis",
            avatar: "/assets/images/avatar/avt-12.jpg",
        },
        type: "music",
        history: true,
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-16.jpg",
        },
    },
    {
        id: 7,
        hert: 90,
        status: "",
        img: "/assets/images/box-item/image-box-11.jpg",
        auction: 4.5,
        title: `"Living Vase 01 by Lanza Contemplates "`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "Freddie Carpenter",
            avatar: "/assets/images/avatar/avt-13.jpg",
        },
        type: "collectibles",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-17.jpg",
        },
    },
    {
        id: 8,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/card-item-3.jpg",
        auction: 4.5,
        title: `"Hamlet Contemplates Yorick's...`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-13.jpg",
        },
        type: "sports",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 9,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/image-box-11.jpg",
        auction: 4.5,
        title: `"Crypto Egg Stamp #5”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
        type: "art",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-16.jpg",
        },
    },
    {
        id: 10,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/card-item-2.jpg",
        auction: 4.5,
        title: `"CyberPrimal 042 LAN”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-4.jpg",
        },
        type: "music",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-17.jpg",
        },
    },
    {
        id: 11,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/card-item-7.jpg",
        auction: 4.5,
        title: `"Crypto Egg Stamp #5”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
        type: "collectibles",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 12,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/card-item-9.jpg",
        auction: 4.5,
        title: `"Hamlet Contemplates Yorick's...`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-6.jpg",
        },
        type: "sports",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-16.jpg",
        },
    },
    {
        id: 13,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/image-box-6.jpg",
        auction: 4.5,
        title: `"CyberPrimal 042 LAN”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-4.jpg",
        },
        type: "art",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-17.jpg",
        },
    },
    {
        id: 14,
        hert: 100,
        status: "",
        img: "/assets/images/box-item/image-box-11.jpg",
        auction: 4.5,
        title: `"Crypto Egg Stamp #5”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            status: "Creator",
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
        type: "music",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-18.jpg",
        },
    },
    {
        id: 15,
        hert: 220,
        status: "",
        img: "/assets/images/box-item/image-box-10.jpg",
        auction: 6.2,
        title: `"Triumphant Awakening Contemplates "`,
        tag: "bsc",
        eth: 0.89,
        author: {
            status: "Creator",
            name: "Trista Francis",
            avatar: "/assets/images/avatar/avt-12.jpg",
        },
        type: "collectibles",
        collection: {
            status: "Collection",
            name: "Colorful Abstract",
            avatar: "/assets/images/avatar/avt-16.jpg",
        },
    },
];

interface Product2Type {
    id: number;
    hert: number;
    gallery: string[];
    author: {
        avatar: string;
        title: string;
        name: string;
    };
}

export const product2: Product2Type[] = [
    {
        id: 1,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 2,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection10.jpg",
            "/assets/images/box-item/img-collection11.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 3,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection12.jpg",
            "/assets/images/box-item/img-collection18.jpg",
            "/assets/images/box-item/img-collection25.jpg",
            "/assets/images/box-item/img-collection17.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            title: "Modern Art Collection",
            name: "Freddie Carpenter",
        },
    },
    {
        id: 4,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 5,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection10.jpg",
            "/assets/images/box-item/img-collection11.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 6,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 7,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection10.jpg",
            "/assets/images/box-item/img-collection11.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 8,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection12.jpg",
            "/assets/images/box-item/img-collection18.jpg",
            "/assets/images/box-item/img-collection25.jpg",
            "/assets/images/box-item/img-collection17.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            title: "Modern Art Collection",
            name: "Freddie Carpenter",
        },
    },
    {
        id: 9,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 10,
        hert: 100,
        gallery: [
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection10.jpg",
            "/assets/images/box-item/img-collection11.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
];

interface Product3Type {
    id: number;
    status: string;
    hert: number;
    img: string;
    title: string;
    tag: string;
    eth: number;
    author: {
        name: string;
        avatar: string;
    };
}

export const product3: Product3Type[] = [
    {
        id: 1,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-3.jpg",
        title: `"The RenaiXance Rising the sun  "`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-1.jpg",
        },
    },
    {
        id: 2,
        status: "Coming Soon",
        hert: 100,
        img: "/assets/images/box-item/card-item-4.jpg",
        title: `"Space babe - Night 2/25”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-2.jpg",
        },
    },
    {
        id: 3,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-2.jpg",
        title: `"Living Vase 01 by Lanz...`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-4.jpg",
        },
    },
    {
        id: 4,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-7.jpg",
        title: `"Crypto Egg Stamp #5”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
    },
    {
        id: 5,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item8.jpg",
        title: `"Travel Monkey Club #45”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "Ralph Garraway",
            avatar: "/assets/images/avatar/avt-12.jpg",
        },
    },
    {
        id: 6,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-9.jpg",
        title: `"Sir. Lion Swag #371"`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "Mason Woodward",
            avatar: "/assets/images/avatar/avt-1.jpg",
        },
    },
    {
        id: 7,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/image-box-11.jpg",
        title: `"Living Vase 01 by Lanz...`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "Tyler Covington",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
    },
    {
        id: 8,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item8.jpg",
        title: `"Travel Monkey Club #45”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "Ralph Garraway",
            avatar: "/assets/images/avatar/avt-12.jpg",
        },
    },
    {
        id: 9,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-3.jpg",
        title: `"The RenaiXance Rising the sun  "`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-1.jpg",
        },
    },
    {
        id: 10,
        status: "Coming Soon",
        hert: 100,
        img: "/assets/images/box-item/card-item-4.jpg",
        title: `"Space babe - Night 2/25”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-2.jpg",
        },
    },
    {
        id: 11,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-2.jpg",
        title: `"Living Vase 01 by Lanz...`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-4.jpg",
        },
    },
    {
        id: 12,
        status: "",
        hert: 100,
        img: "/assets/images/box-item/card-item-7.jpg",
        title: `"Crypto Egg Stamp #5”`,
        tag: "bsc",
        eth: 4.89,
        author: {
            name: "SalvadorDali",
            avatar: "/assets/images/avatar/avt-3.jpg",
        },
    },
];

interface Product4Type {
    id: number;
    hert: number;
    gallery: string[];
    author: {
        avatar: string;
        title: string;
        name: string;
    };
}

export const product4: Product4Type[] = [
    {
        id: 1,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/img-collection3.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 2,
        hert: 100,
        gallery: [
            "/assets/images/box-item/image-box-12.jpg",
            "/assets/images/box-item/collection-item-11.jpg",
            "/assets/images/box-item/img-collection6.jpg",
            "/assets/images/box-item/img-collection1.jpg",
            "/assets/images/box-item/img-collection3.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 3,
        hert: 100,
        gallery: [
            "/assets/images/box-item/image-box-16.jpg",
            "/assets/images/box-item/image-box-1.jpg",
            "/assets/images/box-item/img-collection2.jpg",
            "/assets/images/box-item/collection-item-10.jpg",
            "/assets/images/box-item/img-collection8.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            title: "Modern Art Collection",
            name: "Freddie Carpenter",
        },
    },
    {
        id: 4,
        hert: 100,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/img-collection3.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 5,
        hert: 100,
        gallery: [
            "/assets/images/box-item/image-box-12.jpg",
            "/assets/images/box-item/collection-item-11.jpg",
            "/assets/images/box-item/img-collection6.jpg",
            "/assets/images/box-item/img-collection1.jpg",
            "/assets/images/box-item/img-collection3.jpg",
        ],
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
];

interface Product5Type {
    id: number;
    gallery: string[];
    item: number;
    author: {
        avatar: string;
        name: string;
    };
}

export const product5: Product5Type[] = [
    {
        id: 1,
        gallery: [
            "/assets/images/box-item/collection-item-2.jpg",
            "/assets/images/box-item/collection-item-top-1.jpg",
            "/assets/images/box-item/collection-item-top-2.jpg",
            "/assets/images/box-item/collection-item-bottom-4.jpg",
        ],
        item: 12,
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            name: "Ralph Garraway",
        },
    },
    {
        id: 2,
        gallery: [
            "/assets/images/box-item/img-collection23.jpg",
            "/assets/images/box-item/img-collection24.jpg",
            "/assets/images/box-item/img-collection10.jpg",
            "/assets/images/box-item/img-collection11.jpg",
        ],
        item: 26,
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            name: "Mason Woodward",
        },
    },
    {
        id: 3,
        gallery: [
            "/assets/images/box-item/img-collection12.jpg",
            "/assets/images/box-item/img-collection18.jpg",
            "/assets/images/box-item/img-collection25.jpg",
            "/assets/images/box-item/img-collection17.jpg",
        ],
        item: 26,
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            name: "Freddie Carpenter",
        },
    },
    {
        id: 4,
        gallery: [
            "/assets/images/box-item/image-box-15.jpg",
            "/assets/images/box-item/image-box-18.jpg",
            "/assets/images/box-item/image-box-14.jpg",
            "/assets/images/box-item/img-collection13.jpg",
        ],
        item: 12,
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            name: "Ralph Garraway",
        },
    },
    {
        id: 5,
        gallery: [
            "/assets/images/box-item/img-collection14.jpg",
            "/assets/images/box-item/img-collection15.jpg",
            "/assets/images/box-item/img-collection16.jpg",
            "/assets/images/box-item/img-collection19.jpg",
        ],
        item: 18,
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            name: "Mason Woodward",
        },
    },
    {
        id: 6,
        gallery: [
            "/assets/images/box-item/image-box-17.jpg",
            "/assets/images/box-item/img-collection22.jpg",
            "/assets/images/box-item/img-collection21.jpg",
            "/assets/images/box-item/img-collection20.jpg",
        ],
        item: 17,
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            name: "Freddie Carpenter",
        },
    },
];

interface Product6Type {
    id: number;
    img: string;
    title: string;
    author: {
        img: string;
        name: string;
    };
}

export const product6: Product6Type[] = [
    {
        id: 1,
        img: "/assets/images/box-item/img1rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
    {
        id: 2,
        img: "/assets/images/box-item/img2rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
    {
        id: 3,
        img: "/assets/images/box-item/img3rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
    {
        id: 4,
        img: "/assets/images/box-item/img4rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
    {
        id: 5,
        img: "/assets/images/box-item/img5rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
    {
        id: 6,
        img: "/assets/images/box-item/img6rank.jpg",
        title: `"Hamlet Contemplates Yorick's Yorick's`,
        author: {
            img: "/assets/images/avatar/author_rank.jpg",
            name: "SalvadorDali",
        },
    },
];

interface Product7Type {
    id: number;
    name: string;
    img: string;
}

export const product7: Product7Type[] = [
    {
        id: 1,
        name: "Music",
        img: "/assets/images/box-item/imgslider2category.jpg",
    },
    {
        id: 2,
        name: "Domain Names",
        img: "/assets/images/box-item/imgslider3category.jpg",
    },
    {
        id: 3,
        name: "Virutal world",
        img: "/assets/images/box-item/imgslider4category.jpg",
    },
    {
        id: 4,
        name: "Utility",
        img: "/assets/images/box-item/imgslider5category.jpg",
    },
    {
        id: 5,
        name: "Sports",
        img: "/assets/images/box-item/imgslider6category.jpg",
    },
    {
        id: 6,
        name: "Art",
        img: "/assets/images/box-item/imgslider1category.jpg",
    },
    {
        id: 7,
        name: "Music",
        img: "/assets/images/box-item/imgslider2category.jpg",
    },
    {
        id: 8,
        name: "Domain Names",
        img: "/assets/images/box-item/imgslider3category.jpg",
    },
    {
        id: 9,
        name: "Virutal world",
        img: "/assets/images/box-item/imgslider4category.jpg",
    },
    {
        id: 10,
        name: "Utility",
        img: "/assets/images/box-item/imgslider5category.jpg",
    },
];

interface Product8Type {
    id: number;
    hert: number;
    img: string;
    author: {
        avatar: string;
        title: string;
        name: string;
    };
}

export const product8: Product8Type[] = [
    {
        id: 1,
        hert: 100,
        img: "/assets/images/box-item/collection-item-14.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 2,
        hert: 100,
        img: "/assets/images/box-item/collection-item-15.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 3,
        hert: 100,
        img: "/assets/images/box-item/collection-item-16.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            title: "Modern Art Collection",
            name: "Freddie Carpenter",
        },
    },
    {
        id: 4,
        hert: 100,
        img: "/assets/images/box-item/collection-item-14.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-1.jpg",
            title: "Creative Art Collection",
            name: "Ralph Garraway",
        },
    },
    {
        id: 5,
        hert: 100,
        img: "/assets/images/box-item/collection-item-15.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-8.jpg",
            title: "Colorful Abstract",
            name: "Mason Woodward",
        },
    },
    {
        id: 6,
        hert: 100,
        img: "/assets/images/box-item/collection-item-16.jpg",
        author: {
            avatar: "/assets/images/avatar/avt-7.jpg",
            title: "Modern Art Collection",
            name: "Freddie Carpenter",
        },
    },
];
