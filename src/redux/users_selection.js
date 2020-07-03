export const getUsersS = (state)=>{
    return state.UsersPage.Users
};

export const getTotalCountPage = (state)=>{
    return state.UsersPage.totalCountPage
};

export const getUsersPageCount = (state)=>{
    return state.UsersPage.UsersPageCount
};

export const getAllPage = (state)=>{
    return state.UsersPage.AllPage
};

export const getShiftingRequest = (state)=>{
    return state.UsersPage.shiftingRequest
};

export const getFallowingProgress = (state)=>{
    return state.UsersPage.fallowingProgress
};