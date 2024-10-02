interface NavigationType {
    id: number;
    name: string;
    dropdown?: {
        id: number;
        name: string;
        path?: string | undefined;
        dropdown?: {
            id: number;
            name: string;
            path: string;
        }[];
    }[];
}

export const navigation: NavigationType[] = [
    {
        id: 2,
        name: "Explore",
        dropdown: [{
                id: 1,
                name: "Explore",
                path: "/explore-2",
            },
            {
                id: 2,
                name: "Live Auctions",
                path: "/live-auctions",
            },
            {
                id: 3,
                name: "Persone AI",
                path: "/personeai",
            },
        ],
    },
    {
        id: 4,
        name: "Community",
        dropdown: [
            {
                id: 1,
                name: "Help Center",
                path: "/help-center",
            },
        ],
    },
    {
        id: 5,
        name: "Pages",
        dropdown: [
            {
                id: 1,
                name: "Authors",
                path: "/authors-1",
            },
            {
                id: 4,
                name: "Create Item",
                path: "/create-item",
            },
            {
                id: 5,
                name: "Edit Profile",
                path: "/edit-profile",
            },
            {
                id: 6,
                name: "Ranking",
                path: "/ranking",
            },
            {
                id: 7,
                name: "FAQ",
                path: "/faq",
            },
        ],
    },
];
