const products = [
    {
        "id": "prod001",
        "title": "Men's Cotton T-Shirt",
        "description": "Breathable cotton t-shirt for daily wear.",
        "price": 599,
        "discount": 10,
        "finalPrice": 539.1,
        "gender": "Men",
        "category": ["T-Shirts", "Casual"],
        "tags": ["cotton", "casual", "summer"],
        "sizes": ["S", "M", "L", "XL"],
        "colors":
        {
            "name": "Black",
            "hex": "#000000",
        }
        ,
        "images": ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUVB9iH-Tl66ztHOGcODlwahLHViqCcrPxz1vQP9DfSyG_zp76K0Ekq1DqYEKwWWrWojC_Rqss6jjPVDArUPhrQdemxKjMFD_l-9zvLnv63tGBQw2Mmbpm","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNFyBhTbug1FZGiZoK9ZbtYN_a3n0JKCUl2dXSLL27qq9L8XFBWIpbDv0NyEg3UW1I3ZcfphFdvb4wl1SOqwxLejb3Ou-u8DfteEWdZIVXkOuF1_zMeLnk3Wmj&usqp=CAc"]
        , "stock": { "S": 10, "M": 12, "L": 5, "XL": 3 },
        "brand": "Puma",
        "material": "Cotton",
        "rating": 4.2,
        "reviewsCount": 78,
        "bestSeller": true,
        "createdAt": "2025-05-09T10:00:00Z",
        "updatedAt": "2025-05-09T10:00:00Z"
    },
    {
        "id": "prod002",
        "title": "Women's Summer Dress",
        "description": "Elegant floral printed dress for summer occasions.",
        "price": 1299,
        "discount": 20,
        "finalPrice": 1039.2,
        "gender": "Women",
        "category": ["Dresses", "Summer"],
        "tags": ["floral", "dress", "summer"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Blue",
            "hex": "#1E90FF",
        }
        ,
        "images": ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNFyBhTbug1FZGiZoK9ZbtYN_a3n0JKCUl2dXSLL27qq9L8XFBWIpbDv0NyEg3UW1I3ZcfphFdvb4wl1SOqwxLejb3Ou-u8DfteEWdZIVXkOuF1_zMeLnk3Wmj&usqp=CAc"]
        , "stock": { "S": 6, "M": 10, "L": 7 },
        "brand": "Zara",
        "material": "Rayon",
        "rating": 4.6,
        "reviewsCount": 92,
        "bestSeller": true,

        "createdAt": "2025-05-08T09:00:00Z",
        "updatedAt": "2025-05-09T09:30:00Z"
    },
    {
        "id": "prod003",
        "title": "Kids Hoodie - Cartoon Print",
        "description": "Warm hoodie with fun cartoon print for kids.",
        "price": 899,
        "discount": 15,
        "finalPrice": 764.15,
        "gender": "Kids",
        "category": ["Hoodies", "Winter"],
        "tags": ["hoodie", "kids", "cartoon"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Yellow",
            "hex": "#FFD700",
        }
        ,
        "images": ["https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIwJcj4ZAMVdpYy48ZNv7lCg7GE4W1AT2dj6GSgwifMgqOTPbRKz6aOqW1pDzOS6oiJCOpt8tZyZOILuk0G6PRcMeAUOZk4KCLNf_Vf4hiFtcQm9sWWS00FQ"]
        , "stock": { "S": 10, "M": 5, "L": 4 },
        "brand": "FirstCry",
        "material": "Fleece",
        "rating": 4.4,
        "reviewsCount": 55,
        "createdAt": "2025-05-07T08:00:00Z",
        "updatedAt": "2025-05-08T12:00:00Z"
    },
    {
        "id": "prod004",
        "title": "Men's Denim Jeans",
        "description": "Classic fit stretchable denim jeans for men.",
        "price": 1499,
        "discount": 25,
        "finalPrice": 1124.25,
        "gender": "Men",
        "category": ["Jeans", "Denim"],
        "tags": ["jeans", "denim", "casual"],
        "sizes": ["M", "L", "XL"],
        "colors":
        {
            "name": "Dark Blue",
            "hex": "#00008B",
        }
        ,
        "images": ["data:image/webp;base64,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"]
        , "stock": { "M": 7, "L": 8, "XL": 6 },
        "brand": "Levi's",
        "material": "Denim",
        "rating": 4.5,
        "reviewsCount": 120,
        "createdAt": "2025-05-06T14:00:00Z",
        "updatedAt": "2025-05-09T14:30:00Z"
    },
    {
        "id": "prod005",
        "title": "Women's Workout Leggings",
        "description": "High-waist stretchable leggings perfect for gym and yoga.",
        "price": 899,
        "discount": 5,
        "finalPrice": 854.05,
        "gender": "Women",
        "category": ["Leggings", "Activewear"],
        "tags": ["gym", "workout", "leggings"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Grey",
            "hex": "#808080",
        }
        ,
        "images": ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxLtJZ_2VcVkhTEdV9ensLAYpQ1RBLoz3-WtC_T8lSXpm2cODtVzjq4gxYNGUBMdiu4PvQe9Z0ITW35_S5dSo2te0UWOusiPZU2SlrjWoiLbmWgmnW-LwwaGFcXZHw6utDrq2XGXY&usqp=CAc"]
        , "stock": { "S": 8, "M": 10, "L": 12 },
        "brand": "Nike",
        "material": "Spandex",
        "rating": 4.3,
        "reviewsCount": 87,
        "createdAt": "2025-05-05T07:00:00Z",
        "updatedAt": "2025-05-06T07:45:00Z"
    },
    {
        "id": "prod006",
        "title": "Men's Formal Shirt",
        "description": "Slim fit cotton formal shirt perfect for office wear.",
        "price": 1199,
        "discount": 10,
        "finalPrice": 1079.1,
        "gender": "Men",
        "category": ["Shirts", "Formal"],
        "tags": ["formal", "office", "shirt"],
        "sizes": ["M", "L", "XL"],
        "colors":
        {
            "name": "White",
            "hex": "#FFFFFF",
        }
        ,
        "images": ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3FE54ucsJWFPdRQb4ktSJmqLgBhj1Vqx09Nn5E32rmUzOkF7aNizYVLimOptFHbWwRiYzZaQh-nDf1eb-lA7_IIbRX3USuVpt5oP1Y9PW"]
        , "stock": { "M": 6, "L": 8, "XL": 4 },
        "brand": "Van Heusen",
        "material": "Cotton",
        "rating": 4.1,
        "reviewsCount": 63,
        "bestSeller": true,

        "createdAt": "2025-05-05T09:30:00Z",
        "updatedAt": "2025-05-06T10:00:00Z"
    },
    {
        "id": "prod007",
        "title": "Women's Kurti Set",
        "description": "Traditional Kurti with leggings and dupatta.",
        "price": 1599,
        "discount": 20,
        "finalPrice": 1279.2,
        "gender": "Women",
        "category": ["Ethnic", "Kurtis"],
        "tags": ["ethnic", "kurti", "traditional"],
        "sizes": ["S", "M", "L", "XL"],
        "colors":
        {
            "name": "Pink",
            "hex": "#FFC0CB",
        }
        ,
        "images": ["https://images.meesho.com/images/products/389072696/ozjhd_1200.jpg"]
        , "stock": { "S": 5, "M": 9, "L": 6, "XL": 4 },
        "brand": "Biba",
        "material": "Cotton Blend",
        "rating": 4.5,
        "reviewsCount": 142,
        "createdAt": "2025-05-04T08:00:00Z",
        "updatedAt": "2025-05-08T11:00:00Z"
    },
    {
        "id": "prod008",
        "title": "Kid's Night Suit Set",
        "description": "Soft cotton nightwear set with cartoon print.",
        "price": 699,
        "discount": 10,
        "finalPrice": 629.1,
        "gender": "Kids",
        "category": ["Nightwear", "Kidswear"],
        "tags": ["nightwear", "kids", "cartoon"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Sky Blue",
            "hex": "#87CEEB",
        }
        ,
        "images": ["https://m.media-amazon.com/images/I/5104uzzTz4L.jpg"]
        , "stock": { "S": 10, "M": 6, "L": 4 },
        "brand": "Hopscotch",
        "material": "Cotton",
        "rating": 4.4,
        "reviewsCount": 40,
        "createdAt": "2025-05-03T10:00:00Z",
        "updatedAt": "2025-05-07T09:30:00Z"
    },
    {
        "id": "prod009",
        "title": "Men's Winter Jacket",
        "description": "Water-resistant padded jacket with zipper.",
        "price": 2499,
        "discount": 30,
        "finalPrice": 1749.3,
        "gender": "Men",
        "category": ["Jackets", "Winter"],
        "tags": ["jacket", "winter", "warm"],
        "sizes": ["M", "L", "XL"],
        "colors":
        {
            "name": "Olive Green",
            "hex": "#808000",
        }
        ,
        "images": ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBWWNqcMVX-bcLDv19gOpZ8msnJw9qjJtfVraD5qXR3H0UJLtuVPQBnl1VO4hzOjtS9LVxKCqvMTx2679N3-1tfn_6iEn80MridSM1ErI"]
        , "stock": { "M": 7, "L": 5, "XL": 3 },
        "brand": "Wildcraft",
        "material": "Polyester",
        "rating": 4.6,
        "reviewsCount": 130,
        "bestSeller": true,
        "createdAt": "2025-05-02T07:30:00Z",
        "updatedAt": "2025-05-05T08:00:00Z"
    },
    {
        "id": "prod010",
        "title": "Women's Denim Jacket",
        "description": "Stylish cropped denim jacket with button closure.",
        "price": 1799,
        "discount": 15,
        "finalPrice": 1529.15,
        "gender": "Women",
        "category": ["Jackets", "Casual"],
        "tags": ["jacket", "denim", "women"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Light Blue",
            "hex": "#ADD8E6",
        }
        ,
        "images": ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbTCoksHpHVsY5QPbo0ttkPBT_3hYG4kXE-pTU2jeiPXsnthHFlWhP75v1SausjVAO7SjZ_aoFnS3A8RNIsQQujCfE4AvMIbsx6ikLoUKmRIw7DRmN57Ey"]
        , "stock": { "S": 5, "M": 7, "L": 6 },
        "brand": "ONLY",
        "material": "Denim",
        "rating": 4.3,
        "reviewsCount": 58,
        "createdAt": "2025-05-01T09:00:00Z",
        "updatedAt": "2025-05-03T10:30:00Z"
    },
    {
        "id": "prod011",
        "title": "Kids School Uniform Set",
        "description": "2-piece school uniform (shirt and shorts).",
        "price": 799,
        "discount": 5,
        "finalPrice": 759.05,
        "gender": "Kids",
        "category": ["Uniforms"],
        "tags": ["school", "uniform", "kids"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Grey",
            "hex": "#B0B0B0",
        }
        ,
        "images": ["https://images.meesho.com/images/products/484710976/ywes3_1200.jpg"]
        , "stock": { "S": 12, "M": 10, "L": 5 },
        "brand": "SchoolMate",
        "material": "Cotton Blend",
        "rating": 4.0,
        "reviewsCount": 24,
        "createdAt": "2025-04-30T06:00:00Z",
        "updatedAt": "2025-05-01T08:00:00Z"
    },
    {
        "id": "prod012",
        "title": "Men's Track Pants",
        "description": "Comfortable track pants with zipper pockets.",
        "price": 999,
        "discount": 10,
        "finalPrice": 899.1,
        "gender": "Men",
        "category": ["Activewear"],
        "tags": ["gym", "track", "pants"],
        "sizes": ["M", "L", "XL"],
        "colors":
        {
            "name": "Black",
            "hex": "#000000",
        }
        ,
        "images": ["data:image/webp;base64,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"]
        , "stock": { "M": 7, "L": 9, "XL": 6 },
        "brand": "Adidas",
        "material": "Polyester",
        "rating": 4.2,
        "reviewsCount": 80,
        "createdAt": "2025-04-29T11:00:00Z",
        "updatedAt": "2025-04-30T13:00:00Z"
    },
    {
        "id": "prod013",
        "title": "Women's Palazzo Pants",
        "description": "Loose-fit printed palazzo pants with elastic waist.",
        "price": 899,
        "discount": 15,
        "finalPrice": 764.15,
        "gender": "Women",
        "category": ["Bottomwear", "Casual"],
        "tags": ["palazzo", "printed", "pants"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Red",
            "hex": "#FF0000",
        }
        ,
        "images": ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVXCoJMDTaPfM5VcBbOLBgXfNlieEVu6KCMYgAOKv3FS8DIpFkH27AkecR8IUzxZM8KTQvk1PYjcfk0nL4Gt1HTwOBHEWxTo_TKESfTx05HulV2LyoBEew5g"]
        , "stock": { "S": 6, "M": 8, "L": 7 },
        "brand": "W for Woman",
        "material": "Rayon",
        "rating": 4.1,
        "reviewsCount": 49,
        "createdAt": "2025-04-28T10:00:00Z",
        "updatedAt": "2025-04-30T11:30:00Z"
    },
    {
        "id": "prod014",
        "title": "Men's Round Neck Sweatshirt",
        "description": "Comfort fit sweatshirt with graphic print.",
        "price": 1299,
        "discount": 20,
        "finalPrice": 1039.2,
        "gender": "Men",
        "category": ["Sweatshirts", "Winter"],
        "tags": ["sweatshirt", "men", "winter"],
        "sizes": ["M", "L", "XL"],
        "colors":
        {
            "name": "Maroon",
            "hex": "#800000",
        }
        ,
        "images": ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTenKjj5IHH-fT1YKQ9c6s57IDIcy65df0rzKjf4IrA3_uSQYWwrBeOEOuYjubQK-sr6evHSQH-DUAcTTOqTBK1DkysnS2Tq8UcWOPx9zLH"]
        , "stock": { "M": 10, "L": 9, "XL": 8 },
        "brand": "H&M",
        "material": "Fleece",
        "rating": 4.3,
        "reviewsCount": 65,
        "createdAt": "2025-04-27T08:00:00Z",
        "updatedAt": "2025-04-29T09:30:00Z"
    },
    {
        "id": "prod015",
        "title": "Women's Tank Top ",
        "description": "Lightweight tank top ideal for summer and yoga.",
        "price": 499,
        "discount": 10,
        "finalPrice": 449.1,
        "gender": "Women",
        "category": ["Tops", "Activewear"],
        "tags": ["tank", "summer", "yoga"],
        "sizes": ["S", "M", "L"],
        "colors":
        {
            "name": "Peach",
            "hex": "#FFDAB9",
        }
        ,
        "images": ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMZ0bWVPFfkpxBfzfr5stkzWx6ZXEwERk8anc3KwN_bcbsh3pr_0u5gX7kXGwrBqdbquvcBoICuT0W0oeGSzXDmSk_QGbiZ31XJLt4AAmKMCannUKvbEzCXQ"]
        , "stock": { "S": 5, "M": 8, "L": 6 },
        "brand": "Zivame",
        "material": "Cotton",
        "rating": 4.2,
        "reviewsCount": 70,
        "createdAt": "2025-04-26T10:00:00Z",
        "updatedAt": "2025-04-27T12:00:00Z"
    }
]

export { products }