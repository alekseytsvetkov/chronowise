"use client"

import { RootLayout } from '@/components'

import { Button, Icons } from '@chronowise/ui'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const url = process.env.NEXT_PUBLIC_APP_URL

  const {resolvedTheme} = useTheme()

  const [currentCoffeeManUrl, setCurrentCoffeeManUrl] = useState<string | null>(null)

  useEffect(() => {
    const coffeeManUrl = new URL(`${url}/coffee-man.svg`)
    const coffeeManDarkUrl = new URL(`${url}/coffee-man-dark.svg`)

    if (resolvedTheme === 'dark') {
      setCurrentCoffeeManUrl(`${coffeeManDarkUrl}`)
    } else {
      setCurrentCoffeeManUrl(`${coffeeManUrl}`)
    }
  }, [resolvedTheme, url])
  
  return (
    <>
      <RootLayout>
        <div className="flex w-full flex-col items-center px-4 mt-16">
          <h1 className="fade-in-heading z-30 px-2 text-center text-4xl font-black leading-tight text-black dark:text-white">
            Chronowise is a better way<br />to improve your workflow
          </h1>
          <p className="mt-3 text-center text-lg mb-12 text-gray-400">
            Meet the new way to increase productivity and<br />reduce stress.
          </p>
          <Button
            variant="default"
            className="text-base focus:ring-0 align-bottom shadow-lg shadow-gray-400 dark:shadow-none"
            size="lg"
          >
            <Icons.apple className="h-4 w-4 mr-2 mb-[2px] fill-current" />
            <span className="text-[0px] leading-none">
              <span className="font-medium text-base leading-none">
                Download for Mac
              </span>
            </span>
          </Button>
          {!!currentCoffeeManUrl && 
            <Image
              src={`${currentCoffeeManUrl}`}
              className="mt-24"
              color="currentColor"
              alt="coffee man"
              width="400"
              height="310"
            />
          }
        </div>
      </RootLayout>
    </>
  );
}
