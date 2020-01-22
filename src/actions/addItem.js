export const addItem = id => {
  console.log('add item clicked - id: ', id)
  return {
    type: 'ADD_ITEM',
    payload: id
  }
}