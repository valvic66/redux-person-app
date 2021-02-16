export const selectPerson = (personId) => {
    return {
        type: 'selected_person',
        payload: personId
    };
};