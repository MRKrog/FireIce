export const fetchSworn = async (id) => {
  const url = `http://localhost:3001/api/v1/character/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const combineMembers = async (swornMembers) => {
  let allMembers = swornMembers.map(async member => {
    let id = member.split("/").pop()
    let found = await fetchSworn(id)
    return found.name
  })
  return Promise.all(allMembers)
}
