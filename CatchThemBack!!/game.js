﻿var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 20,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preloadScene,main,rule, world1, world2,world3,world4,gameover,ending]
};

var game = new Phaser.Game(config);

window.item = 0
window.item2 = 0
window.item3 = 0
window.item4 = 0