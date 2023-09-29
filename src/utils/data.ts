 export const feedQuery = `*[_type == "product"] | order(_createdAt desc) {
    image{
        asset->{
            url
        }
    },
    _id,
    destination,
    title,
    "category": category[]->title 
}`;
  

  
  
export const searchQuery = (searchTerm: any) => {
    const query = `*[_type == "product" && (title match '${searchTerm}*') || (category[]->title match '${searchTerm}*') || (about match '${searchTerm}*')]{
        image{
            asset->{
                url
            }
        },
        _id,
        destination,
        title,
        "category": category[]->title 
    }`;
    return query;
};

  export const productCategoryQuery = `*[_type == "productCategory"] | order(_createdAt desc) {
    title,
    image{
        asset->{
            url
        }
    },
  }`;

  export const companyInfoQuery = `*[_type == "companyInfo"] | order(_createdAt desc) {
    mobile,
    email,
    address,
    whatsappNumber,
    landlineNumber,
    productsBrochure
  }`;


export const companyBrochureQuery = `*[_type == "companyInfo"] | order(_createdAt desc) {
    "brochure": productsBrochure.asset->url
}`;


  export const homepageBanners = `*[_type == "homepageBanners"] | order(_createdAt desc) {
    image,
    alt,
    redirectionLink,
    type
  }`;
  
  
  

  

  