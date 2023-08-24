import React, { useEffect, useState } from 'react'
import { BodyWrapper, MainWrapper } from '../components/commonStyles'
import Header from '../components/Header'
import { ContactDetailsWrapper, ProductsRow } from './Homepage'
import ContactDetails from '../components/ContactDetails'
// import FooterHeader from '../components/FooterHeader'
import styled from 'styled-components'
import Product from '../components/Product'
import ProductSidebar from '../components/ProductSidebar'
import Spinner from '../components/Spinner'
// import { useParams } from 'react-router-dom'
import { client } from "../client";
import { feedQuery } from "../utils/categoryData";

type productTypes = {
    _id?: string;
    destination?: string;
    image: any;
    title?: string;
}


const Products = () => {
    const [loading, setLoading] = useState(false);
    // const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    // const { id } = useParams();

    // const filterProductsByCategoryTitle = (products: any, categoryTitle: any) => {
    //     return products.filter((product: { category: string | any[] }) => {
    //         return product.category.includes(categoryTitle);
    //     });
    // };


    // const handleCategoryFilter = (categoryId: any) => {
    //     if (categoryId) {
    //         const filteredProducts = filterProductsByCategoryTitle(products, categoryId);
    //         setFilteredProducts(filteredProducts);
    //     } else {
    //         // Reset the filteredProducts array if no category is selected
    //         setFilteredProducts(products);
    //     }
    // };

    useEffect(() => {
        setLoading(true);
        client.fetch(feedQuery).then((data) => {
            // setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        }).catch((err) => console.error(err));
    }, []);

    // useEffect(() => {
    //     handleCategoryFilter(id);
    // }, [id,])






    return (
        <MainWrapper>
            <Header />
            <BodyWrapper>
                <ProductsTopSectionWrap>
                    <h4>Products</h4>
                </ProductsTopSectionWrap>
                <ProductsBodySection>
                    <ProductsSidebarSection>
                        <ProductSidebar />
                    </ProductsSidebarSection>
                    <ProductsListingSection>
                        <ProductsRow>
                            {loading ? <Spinner /> :
                                <>
                                    {filteredProducts.map((product: productTypes) => (
                                        <Product
                                            key={product._id}
                                            productImage={product?.image?.asset?.url}
                                            productName={product.title}
                                            productUrl={product.destination}
                                        />
                                    ))
                                    }
                                </>
                            }
                        </ProductsRow>
                    </ProductsListingSection>
                </ProductsBodySection>
                <ContactDetailsWrapper>
                    <ContactDetails />
                </ContactDetailsWrapper>

                {/* <FooterHeader /> */}

            </BodyWrapper>
        </MainWrapper>
    )
}

export default Products

const ProductsTopSectionWrap = styled.div`
    width: 100%;
    height: 50vh;
    /* background-image: url("https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-medical-euqipment3.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    background: rgb(224,236,255);
    background: linear-gradient(41deg, rgba(224,236,255,1) 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    & h4 {
        font-size: 50px;
        color: #ffffff;
        font-weight: 600;
        margin: 80px 0px 0px;
    }
`

const ProductsBodySection = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    /* background-color: rgb(249 250 251); */
    margin: auto;
    gap: 3%;
`

const ProductsListingSection = styled.div`
   width: 75%;
   height: auto;
   background-color: ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 25px 0px;

`
const ProductsSidebarSection = styled.div`
   width: 20%;
   height: 98vh;
   background-color:#ffffff;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   overflow-y: auto;
   margin: 25px 0px;
`