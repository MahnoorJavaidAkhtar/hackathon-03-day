export default {
    name: 'featuredProduct',
    type: 'document',
    title: 'Featured Product',
    fields: [
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
    ],
  };
  