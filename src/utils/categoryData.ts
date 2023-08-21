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
    title
  }`;
  
  
  

  

  