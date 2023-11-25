export const setQueryParam = ({key, value}) => {
    console.log(key, value, '123');
    const query = new URL(window.location.href);
    query.searchParams.set(key, value);
    window.history.pushState({[`${key}`]: value}, '', query);
};
