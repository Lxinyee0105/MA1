class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here

        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** main scene');
        this.add.image(320,320,"mainpage")
        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');
        // var key1 = this.input.keyboard.addKey(49);

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to rule scene');
            this.scene.start('rule',
                // Optional parameters
                {

                }
            );
        }, this);

        // key1.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level1");
        //     }, this );

        // key2.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level2");
        //     }, this );

        // key3.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level3");
        //     }, this ); 
            
        // key4.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level4");
        //     }, this );
                

        // Add any text in the main page
        this.add.text(100, 550, 'Press spacebar to Playagain', {
            font: '30px Courier',
            fill: '#FFFFFF'
        });


        // Create all the game animations here

    }


}