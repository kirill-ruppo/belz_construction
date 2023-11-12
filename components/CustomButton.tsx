"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function CustomButton({text, route, styles}: CustomButtonProps) {
  const router = useRouter()
  return (
    <button className={styles} onClick={() => router.push(route)}>
        {text}
    </button>
  )
}
