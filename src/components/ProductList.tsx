import React, { useEffect, useState } from 'react'



const ProductList = ({catagory} : { catagory: string }) => {
    const[products, setProduct] = useState<string[]>([])

//callback function to get data from server
    useEffect(() => {
      console.log('Fetching product in', catagory);
      setProduct(['Clothing', 'Houshold'])
      
    }, [catagory])
  return (
    <div>ProductList</div>
  )
}

export default ProductList