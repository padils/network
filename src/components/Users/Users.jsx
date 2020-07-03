import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import nonePhoto from '../../img/nonePhoto.png'
import Paginator from '../../parts/paginator';
import Preloader from '../../parts/Preloader';
import User from './User';



let Users = (props) => {
   
   return <div className={s.Users}>


   
   <Paginator {...props}/>
     
    <User {...props}/>
    
         
        

   </div>
}






export default Users