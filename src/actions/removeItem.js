export const removeItem = item => {
  console.log('remove item clicked - item: ', item)
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}