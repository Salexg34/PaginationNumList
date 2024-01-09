export const MAX_VISIBLE_PAGE = 5;
export const currentPage = new URL(window.location.href).searchParams.get('indexPage');
// export const startPaginationPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGE / 2));
// export const endPaginationPage = Math.min(startPaginationPage + MAX_VISIBLE_PAGE - 1, 120);
