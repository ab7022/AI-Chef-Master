/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { googleAuthenticate } from "../actions/auth"
import queryString from 'query-string'
 import { connect } from "react-redux"

const Layout = (props) => {

   const location = useLocation()

useEffect(() =>{
    const values = queryString.parse(location.search)
    const state = values.state ? values.state : null
    const code = values.code ? values.code : null
  
    if(state && code){
        props.googleAuthenticate(state,code)
    }
},[location])

  return (
    <div>
     
      {props.children}
    </div>
  )
}

export default connect(null,{googleAuthenticate})(Layout)
