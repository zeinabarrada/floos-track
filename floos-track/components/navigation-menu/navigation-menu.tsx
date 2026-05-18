'use client'

import { IconWallet } from '@tabler/icons-react'
import Link from 'next/link'

export default function NavigationMenu() {
  return (
    <div className="sticky top-0 z-40 w-full bg-background/60 backdrop-blur-xl border-b border-border/60">
      <div className="flex items-center px-6 h-16">
        {/* Left */}
        <div className="flex items-center gap-2 text-white flex-1">
          <IconWallet stroke={2} size={24} />
          <Link href="/#hero" className="text-lg font-semibold">
            floostrack
          </Link>
        </div>

        {/* Center */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-8 text-sm text-white">
            <Link href="/#features">Features</Link>
            <Link href="/#how-it-works">How It Works</Link>
          </div>
        </div>

        {/* Right spacer */}
        <div className="flex-1" />
      </div>
    </div>
  )
}
