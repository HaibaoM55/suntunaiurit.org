<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Imagini Idioate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Aici sunt imagini idioate :)" />
        <link rel = "icon" href = "../img/favicon.png" />
        <link rel = "stylesheet" href = "index.css"/>
        <link rel = "stylesheet" href = "../css/navbar.css"/>
        <link rel = "stylesheet" href = "../css/global.css"/>
    </head>
    <body>
        <div id = "navbar">
            <div id = "bara">
                <img src = "../img/bara.png" alt = "bara" onclick = "bara()"/>
            </div>
            <ul id = "ul">
                <a href = "/" id = "titlu"><h2>SuntUnAiurit</h2></a>
                <li>
                    <a href = "/">Acasa</a>
                </li>
                <li>
                    <a href = "/proiecte">Proiecte</a>
                </li>
                <li>
                    <a href = "/contact">Contact</a>
                </li>
            </ul>
        </div>
        <h1 stlye = 'text-align: center; font-size: xx-large;'>Imagini Idiote</h1>
        <?php
        $content = scandir("/home/crumrdtp/public_html/imgidiot");
        $i = 0;
        $len = count($content);
        while($i < $len){
            if($content[$i] == "index.php" or $content[$i] == "." or $content[$i] == ".."){
                $i++;
            }else{
                echo "<a style = 'font-size: x-large'>Fisier:</a>
                <a href = '$content[$i]' class = 'subliniat' style = 'font-size: x-large;'>$content[$i]</a>";
                echo "<br>";
                $i++;
            }
        }
        ?>
    </body>
    <script src = "../js/global.js"></script>
    <script src = "../js/navbar.js"></script>
</html>