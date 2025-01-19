// export default {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'productName',
//         title: 'Product Name',
//         type: 'string',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true,
//         },
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'originalPrice',
//         title: 'Original Price',
//         type: 'string', // change to string to add "$" manually
//         description: 'Enter the price with the dollar sign (e.g., $199)',
//       },
//       {
//         name: 'discountPrice',
//         title: 'Discount Price',
//         type: 'string', // change to string to add "$" manually
//         description: 'Enter the price with the dollar sign (e.g., $159)',
//       },
//     ],
//   };
  
// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'productName',
//       title: 'Product Name',
//       type: 'string',
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'originalPrice',
//       title: 'Original Price',
//       type: 'string', // change to string to add "$" manually
//       description: 'Enter the price with the dollar sign (e.g., $199)',
//     },
//     {
//       name: 'discountPrice',
//       title: 'Discount Price',
//       type: 'string', // change to string to add "$" manually
//       description: 'Enter the price with the dollar sign (e.g., $159)',
//     },
//     {
//       name: 'stockStatus',
//       title: 'Stock Status',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'In Stock', value: 'inStock' },
//           { title: 'Out of Stock', value: 'outOfStock' },
//           { title: 'Limited Stock', value: 'limitedStock' },
//         ],
//       },
//       description: 'Select the current stock status of the product',
//     },
//     {
//       name: 'availableSizes',
//       title: 'Available Sizes',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Add available sizes for the product (e.g., S, M, L, XL)',
//     },
//   ],
// };
// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'productName',
//       title: 'Product Name',
//       type: 'string',
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'originalPrice',
//       title: 'Original Price',
//       type: 'string', // change to string to add "$" manually
//       description: 'Enter the price with the dollar sign (e.g., $199)',
//     },
//     {
//       name: 'discountPrice',
//       title: 'Discount Price',
//       type: 'string', // change to string to add "$" manually
//       description: 'Enter the price with the dollar sign (e.g., $159)',
//     },
//     {
//       name: 'stockStatus',
//       title: 'Stock Status',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'In Stock', value: 'inStock' },
//           { title: 'Out of Stock', value: 'outOfStock' },
//           { title: 'Limited Stock', value: 'limitedStock' },
//         ],
//       },
//       description: 'Select the current stock status of the product',
//     },
//     {
//       name: 'availableSizes',
//       title: 'Available Sizes',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Add available sizes for the product (e.g., S, M, L, XL)',
//     },
//     {
//       name: 'colors',
//       title: 'Colors',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Add available colors for the product (e.g., Red, Blue, Green)',
//     },
//   ],
// };
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Product ID',
      type: 'string',
      description: 'Enter a unique identifier for the product',
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'string', // change to string to add "$" manually
      description: 'Enter the price with the dollar sign (e.g., $199)',
    },
    {
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'string', // change to string to add "$" manually
      description: 'Enter the price with the dollar sign (e.g., $159)',
    },
    {
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
          { title: 'Limited Stock', value: 'limitedStock' },
        ],
      },
      description: 'Select the current stock status of the product',
    },
    {
      name: 'availableSizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add available sizes for the product (e.g., S, M, L, XL)',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add available colors for the product (e.g., Red, Blue, Green)',
    },
  ],
  preview: {
    select: {
      title: 'productName', // Use productName for the title
      subtitle: 'id', // Display the ID as a subtitle
      media: 'image', // Display the product image
    },
  },
};



