import React from 'react'

const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/product")
  if (!response.ok)
    throw new Error("API NOT FOUND ")
  const result = await response.json()
  return await result
}

// const page  = () => {
  export default async function Home(){
  const product = await getAllProducts()
  console.log(product);
  return (
    <div>
      NEXTJS API ROUTES
    </div>
  )
}

