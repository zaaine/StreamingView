/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/09/2026 10:11:43
*/
import React, { FC, useEffect } from 'react';
import './Header.css';


interface HeaderProps {
 
}


const Header : FC<HeaderProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Header">
          Header Component
      </div>
  );
}

export default Header;