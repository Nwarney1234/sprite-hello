let msg = "Hello World!"
let mySprite = sprites.create(assets.image`Wrld`, SpriteKind.Player)
scene.setBackgroundColor(4)
mySprite.say(msg)
console.log("Hello Console")
mySprite.say(":)", 1000)
