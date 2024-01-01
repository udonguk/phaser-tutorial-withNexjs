import * as Phaser from 'phaser'
export default class GameScene extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', '/game/house/bg_repeat_340x640.png')

        this.load.atlas(
            'rocket-mouse',
            'game/characters/rocket-mouse.png',
            'game/characters/rocket-mouse.json'
        )
    }



    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.tileSprite(0, 0, width, height, 'background')
            .setOrigin(0)

        this.add.sprite(
            width * 0.5,
            height * 0.5,
            'rocket-mouse',
            'fly/roketmouse-fly01.png'
        ).setScale(0.5, 0.5)

        // this.anims.generateFrameNames('rocket-mouse-run', {
        //     start: 1, end: 4, zeroPad: 2,
        //     prefix: 'run', suffix: '.png'
        // });
    }
}