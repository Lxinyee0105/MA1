class world4 extends Phaser.Scene {
  constructor() {
    super({
      key: "world4",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");

    this.load.tilemapTiledJSON("world4", "assets/lv3_fram.tmj");

    // Step 2 : Preload any images here
    //this.load.image("building", "assets/Buildings32x32.png");
    //this.load.image("street", "assets/Street32x32.png");
 

}

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });

    let map4 = this.make.tilemap({ key: "world4" })

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    let villageTiles = map4.addTilesetImage("village32x32", "villageimg");
    let fishTiles = map4.addTilesetImage("farming_fishingImg", "farming_fishing");

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray4 = [villageTiles,fishTiles]


    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.groundlayer2 = map4.createLayer("groundlayer3_1",tilesArray4,0,0);
    this.roadlayer = map4.createLayer("roadlayer3_1",tilesArray4,0,0);
    this.sidelayer = map4.createLayer("sidelayer3_1",tilesArray4,0,0);
    this.houselayer = map4.createLayer("houselayer3_1",tilesArray4,0,0);
    this.treelayer = map4.createLayer("treelayer3_1",tilesArray4,0,0);
    this.layer6 = map4.createLayer("layer63_1",tilesArray4,0,0);


    // Add main player here with physics.add.sprite
    

// this.add.sprite(200,200,'amy').play('Raven-left')
// this.add.sprite(200,200,'amy').play('Raven-up')
// this.add.sprite(200,200,'amy').play('Raven-font')
// this.add.sprite(200,200,'amy').play('Raven-right')

var startPoint = map4.findObject("objectLayer",(obj) => obj.name === "start");
this.player = this.physics.add.sprite(startPoint.x ,startPoint.y , 'Raven');
this.player.setScale(2);
this.player.setCollideWorldBounds(true);
this.physics.world.bounds.width = this.groundlayer2.width;
this.physics.world.bounds.height = this.groundlayer2.height;

var cow3 = map4.findObject("objectLayer",(obj) => obj.name === "item4_1");
var cow4 = map4.findObject("objectLayer",(obj) => obj.name === "item4_2");
var enemy7 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_1");
var enemy8 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_2");

this.itemPoint11 = this.physics.add.sprite( cow3.x, cow3.y, 'cow');
this.itemPoint12 = this.physics.add.sprite( cow4.x, cow4.y, 'cow2');
this.enemyPoint7 = this.physics.add.sprite( enemy7.x, enemy7.y, 'enemy').play("enemymove");
this.enemyPoint8 = this.physics.add.sprite( enemy8.x, enemy8.y, 'enemy').play("enemymove");

this.physics.add.overlap(this.player, this.itemPoint11, this.collect11, null, this);
this.physics.add.overlap(this.player, this.itemPoint12, this.collect12, null, this);
  
this.physics.add.overlap(this.player,this.enemyPoint7,this.overlap7,null,this);
this.physics.add.overlap(this.player,this.enemyPoint8,this.overlap8,null,this);

this.sidelayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player,this.sidelayer);

this.timedEvent = this.time.addEvent({
  delay:1000,
  callback: this.delayOneSec,
callbackScope: this,
loop:false,
});


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
  } /////////////////// end of create //////////////////////////////

  update() {
    if(this.player.x > 789 && this.player.x < 915 && this.player.y < 2194){
      console.log("ending")
      }
    // if(this.player.x > 945 && this.player.x < 1080 && this.player.y < 34){
    //   console.log("world3")
    //   this.world3();
    // }
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
  } /////////////////// end of update //////////////////////////////
  overlap7() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.cameras.main.shake(500);
    this.scene.start("gameover")
  }
  overlap8() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.cameras.main.shake(500);
    this.scene.start("gameover")
  }
  collect11 (player, itemPoint11)
{
    itemPoint11.disableBody(true, true);

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
    collect12 (player, itemPoint12)
{
    itemPoint12.disableBody(true, true);

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
    ending (player,tile) {
      console.log("ending function")
      this.scene.start("ending")}
      
} //////////// end of class world ////////////////////////
