export const Base_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register", 
        GET_PROFILE: "/api/auth/profile",
    },
    
    IMAGE: {
        UPLOAD: "/api/images/upload",
    },
    POSTS: {
        CREATE: "/api/posts/create",
        GET_ALL: "/api/posts",  
        GET_BY_ID: (id) => `/api/posts/${id}`,
        UPDATE: (id) => `/api/posts/update/${id}`,
        DELETE: (id) => `/api/posts/delete/${id}`,  
    },
};