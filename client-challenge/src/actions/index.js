
//thunk

export function getWords(number) {
  return dispatch => {
    dispatch({ type: 'GET_WORDS_INIT', number})
    return fetch('http://localhost:4000/convert', {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(number),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
      response => response.json().then(res =>
        dispatch({ type: 'CONVERTED', res })
      )
    )
  }
}
