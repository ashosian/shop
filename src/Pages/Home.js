import React from 'react'
import { useGetAllUsersQuery } from '../features/auth/authApi';
import { useGetAllProductsQuery } from '../features/product/productApi';
import { useSelector } from 'react-redux';

const Home = () => {

  const { userInfo } = useSelector((store) => store.userInfo);
  console.log(userInfo);
  const { data, isLoading, isError, error } = useGetAllProductsQuery(userInfo && userInfo?.token);

  if (isLoading) {
    return <h1>loading...</h1>
  }
  console.log(data);
  return (
    <>
      <div className='grid grid-cols-4'>
        {
          data?.map((d) => {
            return <div className='gap-5 p-10 m-5 transition-all delay-75 shadow-lg border-black hover:scale-90 cursor-pointer delay-90' key={d.id}>
              <div className=' flex flex-col items-center '>

                <p> name: {`${d.name}`}</p>
                <p> price: {`${d.price}`}</p>
                <p> unit: {`${d.unit}`}</p>
                <p> category: {`${d.category}`}</p>

              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Home
