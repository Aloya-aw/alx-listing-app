// This file will define a reusable Card component that will be used across the project to display information about various properties.

// components/common/Card.tsx

import React from 'react'
import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-blue-600 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Card
