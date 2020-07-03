import React, { useState } from 'react';
import s from './paginator.module.css'

const Paginator =({totalCountPage, AllPage, onClickPage, UsersPageCount }) => {
   let pageNum = [];
   for (let i = 1; i <= Math.ceil(totalCountPage / AllPage); i++) {
      pageNum.push(i)

   }


   let countNum = 10;
   let [paginatorPage, setPaginatorCount] = useState(1);
   let leftGran = paginatorPage * countNum - countNum;
   let rightGran = paginatorPage * countNum;

   const paginatorGran = (e) => {
      if (+e.target.id) {
         setPaginatorCount(paginatorPage + 1);
         leftGran = + countNum;
         rightGran = +countNum;
      }
      else {
         setPaginatorCount(paginatorPage - 1);
         leftGran = - countNum;
         rightGran = -countNum;
      }

   }
   return <div className={s.pagPadding}>


      <span className={totalCountPage && s.pagination }>
         {
            leftGran > 0 &&
            <span className={s.pagSpan} id='0' onClick={paginatorGran}><i className={s.left}></i></span>}
         {
            pageNum.map(p => {

               if (p >= leftGran && p <= rightGran) {
                  return (
                     <span key={p} className={UsersPageCount === p ? s.pageCount : undefined}
                        onClick={() => { onClickPage(p) }}
                     ><span className={s.cursor}>{p} </span></span>
                  )
               }
            })

         }
         {
            rightGran < pageNum.length &&
            <i className={s.right} id='1' onClick={paginatorGran}></i>
         }
      </span>
   </div>
}

export default  React.memo(Paginator)