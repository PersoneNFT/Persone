interface Faq {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
}

export const faq: Faq[] = [
    {
        id: 1,
        title: "What is an NFT?",
        description: `NFTs or non-fungible tokens, are
    cryptographic assets on blockchain
    with unique identification codes and
    metadata that distinguish them from
    each other. NFTs are unique and not
    mutually interchangeable, which
    means no two NFTs are the same.`,
        isActive: false,
    },
    {
        id: 2,
        title: "Customer support is available ?",
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
        isActive: false,
    },
    {
        id: 3,
        title: " How do I find my transaction hash?",
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
        isActive: false,
    },
    {
        id: 4,
        title: "What are gas fees on Axies?",
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
        isActive: false,
    },
    {
        id: 5,
        title: "What is the effective staking amount?",
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
        isActive: false,
    },
];

interface Activity1 {
    id: number;
    img: string;
    icon: string;
    title: string;
    name: string;
    type: number;
    eth?: undefined | number;
}

export const activity1: Activity1[] = [
    {
        id: 1,
        img: "/assets/images/box-item/card-item-10.jpg",
        icon: "icon-1",
        title: "Monica Lucas",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 2,
        img: "/assets/images/box-item/image-box-10.jpg",
        icon: "icon-2",
        title: "Wow! That Brain is Floating",
        name: "Gayle Hicks",
        type: 2,
        eth: 2.5,
    },
    {
        id: 3,
        img: "/assets/images/box-item/image-box-11.jpg",
        icon: "icon-3",
        title: "Wow! That Brain is Floating",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 4,
        img: "/assets/images/box-item/image-box-21.jpg",
        icon: "icon-4",
        title: "Our Journey Start",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 5,
        img: "/assets/images/box-item/image-box-6.jpg",
        icon: "icon-5",
        title: "Skrrt Cobain Official",
        name: "Gayle Hicks",
        type: 1,
    },
];

interface Activity2 {
    id: number;
    img: string;
    title: string;
    name: string;
    type: number;
    eth?: undefined | number;
    to?: undefined | string;
}

export const activity2: Activity2[] = [
    {
        id: 1,
        img: "/assets/images/box-item/imgactivity2.jpg",
        title: "Pinky Ocean",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 2,
        img: "/assets/images/box-item/image-box-21.jpg",
        title: "Deep Sea Plan",
        name: "Trista Francis",
        eth: 0.049,
        type: 2,
    },
    {
        id: 3,
        img: "/assets/images/box-item/image-box-6.jpg",
        title: "Rainbow Style",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 4,
        img: "/assets/images/box-item/card-item-7.jpg",
        title: "This is Our Story",
        name: "Trista Francis",
        eth: 0.049,
        type: 2,
    },
    {
        id: 5,
        img: "/assets/images/box-item/card-item-9.jpg",
        title: "I Believe I Can Fly",
        name: "Gayle Hicks",
        type: 1,
    },
    {
        id: 5,
        img: "/assets/images/box-item/image-box-11.jpg",
        title: "Cute Astronout",
        name: "Trista Francis",
        eth: 0.049,
        type: 2,
    },
    {
        id: 6,
        img: "/assets/images/box-item/card-item-4.jpg",
        title: "USA Wordmation",
        eth: 0.049,
        name: "Gayle Hicks",
        type: 2,
    },
    {
        id: 7,
        img: "/assets/images/box-item/card-item-3.3.jpg",
        title: "10 minutes ago",
        name: "Gayle Hicks",
        to: "Trista Francis",
        type: 3,
    },
];

interface Category1 {
    id: number;
    name: string;
    img: string;
}

export const category1: Category1[] = [
    {
        id: 1,
        name: "Digital Art",
        img: "/assets/images/box-item/img_category1.jpg",
    },
    {
        id: 2,
        name: "Style",
        img: "/assets/images/box-item/img_category2.jpg",
    },
    {
        id: 3,
        name: "Music",
        img: "/assets/images/box-item/img_category3.jpg",
    },
    {
        id: 4,
        name: "Domain Name",
        img: "/assets/images/box-item/img_category4.jpg",
    },
    {
        id: 5,
        name: "Utilities",
        img: "/assets/images/box-item/img_category6.jpg",
    },
    {
        id: 6,
        name: "Digital Art",
        img: "/assets/images/box-item/img_category1.jpg",
    },
    {
        id: 7,
        name: "Style",
        img: "/assets/images/box-item/img_category2.jpg",
    },
    {
        id: 8,
        name: "Music",
        img: "/assets/images/box-item/img_category3.jpg",
    },
    {
        id: 9,
        name: "Domain Name",
        img: "/assets/images/box-item/img_category4.jpg",
    },
    {
        id: 10,
        name: "Utilities",
        img: "/assets/images/box-item/img_category6.jpg",
    },
];
