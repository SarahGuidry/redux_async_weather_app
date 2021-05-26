export const START_SEARCH = 'START_SEARCH'

export const startSearch = zipCode => {
    return ({ type: START_SEARCH, payload: zipCode })
}