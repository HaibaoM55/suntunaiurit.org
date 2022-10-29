import commands
inputext = "root@suntunaiurit.org"
print(f"SuntUnAiurit Shell v{commands.getversion()}")
while(True):
    cmd = input(f"{inputext} \x1b[6;30;44m{commands.getdir()}\x1b[0m>")
    if(cmd == "ver"):
        commands.ver()
    elif(cmd == "exit"):
        break
    elif("make component " in cmd):
        comp_name = cmd.replace("make component ", "")
        commands.make_component(comp_name)
    elif("make page " in cmd):
        page_name = cmd.replace("make page ", "")
        commands.make_page(page_name)
    elif("del component " in cmd):
        comp_name = cmd.replace("del component ", "")
        commands.del_component(comp_name)
    elif("del page " in cmd):
        page_name = cmd.replace("del page ", "")
        commands.del_page(page_name)
    elif("make file " in cmd):
        file_name = cmd.replace("make file ", "")
        commands.make_file(file_name)
    elif("del file " in cmd):
        file_name = cmd.replace("del file ", "")
        commands.del_file(file_name)
    elif("cd " in cmd):
        directory = cmd.replace("cd ", "")
        commands.cd(directory)
    elif("img " in cmd):
        image = cmd.replace("img ", "")
        commands.img(f"{image}")
    elif("cat " in cmd):
        path = cmd.replace("cat ", "")
        commands.cat(f"{path}")
    elif(cmd == "clear"):
        commands.clear()
    elif(cmd == "tree"):
        commands.tree()
    elif(cmd == "ls"):
        commands.ls()
    else:
        print("Unknown command")