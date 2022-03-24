import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

export default function AdminPrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }}
    ></Route>
  )
}