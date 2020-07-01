export const getDefaultRectangle = (id) => {
    return {
        id,
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: 'green',
        name: `Rectangle ${id||'0'}`,
    }
}

export const editSingleRectangle = (rectangleData, editItem) => { 
    return  rectangleData.map(item => {
        if (item.id ===  editItem.id)  {
            return editItem
        }
        return item
    })
}