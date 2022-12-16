<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Comentarii</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Salut, sunt HaibaoM55, imi place sa programez si acesta este site-ul meu!" />
        <link rel = "icon" href = "/img/favicon.png" />
        <link rel = "stylesheet" href = "index.css"/>
        <link rel = "stylesheet" href = "/css/navbar.css"/>
        <link rel = "stylesheet" href = "/css/global.css"/>
    </head>
    <script src = "/js/components/navbar.js"></script>
    <body>
        <div id = "navbar">
            <script>
                navbar();
            </script>
        </div>
        <?php 
            $dev = true;
            if($dev){
                $leloc = "localhost:3000/testing/comentarii/";
            }else{
                $leloc = "https://suntunaiurit.org/testing/comentarii/";
            }
        ?>
        <?php 
            $com = fopen("../comentariitxt/com.txt", "r") or die("EROARE!");
            while(!feof($com)) {
                $lao = fgets($com);
                if(strpos($lao, "u/") !== false){
                    $lao = str_replace("u/", "", $lao);
                    echo "<div class = 'comment'>";
                    echo "<h1>$lao spune:</h1>";
                }
                else if(strpos($lao, "m/") !== false){
                    $lao = str_replace("m/", "",$lao);
                    echo "<h2>$lao</h2>";
                    echo "</div>";
                }
                // echo "$lao <br>";
            }
        ?>

        <?php 
            for($i = 1; $i <= 10; $i++){
                echo "<br>";
            }
        ?>

        <form method="POST">
            <input type = "text" name = "nume" placeholder = "Nume" id = "nume">
            <br>
            <input class="add_comment" placeholder="Scrie comentariul aici!" name = "com_text"></input>
            <br>
            <input type="submit" name="submit" value="TRIMITE">
        </form>
        

        <?php
            function scrie_com($nume, $txt){
                $fcom = fopen("../comentariitxt/com.txt", "r") or die("EROARE!");
                $txtfinal = fread($fcom, filesize("../comentariitxt/com.txt")) . "\n\n" . "u/$nume\nm/$txt";
                $fcom2 = fopen("../comentariitxt/com.txt", "w") or die("EROARE");
                fwrite($fcom2, $txtfinal);
                echo "<br><h1>Trimis cu succes!</h1>";
                echo "<script>setTimeout(() => {location.href = '$leloc';}, 500)</script>";
                // fwrite($fcom, );
            }
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $nume = $_POST['nume'];
                $txt = $_POST['com_text'];
                if(empty($nume)){
                    echo "Nu ai specificat numele!";
                    echo "<script>setTimeout(() => {location.href = '$leloc';}, 500)</script>";
                }else if(empty($txt)){
                    echo "Nu ai specificat textul!";
                    echo "<script>setTimeout(() => {location.href = '$leloc';}, 500)</script>";
                }else{
                    scrie_com($nume, $txt);
                }
            }
        ?>


    </body>
    <script src = "/js/global.js"></script>
    <script src = "/js/navbar.js"></script>
</html>