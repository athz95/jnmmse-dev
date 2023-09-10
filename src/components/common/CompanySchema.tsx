import React from 'react';
import { Helmet } from 'react-helmet';

const CompanySchema:any = () => {
    const schema =  {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "JNM Medical Surgical Equipment Trading LLC",
            "description": "Supplier of laboratory, medical, and surgical equipment, pharmaceutical products, and disposables in Dubai, UAE. Serving Government and Private Healthcare sectors.",
            "url": "https://www.jnmmse.com",
            "telephone": "+971 547720629",
            "email": "info@jnmmse.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Flat 204, Ruqaya Saeed",
              "addressLocality": "Hor Al Anz",
              "addressRegion": "Dubai",
              "postalCode": "125212",
              "addressCountry": "United Arab Emirates",
              "openingHours": "Mo-Fr 08:00-17:00",
            },
            "itemListElement":
                [
                    {
                        "@type": "ListItem",
                        "item": "https://www.jnmmse.com",
                        "name": "Homepage",
                        "position": 1
                    },
                  ]
        }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default CompanySchema;