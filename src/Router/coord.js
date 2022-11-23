export const goToHomePage = (navigate) =>{
    navigate('/')
}

export const goToProfilePage = (navigate, nome) =>{
    navigate(`/profile/${nome}`)
}


export const goToId = (navigate, Id) =>{
    navigate(`/file/${Id}`)
}