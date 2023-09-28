<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form action="site.php" method="get">
        <h1>Πόσο τον έχεις;</h1>
        <input type="text" name="penisSize"> <br>
        <input type="submit">
    </form>

    <div class="answer">
    <?php
        if (isset($_GET["penisSize"]))
            if ($_GET["penisSize"] > 20)
                echo "Όπα ρε μάγκα.";
            else {
                echo "Τον έχεις: ";
                echo $_GET["penisSize"];
                echo " εκατοστά.";
            }
    ?>
        </div>
</body>
</html>