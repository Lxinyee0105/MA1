class world2 extends Phaser.Scene {
  constructor() {
    super({
      key: "world2",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");

    this.load.tilemapTiledJSON("world2", "assets/LV2Map.tmj");

    // Step 2 : Preload any images here
    //this.load.image("building", "assets/Buildings32x32.png");
    //this.load.image("street", "assets/Street32x32.png");


    //amy
 
 

}

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });

    let map2 = this.make.tilemap({ key: "world2" })

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    let villageTiles = map2.addTilesetImage("village32x32","villageimg");
    let fishTiles = map2.addTilesetImage("farming_fishingImg","farming_fishing");
    let forestTiles = map2.addTilesetImage("forest_tilesImg","forest_tiles");

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray2 = [villageTiles,fishTiles,forestTiles]


    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.greengroundLayer = map2.createLayer("greengroundLayer2",tilesArray2,0,0);
    this.weilanLayer = map2.createLayer("weilanLayer2",tilesArray2,0,0);
    this.qiaoLayer = map2.createLayer("qiaoLayer2",tilesArray2,0,0);
    this.housenitemLayer = map2.createLayer("housenitemLayer2",tilesArray2,0,0);
    this.flowernplantLayer = map2.createLayer("flowernplantLayer2",tilesArray2,0,0);
    


    // Add main player here with physics.add.sprite
    

// this.add.sprite(200,200,'amy').play('Raven-left')
// this.add.sprite(200,200,'amy').play('Raven-up')
// this.add.sprite(200,200,'amy').play('Raven-font')
// this.add.sprite(200,200,'amy').play('Raven-right')

var startPoint = map2.findObject("objectLayer2",(obj) => obj.name === "start");
this.player = this.physics.add.sprite(startPoint.x ,startPoint.y, 'Raven');
this.player.setScale(2);
this.player.setCollideWorldBounds(true);
this.physics.world.bounds.width = this.greengroundLayer.width;
this.physics.world.bounds.height = this.greengroundLayer.height;

var cat2 = map2.findObject("objectLayer2",(obj) => obj.name === "item2_1");
var cow2 = map2.findObject("objectLayer2",(obj) => obj.name === "item2_2");
var cow3 = map2.findObject("objectLayer2",(obj) => obj.name === "item2_3");
var cow3_2 = map2.findObject("objectLayer2",(obj) => obj.name === "item2_4");
var enemy3 = map2.findObject("objectLayer2",(obj) => obj.name === "enemy2_1");
var enemy4 = map2.findObject("objectLayer2",(obj) => obj.name === "enemy2_2");

this.itemPoint4 = this.physics.add.sprite( cat2.x, cat2.y, 'cat2');
this.itemPoint5 = this.physics.add.sprite( cow2.x, cow2.y, 'cow');
this.itemPoint6 = this.physics.add.sprite( cow3.x, cow3.y, 'cow2');
this.itemPoint7 = this.physics.add.sprite( cow3_2.x, cow3_2.y, 'dog2');
this.enemyPoint3 = this.physics.add.sprite( enemy3.x, enemy3.y, 'enemy').play("enemymove");
this.enemyPoint4 = this.physics.add.sprite( enemy4.x, enemy4.y, 'enemy').play("enemymove");

this.physics.add.overlap(this.player, this.itemPoint4, this.collect4, null, this);
this.physics.add.overlap(this.player, this.itemPoint5, this.collect5, null, this);
this.physics.add.overlap(this.player, this.itemPoint6, this.collect6, null, this);
this.physics.add.overlap(this.player, this.itemPoint7, this.collect7, null, this);

this.physics.add.overlap(this.player,this.enemyPoint3,this.overlap3,null,this);
this.physics.add.overlap(this.player,this.enemyPoint4,this.overlap4,null,this);

this.weilanLayer.setCollisionByExclusion(-1, true);

this.physics.add.collider(this.player,this.weilanLayer);



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
    if(this.player.x > 945 && this.player.x < 1080 && this.player.y < 34){
      console.log("world3")
      this.world3();
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
  } /////////////////// end of update //////////////////////////////

world3 (player,tile) {
  console.log("world3 function")
  this.scene.start("world3")
} 

overlap3() {
  console.log("enemyPoint overlap player")
  //lose a life
  //shake the camera
  this.cameras.main.shake(500);
  this.scene.start("gameover")
}
overlap4() {
  console.log("enemyPoint overlap player")
  //lose a life
  //shake the camera
  this.cameras.main.shake(500);
  this.scene.start("gameover")
}
collect4 (player, itemPoint4)
{
    itemPoint4.disableBody(true, true);

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
    collect5 (player, itemPoint5)
    {
        itemPoint5.disableBody(true, true);
    
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
        collect6 (player, itemPoint6)
{
    itemPoint6.disableBody(true, true);

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
    collect7 (player, itemPoint7)
{
    itemPoint7.disableBody(true, true);

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
//////////// end of class world ////////////////////////
}