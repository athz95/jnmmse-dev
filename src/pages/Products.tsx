import React, { useEffect, useState } from 'react'
import { BodyWrapper, MainWrapper } from '../components/commonStyles'
import Header from '../components/Header'
import { ContactDetailsWrapper, ProductsRow } from './Homepage'
import ContactDetails from '../components/ContactDetails'
import FooterHeader from '../components/FooterHeader'
import styled from 'styled-components'
import Product from '../components/Product'
import ProductSidebar from '../components/ProductSidebar'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
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
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        client.fetch(feedQuery).then((data) => {
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        }).catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        handleCategoryFilter(id);
    }, [id])

    const filterProductsByCategoryTitle = (products: any, categoryTitle: any) => {
        return products.filter((product: { category: string | any[] }) => {
            return product.category.includes(categoryTitle);
        });
    };

    const handleCategoryFilter = (categoryId: any) => {
        if (categoryId) {
            const filteredProducts = filterProductsByCategoryTitle(products, categoryId);
            setFilteredProducts(filteredProducts);
        } else {
            // Reset the filteredProducts array if no category is selected
            setFilteredProducts(products);
        }
    };



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

                <FooterHeader />

            </BodyWrapper>
        </MainWrapper>
    )
}

export default Products

const ProductsTopSectionWrap = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url("https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-medical-euqipment3.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    & h4 {
        font-size: 50px;
        color: #ffffff;
        font-weight: 600;
    }
`

const ProductsBodySection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: rgb(249 250 251);
`

const ProductsListingSection = styled.div`
   width: 85%;
   height: auto;
   background-color: ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    gap: 10px;

`
const ProductsSidebarSection = styled.div`
   width: 15%;
   height: 98vh;
   background-color:#ffffff;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   overflow-y: auto;
`