import featured from './recipes';
/** @function generateCardHTML
 * Generates a html string represeting the cards
 * @returns {string[]}
 */
function generateCardHTML() {
  return featured(8).map(function(card) {
      return `
                <a class="card" href="./${card.images[0]}">
                <image src="${card.images[0]}" alt="thumbnail">
                <span>${card.name}</span>
                <span>${card.price}</span>
                </a>
              `; // href="${card.url}"
    }).join('');
  }
/** @function serveIndex
 * Serves an index page
 */
export function serveIndex(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!doctype html>
  <html lang="en">
    <head>
      <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
      <link rel="stylesheet" type="text/css" href="main.css">
      <title>My Website</title>
    </head>
    <body class="background mexico">
      <header id="header">
          <div>
            <strong id="logo">
                Kistner's Flowers
            </strong>  <!--<img src="../public/images/logo2.png" alt="logo" id="logo"></img>-->
          </div>
          <nav class="navbar"> <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_right-->
              <ul>
                  <li class="dropdown" style="float: right;">
                      <button class="dropbtn">
                          <a href="#" target="_self" class="dropdown unselected">About</a>
                      </button>
                      <div class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                      </div>
                  </li>
                  <li class="dropdown" style="float: right;">
                      <button class="dropbtn">
                          <a href="#" target="_self" class="dropdown unselected">Sororities</a>
                      </button>
                      <div class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                      </div>
                  </li>
                  <li class="dropdown" style="float: right;">
                      <button class="dropbtn">
                          <a href="#" target="_self" class="dropdown unselected">Occasion</a>
                      </button>
                      <div class="dropdown-content">
                          <a href="#">New Baby!</a>
                          <a href="#">Daily Expressions</a>
                          <a href="#">Garden Paradise</a>
                          <a href="#">Wedding</a>
                          <a href="#">Sympathy</a>
                          <a href="#">Birthday</a>
                          <a href="#">Shop All Occasions</a>
                      </div>
                  </li>
              </ul>
          </nav>
      </header>
      <main id="thumbnails">
            ${generateCardHTML()}
      </main>
      <footer class="footer">
          <div id="footer-content">
              <div id="footer-contact">
                  <div id="address">
                      <h5 id="name" itemprop="name">Kistner's Flowers</h5>
                      <p id="street" itemprop="streetAddress">1901 Pillsbury Dr.&nbsp;</p>
                      <p id="town">
                      <span itemprop="addressLocality">Manhattan</span>,
                      <span itemprop="addressRegion">KS</span>&nbsp; <span itemprop="postalCode">66502</span></p>
                      <p>
                  </div>
                  <div id="phone-number">
                      <span itemprop="telephone">
                      <a href="tel:(785) 776-7044">(785) 776-7044</a></span>
                      <br/>
                      <span><a href="tel:(800) 532-3409">(800) 532-3409</a></span></p>
                  </div>
                  <div class="footer-social">
                      <a id="facebook" href="https://www.facebook.com/KistnersFlowers1946/?fref=ts" target="_blank">
                          <img src="facebookGold.png" alt="IMG" width="25" height="25">
                      </a>
                      <a href="https://www.instagram.com/kistnersflowers/" target="_blank">
                          <img src="instagramGold.png" alt="IMG" width="25" height="25">
                      </a>
                      <a id="pintrest" href="https://www.pinterest.com/kistnersflowers/boards/" target="_blank">
                          <img src="pinterestGold.png" alt="IMG" width="25" height="25">
                      </a>
                  </div>
              </div>
              <div class="vertical-line"></div>
              <div class="footer-navigation">
                  <ul>
                      <li>
                          <h5>Learn More About</h5>
                              <ul>
                                  <li><a href="/about-us">About Us</a></li>
                                  <li><a href="/faq#Privacy Policy / Security">Safe Shopping</a></li>
                                  <li><a href="/faq#Privacy Policy / Security">Privacy</a></li>
                                  <li><a href="/about-us#Delivery Policy">Delivery</a></li>
                              </ul>
                          </li>
                      <li>
                          <h5>Customer Service</h5>
                          <ul>
                              <li><a href="/faq#Policy Info">Substitutions</a></li>
                              <li><a href="/sitemap">Site Map</a></li>
                              <li><a href="/faq">Help/FAQs</a></li> <!--https://www.kistnersflowers.com/about-us#Delivery%20Policy-->
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
      </body>
  </html>
    `);
}
