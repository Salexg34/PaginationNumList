export const setQueryParam = ({key, value}) => {
    const query = new URL(window.location.href);
    query.searchParams.set(key, value);
    window.history.pushState({[`${key}`]: value}, '', query);
};
