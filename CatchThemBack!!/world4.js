class world4 extends Phaser.Scene {
  constructor() {
    super({
      key: "world4",
    });
    this.animalCount = 4;
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

    this.Collectanimal_snd= this.sound.add("collect")
    this.overlapplayer_snd= this.sound.add("hit")
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




    this.add.image(500,2000,'textImg').setScale(2);
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
var cow5 = map4.findObject("objectLayer",(obj) => obj.name === "item4_3");
var cow6 = map4.findObject("objectLayer",(obj) => obj.name === "item4_4");

var enemy7 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_1");
var enemy8 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_2");
var enemy10 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_4");
var enemy11 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_5");
var enemy12 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_6");
var enemy13 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_7");
var enemy14 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4_8");

var enemy15 = map4.findObject("objectLayer",(obj) => obj.name === "enemy1");
var enemy16 = map4.findObject("objectLayer",(obj) => obj.name === "enemy2");
var enemy17 = map4.findObject("objectLayer",(obj) => obj.name === "enemy3");
var enemy18 = map4.findObject("objectLayer",(obj) => obj.name === "enemy4");

this.itemPoint11 = this.physics.add.sprite( cow3.x, cow3.y, 'cow');
this.itemPoint12 = this.physics.add.sprite( cow4.x, cow4.y, 'cow2');
this.itemPoint14 = this.physics.add.sprite( cow5.x, cow5.y, 'cow');
this.itemPoint15 = this.physics.add.sprite( cow6.x, cow6.y, 'cow2');

this.enemyPoint7 = this.physics.add.sprite( enemy7.x, enemy7.y, 'enemy').play("enemymove");
this.enemyPoint8 = this.physics.add.sprite( enemy8.x, enemy8.y, 'enemy').play("enemymove");
this.enemyPoint10 = this.physics.add.sprite( enemy10.x, enemy10.y, 'enemy').play("enemymove");
this.enemyPoint11 = this.physics.add.sprite( enemy11.x, enemy11.y, 'enemy').play("enemymove");
this.enemyPoint12 = this.physics.add.sprite( enemy12.x, enemy12.y, 'enemy').play("enemymove");
this.enemyPoint13 = this.physics.add.sprite( enemy13.x, enemy13.y, 'enemy').play("enemymove");
this.enemyPoint14 = this.physics.add.sprite( enemy14.x, enemy14.y, 'enemy').play("enemymove");

this.enemyPoint15 = this.physics.add.sprite( enemy15.x, enemy15.y, 'enemy').play("enemymove");
this.enemyPoint16 = this.physics.add.sprite( enemy16.x, enemy16.y, 'enemy').play("enemymove");
this.enemyPoint17 = this.physics.add.sprite( enemy17.x, enemy17.y, 'enemy').play("enemymove");
this.enemyPoint18 = this.physics.add.sprite( enemy18.x, enemy18.y, 'enemy').play("enemymove");


this.physics.add.overlap(this.player, this.itemPoint11, this.collect11, null, this);
this.physics.add.overlap(this.player, this.itemPoint12, this.collect12, null, this);
this.physics.add.overlap(this.player, this.itemPoint14, this.collect13, null, this);
this.physics.add.overlap(this.player, this.itemPoint15, this.collect14, null, this);
  
this.physics.add.overlap(this.player,this.enemyPoint7,this.overlap7,null,this);
this.physics.add.overlap(this.player,this.enemyPoint8,this.overlap8,null,this);
this.physics.add.overlap(this.player,this.enemyPoint10,this.overlap9,null,this);
this.physics.add.overlap(this.player,this.enemyPoint11,this.overlap10,null,this);
this.physics.add.overlap(this.player,this.enemyPoint12,this.overlap11,null,this);
this.physics.add.overlap(this.player,this.enemyPoint13,this.overlap12,null,this);
this.physics.add.overlap(this.player,this.enemyPoint14,this.overlap13,null,this);

this.physics.add.overlap(this.player,this.enemyPoint15,this.overlap14,null,this);
this.physics.add.overlap(this.player,this.enemyPoint16,this.overlap15,null,this);
this.physics.add.overlap(this.player,this.enemyPoint17,this.overlap16,null,this);
this.physics.add.overlap(this.player,this.enemyPoint18,this.overlap17,null,this);


this.sidelayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player,this.sidelayer);

this.animalText = this.add.text(32, 32, this.animalCount, {
  fontSize: '30px',
  fill: '#ffffff'
  });


this.animalText.setScrollFactor(0);
this.animalText.visible = true;


  // Add time event / movement here
this.timedEvent = this.time.addEvent({
  delay:1000,
  callback: this.delayOneSec,
callbackScope: this,
loop:false,
});

this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp4,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp5,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp6,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp7,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp8,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp9,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp10,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveDownUp11,
  callbackScope: this,
  loop: false,
});

