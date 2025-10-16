import type { LucideIcon } from "lucide-react"
import React from "react"

export function Primary({
  title,
  onClick,
}: {
  title: string
  onClick: () => void
}) {
  return (
    <button type='button' onClick={() => onClick()} className='button-primary'>
      {title}
    </button>
  )
}

export function Secondary({
  title,
  onClick,
}: {
  title: string
  onClick: () => void
}) {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className='button-secondary'
    >
      {title}
    </button>
  )
}

export function Icon({
  children,
  onClick,
  size,
}: {
  children: React.ReactElement<React.ComponentProps<LucideIcon>>
  onClick: () => void
  size?: string
}) {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className='button-secondary rounded-full p-2'
    >
      {React.cloneElement(children, {
        className: size ? `size-${size}` : `button-icon`,
      })}
    </button>
  )
}

export function Image({
  image,
  alt,
  onClick,
  isActive,
}: {
  image?: string
  alt?: string
  onClick: () => void
  isActive?: boolean
}) {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className={`button-image w-50 h-15 flex justify-center items-center ${isActive ? "button-active" : ""}`}
    >
      {image ? (
        <img
          src={image.toString()}
          alt={alt}
          className='w-auto h-max-7 flex-none'
        />
      ) : (
        <p className='text-base sm:text-lg md:text-xl font-extralight flex-none'>
          {alt}
        </p>
      )}
    </button>
  )
}

export default { Primary, Secondary, Icon, Image }
