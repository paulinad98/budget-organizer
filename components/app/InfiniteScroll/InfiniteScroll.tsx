'use client'

import React from 'react'
import { useEffect, useRef, isValidElement } from 'react'

type InfiniteScrollProps = React.BaseHTMLAttributes<HTMLUListElement> & {
  threshold?: number
  onIntersecting: () => void
}

export function InfiniteScroll({
  children,
  threshold = 1,
  onIntersecting,
  ...props
}: InfiniteScrollProps) {
  const observerTarget = useRef(null)

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type !== 'li') {
        console.error('InfiniteScroll children should be of type <li>')
      }
    })
  }, [children])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersecting()
        }
      },
      { threshold }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [observerTarget, threshold, onIntersecting])

  return (
    <ul {...props}>
      {children}

      <li ref={observerTarget}></li>
    </ul>
  )
}
