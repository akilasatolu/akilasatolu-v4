export const GetLS = (key: string) : string | undefined => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : undefined;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const SetLS = (key: string, value: string) : void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(error);
    }
};