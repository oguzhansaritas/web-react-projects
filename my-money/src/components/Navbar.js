import styles from "./Navbar.module.css"
import React from 'react'
import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout.js"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar() {

  const { logout } = useLogout()
  const {user} = useAuthContext()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}

            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li>
                  <button className="btn" onClick={logout}>Logout</button>
                </li>
              </>
            )}
        </ul>

    </nav>
  )
}
