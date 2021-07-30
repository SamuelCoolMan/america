tiles.setTilemap(tilemap`THE WORLD`)
let mySprite = sprites.create(assets.image`Yakko`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
