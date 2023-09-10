import  {useState,useEffect} from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { productCategoryQuery } from '../utils/data';
import { client } from '../client';
import { urlFor } from "../client";


const ProductSidebarMobile = () => {

    const [categoriesData, setCategoriesData] = useState([])

    useEffect(() => {
        client
          .fetch(productCategoryQuery)
          .then((data) => {
             // Reverse the order of the data array
            const reversedData = data.slice().reverse();
            setCategoriesData(reversedData);
          })
          .catch((err) => console.error(err));
      }, []);

  return (
    <ProductSidebarWrap>
        <ProductCategories>
         <NavLink to={'/products'}  className={({ isActive }) => isActive ? "isActiveStyleHead" : "isNotActiveStyleHead"}>All Products</NavLink>
        {categoriesData.map((category:any, index) => (
            <>
                <NavLink 
                    to={`/products/${category.title}`}   
                    className={({ isActive }) => isActive ? "isActiveStyle" : "isNotActiveStyle"}
                    key={index}
                >   <img src={category.image ? urlFor(category.image)?.width(250)?.url() : ""} alt="" /> {category.title.replace(/-/g, ' ')}</NavLink>
            </>
        ))}
        </ProductCategories>
    
    </ProductSidebarWrap>
  )
}

export default ProductSidebarMobile;


const ProductSidebarWrap = styled.div`
     width: 100%;
     height: auto;
     display: flex;
     justify-content: flex-start;
     padding: 0px 0px 10px 0px;
     overflow-x: auto;
`

const ProductCategories = styled.div`
     display: flex;
     align-items: center;
     justify-content: flex-start;
     padding: 30px 7px 10px 7px;
     gap: 10px;


     & .isActiveStyle {
            display: flex;
            align-items: center;
            padding: 5px 5px;
            gap: 3px;
            font-size: 16px;
            color: #000000;
            font-weight: bolder;
            border-bottom: 5px solid rgba(102,168,201,1);
            transition: all ease-in-out;
            transition-duration: 200ms;
            text-transform: capitalize;
            text-decoration: none;
            width: auto;
            min-width: 23%;
            justify-content: center;
 

            & img {
               width: 35px;
               height: 35px;
               object-fit: contain;
               background-color: #ffffff;
               border-radius: 50px;
               padding: 5px;
            }
        
        }

     & .isActiveStyleHead {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 5px;
            gap: 3px;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
            text-decoration: none;
            transition: all ease-in-out;
            transition-duration: 200ms;
            text-transform: capitalize;
            text-decoration: none;
            width: auto;
            min-width: 11%;
     }
     
     & .isNotActiveStyle {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 5px;
            gap: 3px;
            font-size: 16px;
            color: gray;
            text-decoration: none;
            text-transform: capitalize;
            width: auto;
            min-width: 22%;
            
            & img {
                width: 35px;
               height: 35px;
               object-fit: contain;
               background-color: #ffffff;
               border-radius: 50px;
               padding: 5px;
            }
     }

     & .isNotActiveStyleHead {
            display: flex;
            align-items: center;
            padding: 0 5px;
            gap: 3px;
            font-size: 20px;
            color: gray;
            text-decoration: none;
            text-transform: capitalize;
            width: auto;
            min-width: 11%;
     }
`
