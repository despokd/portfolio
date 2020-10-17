<?php
/**
 * Portfolio page
 * 
 * @author Kilian Domaratius <portfolio@kdomaratius.de>
 */

$page_title = 'Home';

//insert HTML header
require_once '/html_header.php';
?>

<div class="container-fluid">
    <div class="row">
        <aside class="col-lg-4">
            <nav id="navbar" class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Item 1</a>
                    <a class="nav-link" href="#item-2">Item 2</a>
                    <a class="nav-link" href="#item-3">Item 3</a>
                </nav>
            </nav>
        </aside>

        <main class="col" data-spy="scroll" data-target="#navbar" data-offset="0">
            <header class="row">
                <div class="col">
                    <h1>Kilian Domaratius</h1>
                    <p>Kurzbeschreibung</p>
                </div>
            </header>

            <section class="row cv">
                <div class="col">
                    <h2>CV</h2>
                </div>
            </section>
            <section class="row contact">
                <div class="col">
                    <h2>Kontakt</h2>
                </div>
            </section>

            <footer class="row">
                <div class="col">
                    <h2>Footer</h2>
                </div>
            </footer>
        </main>
    </div>
</div>

<?php
//insert HTML footer
require_once '/html_footer.php';
