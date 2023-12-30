import * as Phaser from 'phaser'
export default class GameScene extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', '/game/house/bg_repeat_340x640.png')
    }

    create() {
        this.add.image(0, 0, 'background')
            .setOrigin(0, 0)
    }
}