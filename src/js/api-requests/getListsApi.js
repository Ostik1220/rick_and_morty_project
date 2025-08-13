export const getCharacterList = async (page) => {
  try {
   return await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}

export const getEpisodesList = async (page) => {
  try {
   return await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}

export const getLocationsList = async (page) => {
  try {
   return await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}