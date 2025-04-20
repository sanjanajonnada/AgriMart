// navigation Data
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Best Selling",
      url: "/best-selling",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Events",
      url: "/events",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Free Shipping",
      Description: "From all orders over 100$",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H5.63636V24.1818H35"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M34.9982 1H11.8164V18H34.9982V1Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M11.8164 7.18164H34.9982"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Quality Products",
      Description: "Certified Products",
      icon: (
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M30.7 2L29.5 10.85L20.5 9.65"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Secure Payments",
      Description: "100% protected payments",
      icon: (
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
  ];
  
  // categories data
  export const categoriesData = [
    {
      id: 1,
      title: "Seeds",
      subTitle: "Quality agricultural seeds",
      image_Url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
    },
    {
      id: 2,
      title: "Soil & Fertilizers",
      subTitle: "Premium soil and fertilizers",
      image_Url: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe",
    },
    {
      id: 3,
      title: "Tools",
      subTitle: "Gardening and farming tools",
      image_Url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category: "Seeds",
      name: "Organic Tomato Seeds",
      description: "High-yield organic tomato seeds suitable for various climates",
      image_Url: [
        {
          public_id: "test",
          url: "https://example.com/tomato-seeds.jpg",
        }
      ],
      shop: {
        name: "Organic Seeds Co.",
        shop_avatar: {
          public_id: "test",
          url: "https://example.com/shop-avatar.png",
        },
        ratings: 4.8,
      },
      price: 12.99,
      discount_price: 10.99,
      rating: 4.7,
      total_sell: 120,
      stock: 50,
    },
    {
      id: 2,
      category: "Soil & Fertilizers",
      name: "Premium Potting Mix",
      description: "Rich potting soil with organic fertilizers and nutrients",
      image_Url: [
        {
          public_id: "test",
          url: "https://example.com/potting-mix.jpg",
        }
      ],
      shop: {
        name: "Garden Essentials",
        shop_avatar: {
          public_id: "test",
          url: "https://example.com/shop-avatar.png",
        },
        ratings: 4.5,
      },
      price: 24.99,
      discount_price: 19.99,
      rating: 4.6,
      total_sell: 85,
      stock: 30,
    },
    {
      id: 3,
      category: "Tools",
      name: "Professional Garden Tool Set",
      description: "Complete set of essential gardening tools",
      image_Url: [
        {
          public_id: "test",
          url: "https://example.com/garden-tools.jpg",
        }
      ],
      shop: {
        name: "Tools Master",
        shop_avatar: {
          public_id: "test",
          url: "https://example.com/shop-avatar.png",
        },
        ratings: 4.6,
      },
      price: 49.99,
      discount_price: 39.99,
      rating: 4.8,
      total_sell: 75,
      stock: 20,
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "About us",
      link: "/about"
    },
    {
      name: "Careers",
      link: "/careers"
    },
    {
      name: "Store Locations",
      link: "/stores"
    },
    {
      name: "Our Blog",
      link: "/blog"
    },
    {
      name: "Reviews",
      link: "/reviews"
    },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Seeds Catalog",
      link: "/seeds"
    },
    {
      name: "Soil & Fertilizers",
      link: "/soil-fertilizers"
    },
    {
      name: "Gardening Tools",
      link: "/tools"
    },
    {
      name: "Seasonal Guide",
      link: "/guide"
    },
    {
      name: "Growing Tips",
      link: "/tips"
    },
  ];
  
  export const footerSupportLinks = [
    {
      name: "FAQ",
      link: "/faq"
    },
    {
      name: "Reviews",
      link: "/reviews"
    },
    {
      name: "Contact Us",
      link: "/contact"
    },
    {
      name: "Shipping",
      link: "/shipping"
    },
    {
      name: "Live chat",
      link: "/chat"
    },
  ];
  