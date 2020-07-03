import Axios from 'axios';


 const instance = Axios.create({

    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"04bbbe88-ae6a-4c7a-8995-87003dabefdb"
    }
 })

export const UserAPI={

    getUser(UsersPageCount=1,AllPage=20){
        
       return instance.get(`users?page=${UsersPageCount}&count=${AllPage}`)
       .then(response=>response.data)

    },
    postFollowed(id){
        return instance.post(`follow/${id}`)
        .then(response=>response.data)
    },
    deleteFollowed(id){
        return instance.delete(`follow/${id}`)
        .then(response=>response.data)
    }

} 
export const ProfileAPI={

    getProfile(UserId){
       return instance.get(`profile/` + UserId)
       .then(response=>response.data)

    },
    getProfileStatus(UserId){
       return instance.get(`profile/status/` + UserId)
       .then(response=>response.data)

    },
    putProfileStatus(content){
       return instance.put(`profile/status` ,{status:content})
       .then(response=>response.data)
    },

    putProfile(profile){
       return instance.put(`profile`,profile)
       .then(response=>response.data)

       

    },
    putPhoto(photo){

      let formData = new FormData();
      formData.append('image',photo);

       return instance.put(`profile/photo` ,formData,{
         headers: { 'content-type': 'multipart/form-data' }
     })
       .then(response=>response.data)

       

    },
    

} 
export const meAPI={

    myAuth(){
       return instance.get(`auth/me`,)
       .then(response=>response.data)
    },
    Login(email,password,captcha,rememberMe,){
       return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    Logout(){
       return instance.delete(`auth/login`)
    },
    getCaptcha(){
      return instance.get(`/security/get-captcha-url`,)
      .then(response=>response.data)
   },

} 