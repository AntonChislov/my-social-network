import React from "react";
import classes from './Paginator.module.css'

const Paginator = ({countPage, currentPage, updateCurrentPage}) => {

  let totalPage = Math.ceil(countPage / 1000)

  let pageArr = []

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i)
  }

  return <div>
    {pageArr.map(page => {
      return <span className={currentPage === page && classes.currentPage}
        onClick={() => { updateCurrentPage(page) }}>{page}</span>
    })}
  </div>
}

export default Paginator