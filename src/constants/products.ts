// uuidgen | tr 'A-Z' 'a-z'
export const products: TProduct[] = [
  {
    id: '798ea7c0',
    name: 'Bucket Hat',
    desc: "Bucket hats are an ideal choice for outdoor adventures, offering protection for your head, neck, and face against the sun's rays and unexpected rain showers. Crafted from recycled plastic bottles, this soft hat features a silicone and faux suede branded badge, making it both lightweight and quick-drying while also contributing to the reduction of plastic waste in our oceans.",
    imageVariants: [
      {
        color: '#AAA493',
        imageURL: '/products/hat_gray.png',
      },
      {
        color: '#457E51',
        imageURL: '/products/hat_green.png',
      },
      {
        color: '#EBE2D7',
        imageURL: '/products/hat_white.png',
      },
    ],
  },
  {
    id: 'f4909222',
    name: 'Hoodie',
    desc: 'Hoodies are renowned for their distinctive hoods, yet their functionality surpasses mere rain protection or concealment. These hoods harbor a myriad of unexpected uses, from serving as impromptu storage solutions to providing makeshift comfort in a pinch. Despite their unassuming appearance, they symbolize the innovative spirit of modern design, representing a fusion of practicality and style that has endured through the ages.',
    imageVariants: [
      {
        color: '#00DFE3',
        imageURL: '/products/hoodie_aqua.png',
      },
      {
        color: '#6100DA',
        imageURL: '/products/hoodie_purple.png',
      },
      {
        color: '#E1DFE6',
        imageURL: '/products/hoodie_white.png',
      },
      {
        color: '#DFDE00',
        imageURL: '/products/hoodie_yellow.png',
      },
    ],
  },
  {
    id: '25483ec7',
    name: 'Jacket',
    desc: "Jackets are more than just outerwear; they're versatile companions for your everyday adventures. While they shield you from the elements, their utility extends far beyond mere protection. Whether you're braving the outdoors or navigating city streets, a jacket is your trusted ally. With ample pockets and clever design features, it's not just clothing - it's a tool for exploration and self-expression. Embrace the endless possibilities of your jacket and embark on your next journey with confidence.",
    imageVariants: [
      {
        color: '#565656',
        imageURL: '/products/jacket_gray.png',
      },
      {
        color: '#FFB0FE',
        imageURL: '/products/jacket_pink.png',
      },
      {
        color: '#F4F4F4',
        imageURL: '/products/jacket_white.png',
      },
    ],
  },
  {
    id: 'dd21dfc1',
    name: 'T-shirt',
    desc: 'T-shirts, often seen as simple garments, offer more than meets the eye. They serve as versatile canvases for self-expression, allowing wearers to showcase their personality with ease. Whether adorned with bold graphics, subtle designs, or vibrant colors, t-shirts effortlessly blend simplicity with style. With their timeless appeal and comfortable fit, they stand as essential pieces in any wardrobe, embodying the perfect balance between simplicity and sophistication.',
    imageVariants: [
      {
        color: '#0FB800',
        imageURL: '/products/tshirt_green.png',
      },
      {
        color: '#E402E4',
        imageURL: '/products/tshirt_pink.png',
      },
      {
        color: '#EC0001',
        imageURL: '/products/tshirt_red.png',
      },
    ],
  },
  {
    id: 'c3866592',
    name: 'Sandals',
    desc: "Step into supportive comfort and on-trend sculpted style with our latest vegan slide. Designed for both fashion-forward flair and all-day comfort, this monochromatic slide boasts a sleek silhouette and durable construction. Whether you're hitting the books at school or soaking up the sun at the beach, these slides provide the perfect blend of style and support for any occasion. Slip them on and step confidently into your day, knowing you're making a stylish statement with every stride.",
    imageVariants: [
      {
        color: '#9FF8BC',
        imageURL: '/products/sandals_green.png',
      },
      {
        color: '#F8F8F8',
        imageURL: '/products/sandals_white.png',
      },
    ],
  },
] as const
