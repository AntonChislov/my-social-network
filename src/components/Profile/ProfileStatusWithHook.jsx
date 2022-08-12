import React, { userState} from 'react';

const ProfileStatus = () => {

  let [editMode, setEditMode] = userState(false) 
  let [status, setStatus] = userState(props.status) 

  let activateEditMode = () => {
    setEditMode(true)
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    updateStatusThunk(status)
  }

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {editMode ||
        <div>
          <span onDoubleClick={activateEditMode} >{status || '--------'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}


export default ProfileStatus