// export default {
//     name: 'featuredProduct',
//     type: 'document',
//     title: 'Featured Product',
//     fields: [
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Image',
//         options: {
//           hotspot: true,
//         },
//       },
//       {
//         name: 'name',
//         type: 'string',
//         title: 'Product Name',
//         validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
//       },
//       {
//         name: 'department',
//         type: 'string',
//         title: 'Department',
//         validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
//       },
//       {
//         name: 'originalPrice',
//         type: 'string',
//         title: 'Original Price',
//         validation: (Rule: { required: () => any; }) => Rule.required(),
//       },
//       {
//         name: 'discountedPrice',
//         type: 'string',
//         title: 'Discounted Price',
//         validation: (Rule: { required: () => any; }) => Rule.required(),
//       },
//       {
//         name: 'colors',
//         type: 'array',
//         title: 'Colors',
//         of: [
//           {
//             type: 'string',
//           },
//         ],
//         description: 'Hex color codes representing product colors',
//       },
//       {
//         name: 'description',
//         type: 'text',
//         title: 'Description',
//         description: 'Optional description for the product.',
//       },
//     ],
//   };
  
// export default {
//   name: 'featuredProduct',
//   type: 'document',
//   title: 'Featured Product',
//   fields: [
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Product Name',
//       validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
//     },
//     {
//       name: 'department',
//       type: 'string',
//       title: 'Department',
//       validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
//     },
//     {
//       name: 'originalPrice',
//       type: 'string',
//       title: 'Original Price',
//       validation: (Rule: { required: () => any; }) => Rule.required(),
//     },
//     {
//       name: 'discountedPrice',
//       type: 'string',
//       title: 'Discounted Price',
//       validation: (Rule: { required: () => any; }) => Rule.required(),
//     },
//     {
//       name: 'colors',
//       type: 'array',
//       title: 'Colors',
//       of: [
//         {
//           type: 'string',
//         },
//       ],
//       description: 'Hex color codes representing product colors',
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       description: 'Optional description for the product.',
//     },
//     {
//       name: 'stockStatus',
//       type: 'string',
//       title: 'Stock Status',
//       options: {
//         list: [
//           { title: 'In Stock', value: 'inStock' },
//           { title: 'Out of Stock', value: 'outOfStock' },
//         ],
//       },
//       validation: (Rule: { required: () => any; }) => Rule.required(),
//     },
//     {
//       name: 'availableSizes',
//       type: 'array',
//       title: 'Available Sizes',
//       of: [
//         {
//           type: 'string',
//         },
//       ],
//       description: 'List of available sizes for the product (e.g., S, M, L, XL).',
//       validation: (Rule: { required: () => any; }) => Rule.required(),
//     },
//   ],
// };

export default {
  name: 'featuredProduct',
  type: 'document',
  title: 'Featured Product',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
      description: 'A unique identifier for the product.',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
    },
    {
      name: 'department',
      type: 'string',
      title: 'Department',
      validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
    },
    {
      name: 'originalPrice',
      type: 'string',
      title: 'Original Price',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'discountedPrice',
      type: 'string',
      title: 'Discounted Price',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Hex color codes representing product colors',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optional description for the product.',
    },
    {
      name: 'stockStatus',
      type: 'string',
      title: 'Stock Status',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
        ],
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'availableSizes',
      type: 'array',
      title: 'Available Sizes',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'List of available sizes for the product (e.g., S, M, L, XL).',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Categories this product belongs to.',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Clothing', value: 'clothing' },
          { title: 'Electronics', value: 'electronics' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Footwear', value: 'footwear' },
          { title: 'Home & Kitchen', value: 'homeKitchen' },
        ],
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};

