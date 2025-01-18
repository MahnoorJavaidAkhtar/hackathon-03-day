export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
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
    ],
  };
  