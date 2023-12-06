import React from 'react'
import { useGetAllUsersQuery } from '../features/auth/authApi';
import { useGetAllProductsQuery } from '../features/product/productApi';

const Home = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  if (isLoading) {
    return <h1>loading...</h1>
  }
  console.log(data);
  return (
    <div>
      <p>Homesss</p>
    </div>
  )
}

export default Home
