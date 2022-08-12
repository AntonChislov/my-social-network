import React from "react";
import classes from './Friend.module.css'

const Friend = (props) => {

  return (
    <div className={classes.item}>
      <div>
        <img src={props.photo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT952sB_QM494FZWrIeiNobxskVLeKco0ZDUQ&usqp=CAU'}/>
      </div>
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default Friend