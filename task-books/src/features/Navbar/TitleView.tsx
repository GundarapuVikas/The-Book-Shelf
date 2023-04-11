import React from 'react'
// import {updateTitle} from './TitleSlice'
import { useAppDispatch,useAppSelector } from '../../app/hooks'


const TitleView = () => {
    const title=useAppSelector(state=>state.title.title)
  if (title) {
    return (
        <div className="titlebar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2lBH0w7cF548Z7LsmGI8L2Ez6I-aO-j84A&usqp=CAU" alt="" className="logo" />
          <b className='app-title'>{title}</b>
        </div>
    )
  } else {
    return <>Loading...</>
  }
    
}

export default TitleView
