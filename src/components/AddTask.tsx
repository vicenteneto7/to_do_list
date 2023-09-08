import { cn } from '@/app/lib/utils'
import { ReactNode } from 'react'

type AddTaskProps = {
    estilization: {
        text: string
        icon?: ReactNode
        className?: string
}
}

export const AddTask = ({estilization}: AddTaskProps) => {
    return (  
        <button className={cn("w-full text-center h-9 bg-purple-600 rounded text-white", estilization.className)}>
            <span>{estilization.text}</span>
            {estilization.icon}
        </button>
    )
}