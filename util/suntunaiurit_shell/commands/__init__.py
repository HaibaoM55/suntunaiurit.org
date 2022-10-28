import os
from sys import platform
os.system("color")

v = "0.1"
pathtoroot = "../.."
ghilimele = '"'
acolada1 = "{"
acolada2 = "}"
def getversion():
    return v;
def shellprint(args):
    print(f"[SuntunaiuritShell]{args}")
def ver():
    with open("../../info/ver") as f:
        version = f.read()
    print(f"Suntunaiurit v{version}")
    print(f"SuntunaiuritShell v{v}")

def make_component(name):
    js_path = f"{pathtoroot}/js/components/{name}.js"
    html_path = f"{pathtoroot}/html_components/{name}.html"
    js_code = f"""
let {name}path = '{html_path}'
function {name}(){acolada1}
    fetch({name}path)
    .then(x => x.text())
    .then(y => $({name}).innerHTML = y)
{acolada2}
"""
    with open(js_path, "w") as js:
        js.write(js_code)
        print("[SuntunaiuritShell]Written the js code")
    html_code = f"<h1>{name} merge</h1>"
    with open(html_path, "w") as html:
        html.write(html_code)
        print("[SuntunaiuritShell]Written the html code")
    code_to_use = f"""
<div id = {ghilimele}{name}{ghilimele}>
    <script>
        {name}();
    </script>
</div>
<script src = {ghilimele}/js/components/{name}.js{ghilimele}></script>
"""
    print(code_to_use)
def del_component(name):
    js_path = f"{pathtoroot}/js/components/{name}.js"
    html_path = f"{pathtoroot}/html_components/{name}.html"
    os.remove(js_path)
    print("[SuntunaiuritShell]Removed the js code")
    os.remove(html_path)
    print("[SuntunaiuritShell]Removed the html code")

def make_page(name):
    page_path = f"{pathtoroot}/{name}"
    html_path = f"{pathtoroot}/{name}/index.html"
    os.mkdir(page_path)
    shellprint("Made the directory")
    html_code = f'''<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>{name.capitalize()}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Suntunaiurit - {name}" />
        <link rel = "icon" href = "../img/favicon.png" />
        <link rel = "stylesheet" href = "index.css"/>
        <link rel = "stylesheet" href = "../css/navbar.css"/>
        <link rel = "stylesheet" href = "../css/global.css"/>
    </head>
    <script src = "../js/components/navbar.js"></script>
    <body>
        <div id = "navbar">
            <script>
                navbar();
            </script>
        </div>
    </body>
    <script src = "../js/global.js"></script>
    <script src = "../js/navbar.js"></script>
</html>
'''
    with open(html_path, "w") as html:
        html.write(html_code)
        shellprint("Written the html code")
    shellprint("Finished making a sample page.")
def del_page(name):
    page_path = f"{pathtoroot}/{name}"
    html_path = f"{pathtoroot}/{name}/index.html"
    os.remove(html_path)
    os.removedirs(page_path)
    shellprint("Finished removing the page.") 
def tree():
    os.system(f"tree {pathtoroot}")
def ls():
    folders = []
    files = []
    for file in os.listdir(pathtoroot):
        if(os.path.isdir(f"{pathtoroot}/{file}")):
            folders.append(file)
        else:
            files.append(file)
    for folder in folders:
        print('\x1b[6;30;44m' + folder + '\x1b[0m')
    for file in files:
        print('\x1b[6;30;42m' + file + '\x1b[0m')   
def cd(directory):
    global pathtoroot
    if pathtoroot[len(pathtoroot) - 1] == "/":
        if(os.path.exists(pathtoroot+directory)):
            pathtoroot = f"{pathtoroot}{directory}"
        else:
            shellprint("Path does not exist")
    
    else:
        if(os.path.exists(pathtoroot+"/"+directory)):
            pathtoroot = f"{pathtoroot}/{directory}"
        else:
            shellprint("Path does not exist")

def cat(path):
    content = ""
    with open(f"{pathtoroot}/{path}", "r") as cat:
        content = cat.read()
    print(content)
def img(image):
    if(platform == "win32"):
        os.system(f"start {pathtoroot}/{image}")
    else:
        shellprint("Only windows supported!")


def clear():
    if(platform == "win32"):
        os.system("cls")
    else:
        os.system("clear")
def getdir():
    if pathtoroot == "../..":
        return "~"
    x = len(pathtoroot) - 1
    while x > 0:
        x -= 1
        if(pathtoroot[x] == "/"):
            x+=1
            break
    cacat = []
    for i in range(x):
        cacat.append(pathtoroot[i])
    cacat = str(cacat)
    cacat = cacat.replace("[", "")
    cacat = cacat.replace("]", "")
    cacat = cacat.replace("'", "")
    cacat = cacat.replace(",","")
    cacat = cacat.replace(" ", "")
    lastdir = pathtoroot.replace(cacat, "")
    if lastdir == "..":
        return "~"
    else:
        return lastdir