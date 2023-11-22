export const ENDPOINTS = {
    people: (page: number) => `/people/?page=${page}`,
    person_by_id: (id: string) => `/people/${id}/`
}
