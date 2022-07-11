export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class TopPagesModel {
    firstCategory: TopLevelCategory
    secondCategory: string
    title: string
    category: string
    hh?:  {
        count: number
        juniorSalary: number
        middleSalary: number
        seniorSalary: number 
    }
    advantages: {
         title: string
         descriptin: string
    }[]
    seoText: string
    tags: string[]
    tagsTitle: string 
}
