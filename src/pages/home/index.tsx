import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 

import { Context } from "../../context";

export default function Home() {
  const { setCount } = useContext(Context)
  
  useEffect(() => {
    setCount((old) => old + 1)
  }, [setCount]);
  
  return <NavLink to="/introduction">ir para introdução</NavLink>
}