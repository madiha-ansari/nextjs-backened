import React from 'react'

const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/product")
  if (!response.ok)
    throw new Error("API NOT FOUND ")
  const result = await response.json()
  return result
}

const page = () => {
  const product = getAllProducts()
  console.log(product);

  return (
    <div>
      NEXTJS API ROUTES
    </div>
  )
}

export default page
