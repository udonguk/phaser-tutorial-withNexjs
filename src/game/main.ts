import * as Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
}

export default new Phaser.Game(config)