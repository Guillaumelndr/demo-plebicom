import api from '.'

export const post = (path, data) => (
  api.post(
    path,
    data
  )
)

export const deleteItem = (path, data) => (
  api.delete(
    path,
    data
  )
)

export const put = (path, data) => (
  api.put(
    path,
    data,
    { headers: { 'Content-Type': 'application/ld+json' } }
  )
)

export const patchItem = (path, data) => {
  return (api.patch(
    path,
    data,
    { headers: { 'Content-Type': 'application/merge-patch+json' } }
  ))
}

export const fetchItems = path => (
  api.get(path)
    .then(response => response.data)
)

export const fetchCollection = (path, onlyData) => (
  api.get(path)
    .then(response => (onlyData ? getItems(response.data) : response.data))
)
