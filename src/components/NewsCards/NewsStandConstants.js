// src/constants.js
export const PAGE_SIZE = 3;

// Utility function to calculate index range based on descending order
export const getIndexRange = (pageNumber, totalItems) => {
    const startIndex = totalItems - pageNumber * PAGE_SIZE; // Calculate start index for descending order
    const endIndex = startIndex + PAGE_SIZE;
    return { startIndex, endIndex };
};