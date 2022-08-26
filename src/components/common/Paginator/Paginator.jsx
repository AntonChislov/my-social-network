import React, { useState } from 'react'
import classes from './Paginator.module.css'

const Paginator = ({ countPage, pageSize, currentPage, updateCurrentPage, portionSize }) => {

  let totalPage = Math.ceil(countPage / pageSize)

  let pageArr = []

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i)
  }

  let totalPortion = Math.ceil(totalPage / portionSize)
  let [currentPortion, setCurrentPortion] = useState(3)
  let leftMarginPortion = (currentPortion - 1) * portionSize + 1
  let rightMarginPortion = currentPortion * portionSize

  let portionArr = []

  for (let i = 1; i <= totalPortion; i++) {
    portionArr.push(i)
  }

  return <div>
    {currentPortion > 1 && <button onClick={() => setCurrentPortion(currentPortion - 1)}>PREV</button> }
    
    {portionArr.filter(item => item <= rightMarginPortion && item >= leftMarginPortion).map(page => { 
      return <span className={currentPage === page && classes.currentPage}
        onClick={() => { updateCurrentPage(page) }}>{page}</span>
    })}
    {totalPortion / 10 >= currentPortion && <button onClick={() => setCurrentPortion(currentPortion + 1)}>NEXT</button>}
  </div>
}

export default Paginator