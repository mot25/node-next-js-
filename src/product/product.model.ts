export class ProductModel {
    _id: string
    image: string
    title: string
    oldPrice: number
    price: number
    credit: number
    calculatedRating: number
    description: string
    advantages: string
    disAdvantages: string
    tags: string[]
    categories: string[]
    charateristics: {
        [key: string]: string 
    } 
}
