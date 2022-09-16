<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Poll</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Salut, sunt HaibaoM55, imi place sa programez si acesta este site-ul meu!" />
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
        <div style = "font-size: xx-large;">
            <h2>Poll bazat!11!1!!</h2>
            <h2>Vreti sa fac un blog pe suntunaiurit?</h2>
            <h2>
                In principal s-ar axa pe programare si tutoriale
                (ma straduiesc sa fie bune).
            </h2>
            <form method = "post">
                <input class = "btn1" type = "submit" value = "Da, este o idee mafioata😎" name = "da">
                </input>
                <br>
                <br>
                <br>
                <input class = "btn1" type = "submit"
                value = "Nu, este foarte naspa🤢🤮" name = "nu"></button>
            </form>
        </div>
                <?php 
        if(array_key_exists('da', $_POST)) {
            da();
        }
        else if(array_key_exists('nu', $_POST)) {
            nu();
        }
        function da() {
            $da = fopen("da.txt", "r") or die("EROARE!");
            $nr_da = fread($da,filesize("da.txt"));
            $nr_da++;
            fclose($da);
            $da = fopen("da.txt", "w") or die("EROARE!");
            fwrite($da, $nr_da);
            $val_da = $nr_da;
            fclose($da);
            $nu = fopen("nu.txt", "r") or die("EROARE!");
            $val_nu = fread($nu, filesize("nu.txt"));
            fclose($nu);
            echo "<h2>$val_da oameni au votat cu da</h2>";
            echo "<h2>$val_nu oameni au votat cu nu</h2>";
        }
        function nu() {
            $da = fopen("da.txt", "r") or die("EROARE!");
            $val_da = fread($da,filesize("da.txt"));
            fclose($da);
            $nu = fopen("nu.txt", "r") or die("EROARE!");
            $val_nu = fread($nu, filesize("nu.txt"));
            fclose($nu);
            $val_nu++;
            $nu = fopen("nu.txt", "w") or die("EROARE!");
            fwrite($nu,$val_nu);
            fclose($nu);
            echo "<h2>$val_da oameni au votat cu da</h2>";
            echo "<h2>$val_nu oameni au votat cu nu</h2>";
        }
        ?>
    </body>
    <script src = "../js/global.js"></script>
    <script src = "../js/navbar.js"></script>
</html>