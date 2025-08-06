// interfaces/index.ts

export interface CardProps {
    // Define props for the Card component
    // Placeholder fields
    title: string
    description: string
    imageUrl: string
    price: number
  }
  
  export interface ButtonProps {
    // Define props for the Button component
    label: string
    onClick: () => void
    disabled?: boolean
    variant?: 'primary' | 'secondary'
  }
  