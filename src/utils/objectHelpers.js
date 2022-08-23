export const updateObjectInArray = (data, itemId, objPropNames, newObjProps) => {
  return data.map(items => {
    if (items[objPropNames] === itemId) {
      return { ...items, ...newObjProps }
    }
    return items
  })
}