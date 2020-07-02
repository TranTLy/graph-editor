const COLOR_DEFAULT = ["FF7E69", "FE7F9C", "FDA4BA", "F69ACD", "F69ABF", "9E4245", "FC4C4E", "F26B8B"]

const randomColor = () => {
    const index = Math.floor(Math.random() * COLOR_DEFAULT.length); 
    return `#${COLOR_DEFAULT[index]}`
}
const randomPosition = () => {
    return Math.floor(Math.random() * 20)
}

const randomSize = () => {
    return 10 + Math.floor(Math.random() * 200)
}

export const getDefaultRectangle = (id) => {
    return {
        id,
        x: randomPosition(),
        y: randomPosition(),
        width: randomSize(),
        height: randomSize(),
        fill: randomColor(),
        name: `Rectangle ${id||'0'}`,
    }
}

export const handleEditSingleRectangle = (rectangleData, editItem) => { 
    return  rectangleData.map(item => {
        if (item.id ===  editItem.id)  {
            return editItem
        }
        return item
    })
}


export const handleDeleteRectangle = (rectangleData, deleteId) => {
    return rectangleData.filter(item => item.id !== deleteId)
}