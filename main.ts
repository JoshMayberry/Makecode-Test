let mySprite = sprites.create(img`
    . . . . . . c b b b b b . . . . 
    . 1 1 3 . . 4 4 2 4 4 b b b . . 
    1 1 3 . 4 4 4 4 2 4 4 4 4 b c . 
    . 1 . 4 4 4 4 4 2 4 4 5 4 4 e . 
    . 1 1 1 1 4 5 4 2 4 4 4 4 4 b c 
    e 3 4 4 1 1 1 4 2 4 4 4 5 4 4 e 
    e b b 4 4 4 4 2 2 4 4 4 4 4 b e 
    . e b 4 4 4 4 2 1 4 4 4 4 b e . 
    8 7 e e b 2 2 4 4 1 1 b e e 6 8 
    8 7 2 e 2 2 e e e e 1 e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 1 2 2 6 c e 
    e c 6 7 6 6 7 7 7 1 6 7 6 c c e 
    e b e 8 8 c c 8 8 1 c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Player)
mySprite.x = 0
