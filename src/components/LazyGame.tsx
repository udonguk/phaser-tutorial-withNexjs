'use client'

import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
    () => import('@/components/Game'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>
    }
)

export default function LazyGame() {
    return (
        <main>
            <DynamicComponentWithNoSSR />
        </main>
    )
}