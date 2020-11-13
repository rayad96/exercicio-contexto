import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 

import { Context } from "../../context";
import Ball from './ball';

export default function Home() {
  const { setCount } = useContext(Context)
  
  useEffect(() => {
    setCount((old) => old + 1)
  }, [setCount]);
  
  return (
    <>
      <Ball size={50} color="#ff0000" />
    </>
  )
}