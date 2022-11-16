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

    let villageTiles = map2.addTilesetImage("villageImg","village32x32");
    let fishTiles = map2.addTilesetImage("farming_fishingImg","farming_fishing");
    let forestTiles = map2.addTilesetImage("forest_tilesImg","forest_tiles");

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [villageTiles,fishTiles,forestTiles]


    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.greengroundLayer = map2.createLayer("greengroundLayer2",tilesArray,0,0);
    this.weilanLayer = map2.createLayer("weilanLayer2",tilesArray,0,0);
    this.qiaoLayer = map2.createLayer("qiaoLayer2",tilesArray,0,0);
    this.housenitemLayer = map2.createLayer("housenitemLayer2",tilesArray,0,0);
    this.flowernplantLayer = map2.createLayer("flowernplantLayer2",tilesArray,0,0);
    


    // Add main player here with physics.add.sprite
    

// this.add.sprite(200,200,'amy').play('Raven-left')
// this.add.sprite(200,200,'amy').play('Raven-up')
// this.add.sprite(200,200,'amy').play('Raven-font')
// this.add.sprite(200,200,'amy').play('Raven-right')

var startPoint = map2.findObject("objectLayer2",(obj) => obj.name === "start");
this.player = this.physics.add.sprite(startPoint.x,startPoint.y, 'Raven');
this.player.setScale(2);
this.player.setCollideWorldBounds(true);
//this.physics.world.bounds.width = this.greengroundLayer.width;
//this.physics.world.bounds.height = this.greengroundLayer.height;
  

this.weilanLayer2.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player,this.weilanLayer2);




    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {
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

} //////////// end of class world ////////////////////////
