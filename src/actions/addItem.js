export const addItem = item => {
  // console.log('add item clicked - item: ', item)
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}