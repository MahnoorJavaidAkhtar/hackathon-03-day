import { type SchemaTypeDefinition } from 'sanity'
import featuredproduct from '../featuredproduct'
import bestseller from '../bestseller'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featuredproduct ,bestseller],
}