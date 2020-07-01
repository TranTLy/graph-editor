export const editSingleRectangle = (rectangleData, editItem) => { 
    return  rectangleData.map(item => {
        if (item.id ===  editItem.id)  {
            return editItem
        }
        return item
    })
}