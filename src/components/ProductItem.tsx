interface ProductItemProps {
  product: {
    id: number
    price: string
    title: string
  }
}

export function ProductItem({ product }: ProductItemProps){
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}