// export const paginationWithGapPage = (startPage, paginationPage) => {
//     // const currentGapPage = startPage;
//     // const lastGapPage = paginationPage;
//     const delta = 2;
//     const left = startPage - delta;
//     const right = startPage + delta + 1;
//     const range = [];
//     const rangeWithDots = [];
//     let intermediateBuffer = 0;

//     for (let i = 1; i <= paginationPage; i++) {
//         if (i == 1 || i == paginationPage || i >= left && i < right) {
//             range.push(i);
//         }
//     }

//     for (let i of range) {
//         if (intermediateBuffer) {
//             if (i - intermediateBuffer === 2) {
//                 rangeWithDots.push(intermediateBuffer + 1);
//             } else if (i - intermediateBuffer !== 1) {
//                 rangeWithDots.push('...');
//             }
//         }
//         rangeWithDots.push(i);
//         intermediateBuffer = i;
//     }

//     return rangeWithDots;
// };
