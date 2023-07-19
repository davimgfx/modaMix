const PRODUCT_DATA = [
    {
        category: 'Women',
        items: [
          {
            id: 1,
            name: 'Zebra Dress',
            imageUrl: 'https://i.ibb.co/jZQ22Qz/pexels-anna-shvets-5034413.jpg',
            imageUrl2: "https://i.ibb.co/zmSBwWb/pexels-anna-shvets-5034410.jpg",
            imageUrl3: "https://i.ibb.co/0sZsJ08/pexels-anna-shvets-5034420-1.jpg",
            price: 25,
            offer: {
                available: true,
                price: 23,
            },
            isTrending: true,
            about: "The Zebra Dress exudes an enchanting blend of untamed elegance and contemporary allure. Crafted with meticulous attention to detail, this captivating dress showcases the striking beauty of zebra patterns in a fashion-forward way. The bold black and white stripes intertwine harmoniously, creating a visually arresting visual effect that demands attention. Designed with a modern silhouette, the Zebra Dress features a tailored fit that accentuates the natural curves of the body. The sleek, sleeveless bodice gracefully transitions into a flowing, A-line skirt, offering both comfort and freedom of movement. The high-quality fabric drapes beautifully, lending a sense of effortless sophistication to the overall design. The contrasting zebra stripes make a bold statement, drawing inspiration from the wild and untamed spirit of nature. The monochromatic color palette adds a touch of timeless glamour, ensuring that this dress stands out in any setting. Whether worn for a glamorous evening event or a chic daytime affair, the Zebra Dress effortlessly commands attention and makes a stylish statement. To complete the look, consider pairing this striking dress with sleek black heels and minimalistic accessories. Let the dress take center stage and allow its unique pattern to make a statement. Embrace your inner fashionista with the captivating allure of the Zebra Dress and step into a world of bold and fearless style."
          },
          {
            id: 2,
            name: 'Pink Dress',
            imageUrl: 'https://i.ibb.co/5GXXK7N/pexels-yuri-manei-2235073.jpg',
            image2: "https://i.ibb.co/LtSCx2Z/pexels-yuri-manei-2235071.jpg",
            price: 35,
            offer: {
                available: true,
                price: 32,
            },
            isTrending: true,
            about: "The Pink Dress is a stunning embodiment of feminine grace and charm. With its tailored silhouette and flowing skirt, it enhances the body's natural curves beautifully. The soft blush pink color adds a romantic touch, while intricate lace detailing and floral appliqués adorn the dress, creating an enchanting and captivating look. Suitable for various occasions, this dress guarantees all eyes on you. Complete the look with complementary heels and delicate jewelry, allowing the dress to speak for itself and exude confidence and elegance. Indulge in the timeless beauty of the Pink Dress and make a lasting impression wherever you go."
          },
        ],
      },
      {
        category: 'Men',
        items: [
          {
            id: 3,
            name: 'Black Jacket',
            imageUrl: 'https://i.ibb.co/v1xw4Ys/pexels-igor-justo-12407948.jpg',
            imageUrl2: "https://i.ibb.co/PCdB9RK/pexels-igor-justo-12407947.jpg",
            price: 225,
            offer: {
                available: false,
                price: "",
            },
            isTrending: true,
            about: "The Black Jacket showcases attention to detail with its intricate stitching and fine craftsmanship. It boasts a classic collar, a full front zipper, and strategically placed pockets for both functionality and aesthetic appeal. The jacket is lined with a soft and comfortable fabric, ensuring warmth and comfort during cooler seasons. This timeless piece is perfect for various occasions, whether it's a casual day out, a night on the town, or a professional setting. Its versatility allows it to be paired with jeans for a casual look or dressed up with trousers for a more polished appearance."
          },
          {
            id: 4,
            name: 'Criciúma T-shirt',
            imageUrl: 'https://i.ibb.co/2ndP920/pexels-carlos-de-jesus-5653698.jpg',
            image2: "https://i.ibb.co/MsKSVNP/pexels-carlos-de-jesus-5653607.jpg",
            imageUrl3: "https://i.ibb.co/NKq3JHP/pexels-carlos-de-jesus-5653612.jpg",
            price: 135,
            offer: {
                available: true,
                price: 132,
            },
            isTrending: false,
            about: "The Criciúma T-shirt features a bold and eye-catching design that showcases the city's identity. It proudly displays the name Criciúma in a striking font, accompanied by iconic symbols or imagery associated with the city. The colors used are chosen to reflect the energy and spirit of Criciúma, creating a visually appealing and engaging look. Made from soft and breathable fabrics, this t-shirt ensures a comfortable and relaxed fit for everyday wear. Its durable construction guarantees long-lasting quality, allowing fans to show their support for Criciúma with pride. Whether worn during sporting events, casual outings, or as a symbol of hometown pride, the Criciúma T-shirt is a versatile and fashionable choice. It pairs effortlessly with jeans, shorts, or skirts, providing a laid-back yet stylish ensemble.",
          },
        ],
      },
      {
        category: 'Children',
        items: [
          {
            id: 5,
            name: 'Jumpsuit',
            imageUrl: 'https://i.ibb.co/4N9msvH/pexels-carlos-de-jesus-5679152.jpg',
            imageUrl2: "https://i.ibb.co/PZ4HfJ6/pexels-carlos-de-jesus-5679150.jpg",
            price: 125,
            offer: {
                available: false,
                price: "",
            },
            isTrending: false,
            about: "The jumpsuit is a versatile and fashionable one-piece garment that combines style and practicality. This trendy attire features a top and pants seamlessly connected, creating a sleek and streamlined look. Crafted from high-quality fabrics, the jumpsuit offers both comfort and durability. It is available in a variety of colors, patterns, and designs, catering to different fashion preferences. Whether you prefer a classic solid-colored jumpsuit or a bold and vibrant pattern, there's a jumpsuit to suit every taste."
          },
          {
            id: 6,
            name: 'White T-shirt',
            imageUrl: 'https://i.ibb.co/cTXDzH7/pexels-ike-louie-natividad-3229335.jpg',
            image2: "https://i.ibb.co/1G6vbgM/pexels-ike-louie-natividad-3229334.jpg",
            price: 135,
            offer: {
                available: true,
                price: 132,
            },
            isTrending: true,
            about: "The white shirt is a timeless and versatile wardrobe staple that exudes elegance and sophistication. Crafted from crisp and high-quality fabric, this classic piece is a symbol of refined style. The white shirt boasts a clean and minimalistic design, featuring a button-down front, a pointed collar, and long sleeves. Its simplicity allows it to effortlessly transition from casual to formal settings, making it suitable for a wide range of occasions.",
          },
        ],
      },
      {
        category: 'Accessories',
        items: [
          {
            id: 7,
            name: 'Neves Purse',
            imageUrl: 'https://i.ibb.co/SVXcQm2/pexels-hassan-ouajbir-1306262.jpg',
            imageUrl2: "https://i.ibb.co/KGmwZDk/pexels-cats-coming-1204459.jpg",
            price: 1125,
            offer: {
                available: false,
                price: "",
            },
            isTrending: true,
            about: "The Neves Purse features a compact yet spacious design, providing ample storage for your essentials. It includes multiple compartments, such as zippered pockets, card slots, and a main compartment, allowing you to organize your belongings with ease. Whether you need to carry your phone, wallet, keys, or other small items, the Neves Purse offers convenient storage options. The purse showcases a sleek and timeless aesthetic, making it suitable for various occasions. Its clean lines and elegant silhouette exude a sense of sophistication, elevating any outfit. The choice of colors and finishes adds a touch of versatility, allowing you to select a Neves Purse that complements your personal style."
          },
          {
            id: 8,
            name: 'Blue Purse',
            imageUrl: 'https://i.ibb.co/HqP14cB/pexels-marcus-silva-12774441.jpg',
            image2: "https://i.ibb.co/Z2C01c3/pexels-marcus-silva-12774439.jpg",
            price: 1335,
            offer: {
                available: true,
                price: 1302,
            },
            isTrending: false,
            about: "The Blue Purse features a vibrant blue color that captures attention and makes a bold fashion statement. The shade of blue can range from deep navy to bright turquoise, depending on personal preference. This versatile color complements a variety of outfits and adds a touch of personality to your ensemble. Crafted from high-quality materials, the Blue Purse boasts durability and longevity. It is designed to withstand daily use and maintain its shape and appearance over time. The purse is carefully constructed with attention to detail, ensuring that every stitch and seam is secure and of the highest quality. In terms of functionality, the Blue Purse offers ample storage space to keep your belongings organized. It typically includes multiple compartments, such as a main zippered compartment, interior pockets, and sometimes exterior pockets, providing convenient options for storing essentials like your phone, wallet, keys, and makeup items.",
          },
        ],
      },
]

export default PRODUCT_DATA;