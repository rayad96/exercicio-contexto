import React, { useContext } from "react";
import { Context } from "../../context";

export default function Introduction() {
  const { count } = useContext(Context)
  return <h1>olá mundo: {count}</h1>
}