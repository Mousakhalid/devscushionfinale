// components/CategoryList.tsx
import React from 'react'

type Category = {
  _id: string
  title: string
  slug: { current: string }
}

interface CategoryListProps {
  categories: Category[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <a href={`/blog/category/${category.slug.current}`}>{category.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
