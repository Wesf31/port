import axios from 'axios'

const initialState = {
  profileData: [],
  profileDataLoaded: false,
}

const GET_PROFILE_DATA = 'GET_PROFILE_DATA'

export const setProfileData = profile => ({
  type: GET_PROFILE_DATA,
  payload: profile,
})

export const getProfileData = () => async (dispatch) => {
  let results = await axios.get('/api/profiles')
  return dispatch({
    type: GET_PROFILE_DATA,
    payload: results.data,
  })
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case GET_PROFILE_DATA:
      return { ...state, profileData: payload, profileDataLoaded: true }
    default:
      return state
  }
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case GET_TABLE_DATA:
      return { ...state, profileData: payload, profileDataLoaded: true }
    default:
      return state
  }
}