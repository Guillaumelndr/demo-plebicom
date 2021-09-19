import api from '.'

export const fetchItems = path => (
  api.get(path).then(response => response.data)
)
