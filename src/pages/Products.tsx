import  { useCallback, useEffect, useState } from 'react'
import { BodyWrapper, MainWrapper } from '../components/commonStyles'
import Header from '../components/common/Header'
import { ContactDetailsWrapper } from './Homepage'
import ContactDetails from '../components/common/ContactDetails'
import styled from 'styled-components'
import Product from '../components/Product'
import ProductSidebar from '../components/ProductSidebar'
import Spinner from '../components/common/Spinner'
import { client } from "../client";
import { feedQuery } from "../utils/data";
import WhatsappIco from '../components/WhatsAppIco'
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import ProductSidebarMobile from '../components/ProductSidebarMobile'
import { Helmet } from 'react-helmet'
import CompanySchema from '../components/common/CompanySchema'

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
    const [itemOffset, setItemOffset] = useState(0);

    const { id } = useParams();

    const filterProductsByCategoryTitle = (products: any, categoryTitle: any) => {
        return products.filter((product: { category: string | any[] }) => {
            return product.category.includes(categoryTitle);
        });
    };

  const handleCategoryFilter = useCallback(
    (categoryId:any) => {
      if (categoryId) {
        const filteredProducts = filterProductsByCategoryTitle(products, categoryId);
        setFilteredProducts(filteredProducts);
      } else {
        // Reset the filteredProducts array if no category is selected
        setFilteredProducts(products);
      }
    },
    [products]
  );

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        client.fetch(feedQuery).then((data) => {
            // Reverse the order of the data array
            const reversedData = data.slice().reverse();
            setProducts(reversedData);
            setFilteredProducts(reversedData);
            setLoading(false);
        }).catch((err) => console.error(err));
    }, []);


    useEffect(() => {
        handleCategoryFilter(id);
    }, [id, handleCategoryFilter]);


    //pagination 
    const itemsPerPage = 9;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageClick = (event:any) => {
        window.scrollTo(10, 0);
        const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
        setItemOffset(newOffset);
      };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Products | Quality Medical Supplies and Pharmaceuticals | JNM Medical Trading LLC</title>
                <meta name="description" content="With a strong focus on quality and innovation, JNM Medical Trading LLC aims to become the leading medical equipment provider in the Middle East. Trust us for excellence." />
                <meta name="keywords" content="Private healthcare equipment Dubai, Government healthcare supplies UAE, Innovative medical products UAE, Dubai healthcare solutions"></meta>
            </Helmet>
            <CompanySchema />
  
            <MainWrapper>
                <Header />
                <BodyWrapper>
                    <ProductsTopSectionWrap>
                        <h4>Products</h4>
                    </ProductsTopSectionWrap>
                    <div className='mobileSidebar'>
                    <ProductSidebarMobile />
                    </div>
                
                    <ProductsBodySection>
                        <ProductsSidebarSection className='desktopSidebar'>
                            <ProductSidebar />
                        </ProductsSidebarSection>
                        <ProductsListingSection>
                            <ProductsRow>
                                {loading ? <Spinner /> : 
                                    <>
                                        {currentItems.map((product: productTypes) => (
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
                                {filteredProducts.length === 0 && <h5>No Products Found for <span>{id?.replace(/-/g, ' ')} </span>Category !</h5> }
                            </ProductsRow>
                            <PaginationWrapper>
                                <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                                />
                            </PaginationWrapper>
                        </ProductsListingSection>
                    </ProductsBodySection>
                    <ContactDetailsWrapper>
                        <ContactDetails />
                    </ContactDetailsWrapper>
                    <WhatsappIco />
                </BodyWrapper>
            </MainWrapper>
        </>
    )
}

export default Products

const ProductsTopSectionWrap = styled.div`
    width: 100%;
    height: 50vh;
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
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

`
const ProductsSidebarSection = styled.div`
   width: 20%;
   height: 70vh;
   background-color:#ffffff;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   overflow-y: auto;
   margin: 25px 0px;

    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }
    &::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
	    border-radius: 10px;
        background-color: rgba(102,168,201,1)
    }
`

const ProductsRow = styled.div`
  width: 85% !important;
  height: auto;
  margin: 20px 0px;
  display: flex; 
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  & h5 {
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-align: center;

    & span {
        color: darkslateblue;
        font-weight: bold;
    }
  }
`

const PaginationWrapper = styled.div` 
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;


       & ul {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 20px;
            cursor: pointer;
            justify-content: flex-start;
            flex-wrap: wrap;

            & li::marker{
                content: "";
            }

            & li {
                font-size: 13px;
                border: 1px solid #0000003b;
                padding: 5px 10px;
                text-transform: capitalize;
                font-weight: 600;
                color: #474545;
            }

            & .previous {
                font-size: 13px;
                border: 1px solid #0000003b;
                padding: 5px 10px;
                text-transform: capitalize;
                font-weight: 600;
            }
            & .next {
                font-size: 13px;
                border: 1px solid #0000003b;
                padding: 5px 10px;
                text-transform: capitalize;
                font-weight: 600;
            }
            & .selected {
                font-size: 15px;
                border: 2px solid rgba(102,168,201,1);
                padding: 5px 10px;
                text-transform: capitalize;
                font-weight: 600;
                color: black;
            }

            @media screen and (max-width: 568px) {
               gap: 5px;
               padding: 0px 5px;
            }
        }
`