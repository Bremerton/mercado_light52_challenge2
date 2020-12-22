console.log("Light Level" + input.lightLevel())
let x = input.lightLevel()
while (true) {
    if (input.lightLevel() <= 13) {
        light.clear()
    } else if (input.lightLevel() >= 7) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 167, 0))
    }
    
}