this.time.addEvent({
  delay: 0,
  callback: this.moveRightLeft5,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveRightLeft6,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveRightLeft7,
  callbackScope: this,
  loop: false,
});
this.time.addEvent({
  delay: 0,
  callback: this.moveRightLeft8,
  callbackScope: this,
  loop: false,
});
  

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
    // if(this.player.x > 789 && this.player.x < 915 && this.player.y > 2194  && window.item4 == 4){
    //   console.log("ending")
    //   this.ending();
    //   }
      if (window.item == 4) {
        (this.player.x > 789 && this.player.x < 915 && this.player.y > 2194 ) ;{
          console.log("ending")
          this.ending()
          }
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

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap8() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
   return false;
  }
  overlap9() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap10() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap11() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap12() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap13() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap14() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap15() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
  this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap16() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera
    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }
  overlap17() {
    console.log("enemyPoint overlap player")
    //lose a life
    //shake the camera

    this.animalCount = 4;
    window.item4 = 0

    this.cameras.main.shake(500);
    this.scene.start("gameover")

    this.overlapplayer_snd.play()
    return false;
  }


  collect11 (player, itemPoint11)
{
    itemPoint11.disableBody(true, true);
    window.item4 ++
    
    this.animalCount -= 1; 
    this.animalText.setText(this.animalCount);

    this.Collectanimal_snd.play()
    return false;
    }
    collect12 (player, itemPoint12)
{
    itemPoint12.disableBody(true, true);
    window.item4 ++
  
    this.animalCount -= 1; 
    this.animalText.setText(this.animalCount);

    this.Collectanimal_snd.play()
    return false;
    }
    collect13 (player, itemPoint14)
    {
        itemPoint14.disableBody(true, true);
        window.item4 ++
      
        this.animalCount -= 1; 
        this.animalText.setText(this.animalCount);

        this.Collectanimal_snd.play()
        return false;
        }
        collect14 (player, itemPoint15)
        {
            itemPoint15.disableBody(true, true);
            window.item4 ++
           
            this.animalCount -= 1; 
            this.animalText.setText(this.animalCount);

            this.Collectanimal_snd.play()
            return false;
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


            moveDownUp4() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint7,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 3000,
                tweens: [
                  {
                    y: 1160,
                  },
                  {
                    y: 575,
                  },
                ],
              });
            }
            moveDownUp5() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint8,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 2000,
                tweens: [
                  {
                    y: 1690,
                  },
                  {
                    y: 1480,
                  },
                ],
              });
            }
      
            moveDownUp7() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint10,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 3000,
                tweens: [
                  {
                    y: 710,
                  },
                  {
                    y: 950,
                  },
                ],
              });
            }
            moveDownUp8() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint11,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 3000,
                tweens: [
                  {
                    y: 950,
                  },
                  {
                    y: 740,
                  },
                ],
              });
            }
            moveDownUp9() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint12,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 3000,
                tweens: [
                  {
                    y: 1810,
                  },
                  {
                    y: 1610,
                  },
                ],
              });
            }
            moveDownUp10() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint13,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 3000,
                tweens: [
                  {
                    y: 1588,
                  },
                  {
                    y: 2010,
                  },
                ],
              });
            }
        
            moveDownUp11() {
              console.log("moveDownUp");
              this.tweens.timeline({
                targets: this.enemyPoint14,
                ease: "Linear",
                loop: -1, // loop forever
                duration: 2000,
                tweens: [
                  {
                    y: 1580,
                  },
                  {
                    y: 1910,
                  },
                ],
              });
            }

            moveRightLeft5() {
              console.log("moveRightLeft");
              this.tweens.timeline({
                targets: this.enemyPoint15,
                loop: -1, // loop forever
                ease: "Linear",
                duration: 2000,
                tweens: [
                  {
                    x: 1062,
                  },
                  {
                    x: 666,
                  },
                ],
              });
            }
            moveRightLeft6() {
              console.log("moveRightLeft");
              this.tweens.timeline({
                targets: this.enemyPoint16,
                loop: -1, // loop forever
                ease: "Linear",
                duration: 2000,
                tweens: [
                  {
                    x: 670,
                  },
                  {
                    x: 1063,
                  },
                ],
              });
            }
            moveRightLeft7() {
              console.log("moveRightLeft");
              this.tweens.timeline({
                targets: this.enemyPoint17,
                loop: -1, // loop forever
                ease: "Linear",
                duration: 2000,
                tweens: [
                  {
                    x: 1174,
                  },
                  {
                    x: 740,
                  },
                ],
              });
            }
            moveRightLeft8() {
              console.log("moveRightLeft");
              this.tweens.timeline({
                targets: this.enemyPoint18,
                loop: -1, // loop forever
                ease: "Linear",
                duration: 2000,
                tweens: [
                  {
                    x: 729,
                  },
                  {
                    x: 1060,
                  },
                ],
              });
            }
    ending (player,tile) {
      console.log("ending function")
      this.scene.start("ending")}
      
} //////////// end of class world ////////////////////////
