'use client'

import {useRef} from "react";
import {useGame} from "@/hooks/useGame";
import gameConfig from "@/game/gameConfig";

// TODD NoSSR 처리 필요
export default function Game() {
    const parentEl = useRef<HTMLDivElement>(null)
    useGame(gameConfig, parentEl)

    return (
        <div ref={parentEl} />
    )
}