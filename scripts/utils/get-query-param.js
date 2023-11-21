export const getQueryParam = ({
    key,
    typeConverter,
    defaultValue,
}) => {
    const queryParams = new URL(window.location.href);
    console.log(queryParams);
    const selectedQueryParam = queryParams.searchParams.get(key);
    const convertedParam = typeConverter !== undefined 
        ? typeConverter(selectedQueryParam)
        : selectedQueryParam;
    
    return convertedParam || defaultValue;
};
