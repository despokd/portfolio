<?php

/**
 * Portfolio page
 * 
 * @author Kilian Domaratius <portfolio@kdomaratius.de>
 */

$page_title = 'Home';

//insert HTML header
require_once '/_includes/html_header.php';
?>

<div class="container-fluid">
    <div class="row">
        <aside class="col-lg-2">
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
                    <form id="contact-form" method="post" action="/_includes/mailer.php">
                        <div class="form-label-group">
                            <label for="contact-name" class="label-required">Name</label>
                            <input type="text" class="form-control" id="contact-name" placeholder="Max Mustermann" required>
                        </div>
                        <div class="form-label-group">
                            <label for="contact-email" class="label-required">E-Mail</label>
                            <input type="email" class="form-control" id="contact-email" placeholder="name@beispiel.de" required>
                        </div>
                        <div class="form-label-group">
                            <label for="contact-message" class="label-required">Nachricht</label>
                            <textarea class="form-control" id="contact-message" rows="3"></textarea>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="contact-privacy" required>
                            <label class="form-check-label" for="contact-privacy">Ich aktzeptiere die <a href="/privacy" target="_blank">Datenschutzbestimmungen</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary">Senden</button>
                        <p>Mit <span class="label-required"></span> markierte Felder sind erforderlich</p>
                        <div id="contact-alerts">
                        </div>
                    </form>
                </div>
            </section>

            <footer class="row">
                <div class="col">
                    <h2>Footer</h2>
                    <p>&copy; 2020 Kilian Domaratius</p>
                </div>
            </footer>
        </main>
    </div>
</div>

<?php
//insert HTML footer
require_once '/_includes/html_footer.php';
