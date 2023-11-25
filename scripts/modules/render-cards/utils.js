export const getPaginationPagesCount = ({cardsCount, visibleRange}) => {
    return Math.ceil(cardsCount / visibleRange);
};
