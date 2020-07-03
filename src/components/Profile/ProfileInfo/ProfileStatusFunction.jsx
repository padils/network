import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';





const ProfileStatusFunction  =(props)=> {


  let [editMode,setEditMode]= useState(false);
  let [status,setStatus]=useState(props.status);

  useEffect(()=>{

    setStatus(props.status)
  },[props.status])

 const activateEditMode=()=>{
    props.isOwner && setEditMode(true);
  }

 const deactivateEditMode=()=>{
    setEditMode(false);
    props.updateStatus(status);
  }

   const onChangeF =(e)=>{
    setStatus( e.target.value);
    
  }

 
 
    return (<div>
      
      {!editMode
      ?
        <div>
          <span onDoubleClick={activateEditMode}>{props.status|| `---`}</span>
        </div>
      :
        <div>
          <input  onChange={onChangeF}  onBlur={deactivateEditMode} autoFocus={true} value={status} />
        </div>
      }
    </div>
    )
  
}
export default ProfileStatusFunction