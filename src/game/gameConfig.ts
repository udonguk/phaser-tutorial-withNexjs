'use client'
import * as Phaser from "phaser";
import GameScene from "@/game/scenes/HelloWorldScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [GameScene]
}

export default gameConfig