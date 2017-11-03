export function selectBook(book) {
    // selectBook is an action creator, needs to return an action
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
}
