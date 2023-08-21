import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { productCategoryQuery } from '../utils/categoryData';
import { client } from '../client';

type Props = {}

const ProductSidebar = (props: Props) => {

    const [categoriesData, setCategoriesData] = useState([])

    useEffect(() => {
        client.fetch(productCategoryQuery).then((data) => {
            setCategoriesData(data);
        }).catch((err) => console.error(err));
    },[])

  return (
    <ProductSidebarWrap>
        <ProductSidebarHead>Discover Categories</ProductSidebarHead>
        <ProductCategories>
         <NavLink to={'/products'}  className={({ isActive }) => isActive ? "isActiveStyleHead" : "isNotActiveStyleHead"}>All Products</NavLink>
        {categoriesData.map((category:any) => (
            <NavLink 
                to={`/products/${category.title}`}   
                className={({ isActive }) => isActive ? "isActiveStyle" : "isNotActiveStyle"}
                key={category.title}
            >{category.title}</NavLink>
        ))}
        </ProductCategories>
    
    </ProductSidebarWrap>
  )
}

export default ProductSidebar


const ProductSidebarWrap = styled.div`
     width: 100%;
     height: auto;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     padding: 0px 0px 10px 0px;
     overflow-y: auto;
     min-width: 210px;
`

const ProductSidebarHead = styled.h4`
    font-size: 1.3rem;
    text-align: center;
    color: #000000;
    font-weight: 600;
    padding: 10px 0px;
`
const ProductCategories = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: flex-start;
     padding: 10px 15px;
     gap: 10px;
     /* border: 1px solid #000000; */


     & .isActiveStyle {
            display: flex;
            align-items: center;
            padding: 5px 5px;
            gap: 3px;
            font-size: 18px;
            color: #000000;
            font-weight: bolder;
            border-right: 2px solid black;
            transition: all ease-in-out;
            transition-duration: 200ms;
            text-transform: capitalize;
            text-decoration: none;
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;     }

     & .isActiveStyleHead {
            display: flex;
            align-items: center;
            padding: 0 5px;
            gap: 3px;
            font-size: 18px;
            color: #000000;
            /* font-weight: bolder; */
            text-decoration: none;
            /* border-right: 2px solid black; */
            transition: all ease-in-out;
            transition-duration: 200ms;
            text-transform: capitalize;
            text-decoration: none;
            width: 100%;
            /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;     } */
     }
     
     & .isNotActiveStyle {
            display: flex;
            align-items: center;
            padding: 0 5px;
            gap: 3px;
            font-size: 18px;
            color: gray;
            text-decoration: none;
            text-transform: capitalize;
            width: 98%;
            
            &:hover{
                color: #000000;
                transition: all ease-in-out;
                transition-duration: 200ms;
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
            width: 98%;
            
            &:hover{
                color: #000000;
                transition: all ease-in-out;
                transition-duration: 200ms;
            }
     }
`
