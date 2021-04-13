msg = "Hello World!"
mySprite = sprites.create(assets.image("""
    Wrld
"""), SpriteKind.player)
scene.set_background_color(4)
mySprite.say(msg)
