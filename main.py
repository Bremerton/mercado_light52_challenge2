print("Light Level"+input.light_level())
x=input.light_level()
while True:
    if input.light_level() > 13:
        light.clear()
    elif input.light_level() > 7:
        light.set_all(light.rgb(0,0,255))
    else:
        light.set_all(light.rgb(255,167,0))