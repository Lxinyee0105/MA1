class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {
  
    this.load.spritesheet('Raven', 'assets/Raven.png', {frameWidth: 32, frameHeight: 32});
    this.load.image("mainpage", "assets/mainpage.png");
    this.load.image("rulepage", "assets/rule-01.png");
    this.load.image("gameoverpage", "assets/gameover-01.png");
    this.load.image("endingpage", "assets/ending-01.png");
    this.load.image('farming_fishing','assets/farming_fishing.png');
    this.load.image('forest_tiles','assets/forest_tiles.png');
    this.load.image('villageimg','assets/village32x32.png');
    this.load.image("cityImg", "assets/City-01.png");
    this.load.image("textImg", "assets/nextlevel.png");
    this.load.image("text2Img", "assets/nextlevel2.png");
    this.load.audio('bgm', 'assets/bgm.mp3');
    this.load.audio('collect', 'assets/collect.wav');
    this.load.audio('hit', 'assets/hit.wav');
    


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
    this.bgm= this.sound.add("bgm", {loop:true}).setVolume(0.2)
    this.bgm.play();

    this.add.image(320,320,"mainpage")
    // this.add.text(10, 10, 'Scene', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(100, 550, 'Click or space to continue', { font: '30px Courier', fill: '#000000' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    spaceDown.on('down', function(){
        console.log("Jump to rule scene");
        this.scene.start("rule");
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