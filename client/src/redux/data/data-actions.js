export const loadHomepageData = () => ({
    type : 'LOAD_HOMEPAGE_DATA_START'
})

export const setHomepageData = (data) => ({
    type : 'SET_HOMEPAGE_DATA',
    payload : data
})