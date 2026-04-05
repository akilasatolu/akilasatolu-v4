type PageInfo = {
    [key: string]: {
        path: string;
    };
};

export const pageInfo: PageInfo = {
    home:{
        path: "/"
    },
    experience:{
        path: "/experience"
    },
    goals:{
        path: "/goals"
    },
    photos:{
        path: "/photos"
    }
};