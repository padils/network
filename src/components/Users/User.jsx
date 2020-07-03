import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import nonePhoto from '../../img/nonePhoto.png'
import Paginator from '../../parts/paginator';
import Preloader from '../../parts/Preloader';



let User = (props) => {
   
   if(props.shiftingRequest){ return<Preloader/>}
      
   return <div>


      
      {
         
         props.Users.map(
            u => <div key={u.id} className={s.users}>
               <div>Name: {u.name}</div>
               <div>status:{u.status}</div>

               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small ? u.photos.small : nonePhoto} />
                  </NavLink>
               </div>
               
              <div>
                  <button disabled={props.fallowingProgress.some(id => id === u.id)} onClick={() => {
                     u.followed
                     ?props.unFollowed(u.id)
                     :props.Followed(u.id)
                        
   
                  }}>{u.followed ? 'onFollowed' : 'followed'}
                  </button>
              </div>
            </div>
         )
      }


   </div>
}






export default User