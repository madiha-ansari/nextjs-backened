import React from 'react';

const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/product");
  if (!response.ok) throw new Error("API NOT FOUND");
  const result = await response.json();
  return result;
};

export default async function Home() {
  const product = await getAllProducts();
  console.log(product);

  return (
    <div>
      <h1>NEXTJS API ROUTES</h1>
      {product?.data?.map((prod: any) => {
        return (
          <div key={prod?.id}>
            <h2>Product: {prod?.title}</h2>
            <p>Description: {prod?.description}</p>
          </div>
        );
      })}
    </div>
  );
}
