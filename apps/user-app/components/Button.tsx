"use client"

interface ButtonProps {
    label: string,
    className?: string
    onClick?: any
}
export const Button = ({ label, className,onClick }: ButtonProps) => {
    return(
        <button className={className} onClick={onClick}>    
            {label}
        </button>
    )
}