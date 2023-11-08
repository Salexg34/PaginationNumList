export const getDotNumberWithPage = (currentDot) => {
    const queryPageIndex = new URL(window.location.href);
    const indexPage = queryPageIndex.searchParams.get('indexPage');
    console.log(indexPage);
    return parseInt(indexPage) * 10 + currentDot - 11 + 1;
};
