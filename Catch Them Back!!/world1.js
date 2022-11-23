class world1 extends Phaser.Scene {
  constructor() {
    super({
      key: "world1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");

    this.load.tilemapTiledJSON("world1", "assets/LV1.tmj");

    // Step 2 : Preload any images here
    //this.load.image("building", "assets/Buildings32x32.png");
    //this.load.image("street", "assets/Street32x32.png");
}

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });

    let map = this.make.tilemap({ key: "world1" })

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    let villageTiles = map.addTilesetImage("village32x32", "villageimg");

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [villageTiles]


    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.backgroundLayer = map.createLayer("backgroundLayer",tilesArray,0,0);
    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.treeLayer = map.createLayer("treeLayer",tilesArray,0,0);
    this.houseLayer = map.createLayer("houseLayer",tilesArray,0,0);
  

    


    // Add main player here with physics.add.sprite


    
// this.add.sprite(200,200,'amy').play('Raven-left')
// this.add.sprite(200,200,'amy').play('Raven-up')
// this.add.sprite(200,200,'amy').play('Raven-font')
// this.add.sprite(200,200,'amy').play('Raven-right')

var startPoint = map.findObject("objectLayer",(obj) => obj.name === "start");
var dog1 = map.findObject("objectLayer",(obj) => obj.name === "item1_1");
var cat1 = map.findObject("objectLayer",(obj) => obj.name === "item1_2");
var cow1 = map.findObject("objectLayer",(obj) => obj.name === "item1_3");
var enemy1 = map.findObject("objectLayer",(obj) => obj.name === "enemy1_1");
var enemy2 = map.findObject("objectLayer",(obj) => obj.name === "enemy1_2");

this.player = this.physics.add.sprite(startPoint.x,startPoint.y, 'Raven');
this.player.setScale(2);
this.player.setCollideWorldBounds(true);
window.player = this.player;
this.physics.world.bounds.width = this.backgroundLayer.width;
this.physics.world.bounds.height = this.backgroundLayer.height;

this.itemPoint1 = this.physics.add.sprite( dog1.x, dog1.y, 'dog1');
this.itemPoint2 = this.physics.add.sprite( cat1.x, cat1.y, 'cat1');
this.itemPoint3 = this.physics.add.sprite( cow1.x, cow1.y, 'cow');
this.enemyPoint1 = this.physics.add.sprite( enemy1.x, enemy1.y, 'enemy').play("enemymove");
this.enemyPoint2 = this.physics.add.sprite( enemy2.x, enemy2.y, 'enemy').play("enemymove");

this.physics.add.overlap(this.player,this.enemyPoint1,this.overlap1,null,this);
this.physics.add.overlap(this.player,this.enemyPoint2,this.overlap2,null,this);
// this.physics.world.bounds.width = this.greengroundLayer.width;
// this.physics.world.bounds.height = this.greengroundLayer.height;

this.physics.add.overlap(this.player, this.itemPoint1, this.collect1, null, this);
this.physics.add.overlap(this.player, this.itemPoint2, this.collect2, null, this);
this.physics.add.overlap(this.player, this.itemPoint3, this.collect3, null, this);

// this.physics.add.collider(this.player, this.enemyPoint1, this.hitenemy1, null, this);

this.treeLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player,this.treeLayer);




    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
window.player = this.player
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // Show colliding tiles as different colours
  //   const debugGraphics = this.add.graphics().setAlpha(0.75);
  //  this.platformLayer.renderDebug(debugGraphics, {
  //  tileColor: null,
  this.timedEvent = this.time.addEvent({
    delay:1000,
    callback: this.delayOneSec,
  callbackScope: this,
  loop:false,
  });
  //   // Color of non-colliding tiles

  //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles

  //   faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges

  //   });
  } /////////////////// end of create //////////////////////////////

  update() {
    if(this.player.x > 270 && this.player.x < 391 && this.player.y < 33){
    console.log("world2")
    this.world2();
    }
    
    if (this.cursors.left.isDown) {

      this.player.body.setVelocityX(-200);
  
      this.player.anims.play("Raven-left", true); // walk left
  
     
  
      //console.log('left');
  
    } else if (this.cursors.right.isDown) {
  
      this.player.body.setVelocityX(200);
  
      this.player.anims.play("Raven-right", true);
  
     
  
      //console.log('right');
  
    } else if (this.cursors.up.isDown) {
  
      this.player.body.setVelocityY(-200);
  
      this.player.anims.play("Raven-up", true);
  
      //console.log('up');
  
    } else if (this.cursors.down.isDown) {
  
      this.player.body.setVelocityY(200);
  
      this.player.anims.play("Raven-font", true);
  
      //console.log('down');
  
    } else {
  
      this.player.anims.stop();
  
      this.player.body.setVelocity(0, 0);
  
      //console.log('idle');
      
  }
  
//   if(this.itemPoint1.x > this.player) 
//   {
// this.gameOver()
//   }
//   if(this.itemPoint1.x > this.player) 
//   {
// this.gameOver()
//   }
//   if(this.itemPoint1.y > this.player) 
//   {
// this.gameOver()
//   }
//   if(this.itemPoint1.y < this.player) 
//   {
// this.gameOver()
//   }
  /////////////////// end of update //////////////////////////////
  // moveDownUp();{
  //   console.log("moveDownUp");
  //   this.tweens.timeline({
  //     targets: this.enemy1,
  //     eade:"Linear",
  //     loop: -1, //loop forever
  //     duration: 4000,
  //     tweens: [
  //       {
  //         y:220,
  //       },
  //       {
  //         y:50
  //       }
  //     ]
  
  //   })
  // } 
}
//function to jump to world2
world2(player,tile) {
  console.log("world2 function");
  this.scene.start("world2");
}
overlap1() {
  console.log("enemyPoint overlap player")
  //lose a life
  //shake the camera
  this.cameras.main.shake(500);
  this.scene.start("gameover")
}
overlap2() {
  console.log("enemyPoint overlap player")
  //lose a life
  //shake the camera
  this.cameras.main.shake(500);
  this.scene.start("gameover")
}
collect1 (player, itemPoint1)
{
    itemPoint1.disableBody(true, true);

    //  Add and update the score
    // score += 10;
    // scoreText.setText('Score: ' + score);

    // if (stars.countActive(true) === 0)
    // {
    //     //  A new batch of stars to collect
    //     stars.children.iterate(function (child) {

    //         child.enableBody(true, child.x, 0, true, true);

    //     });
    //   }
    }
    collect2 (player, itemPoint2)
    {
        itemPoint2.disableBody(true, true);
    
        //  Add and update the score
        // score += 10;
        // scoreText.setText('Score: ' + score);
    
        // if (stars.countActive(true) === 0)
        // {
        //     //  A new batch of stars to collect
        //     stars.children.iterate(function (child) {
    
        //         child.enableBody(true, child.x, 0, true, true);
    
        //     });
        //   }
        }
        collect3 (player, itemPoint3)
{
    itemPoint3.disableBody(true, true);

    //  Add and update the score
    // score += 10;
    // scoreText.setText('Score: ' + score);

    // if (stars.countActive(true) === 0)
    // {
    //     //  A new batch of stars to collect
    //     stars.children.iterate(function (child) {

    //         child.enableBody(true, child.x, 0, true, true);

    //     });
    //   }
    }
 
gameOver(){
  this.scene.start("gameOver")
}
} //////////// end of class world ////////////////////////
