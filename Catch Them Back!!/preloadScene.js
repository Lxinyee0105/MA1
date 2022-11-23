class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {
  
    this.load.spritesheet('Raven', 'assets/Raven.png', {frameWidth: 32, frameHeight: 32});

    this.load.image('farming_fishing','assets/farming_fishing.png');
    this.load.image('forest_tiles','assets/forest_tiles.png');
    this.load.image('villageimg','assets/village32x32.png');
    this.load.image("cityImg", "assets/City-01.png");

    this.load.image('dog1','assets/dog.png')
    this.load.image('dog2','assets/dog2.png')
    this.load.image('cat1','assets/cat.png')
    this.load.image('cat2','assets/cat2.png')
    this.load.image('cow','assets/cow.png')
    this.load.image('cow2','assets/cow2.png')
    this.load.spritesheet('enemy','assets/enemy.png',{frameWidth:32,frameHeight: 32})
    // simple coin image
    // this.load.image('coin', 'assets/coinGold.png');
    // this.playeranimations
    //this.load.atlas('player', 'assets/player.png', 'assets/player.json');
    // this.load.atlas('girl', 'assets/girl.png', 'assets/girl.json');

    // Anna is 64x64 9 frames per animation
    // this.load.spritesheet('girl', 'assets/anna.png', {frameWidth: 64, frameHeight: 64});

    // this.load.spritesheet('fire', 'assets/fire.png',{ frameWidth:40, frameHeight:70 });
}

create() {

    this.add.text(10, 10, 'This is preload Scene', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'Click or space to continue', { font: '24px Courier', fill: '#FFFF00' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    spaceDown.on('down', function(){
        console.log("world1");
        this.scene.start("world1");
        }, this );

    this.anims.create({
        key: "Raven-left",
        frames: this.anims.generateFrameNumbers("Raven", { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1,
        });
    
        this.anims.create({
        key: "Raven-up",
        frames: this.anims.generateFrameNumbers("Raven", { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1,
        });
    
        this.anims.create({
        key: "Raven-font",
        frames: this.anims.generateFrameNumbers("Raven", { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1,
        });
    
        this.anims.create({
        key: "Raven-right",
        frames: this.anims.generateFrameNumbers("Raven", { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1,
        });

        this.anims.create({
        key: "enemymove",
        frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 1}),
        frameRate: 5,
        repeat: -1,
        });
          
}

} // end of class