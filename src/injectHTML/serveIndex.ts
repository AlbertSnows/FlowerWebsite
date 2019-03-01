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

function policyButton() {
    // console.log('in method');
    // document.getElementById('policy2').innerHTML = 'Clicked';
    // document.getElementById('privacy-button').innerHTML = 'Clicked';


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
                        <a href="#">About Us</a>
                        <a href="#">Meet The Staff</a>
                        <a href="#">Visit Our Store</a>
                        <a href="#">Help</a>
                        <a href="#">(800) 532-3409</a>
                      </div>
                  </li>
                  <li class="dropdown" style="float: right;">
                      <button class="dropbtn">
                          <a href="#" target="_self" class="dropdown unselected">Sororities</a>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">Gamma Phi Beta</a>
                        <a href="#">Alpha Chi Omega</a>
                        <a href="#">Alpha Delta Pi</a>
                        <a href="#">Delta, Delta, Delta</a>
                        <a href="#">Alpha Xi Delta</a>
                        <a href="#">Chi Omega</a>
                        <a href="#">Zeta Tau Alpha</a>
                        <a href="#">Kappa Alpha Theta</a>
                        <a href="#">Kappa Kappa Gamma</a>
                        <a href="#">Kappa Delta</a>
                        <a href="#">Pi Beta Phi</a>
                        <a href="#">Sigma Kappa</a>
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
                          <a target="__self" href="https://www.pinterest.com/kistnersflowers/">Wedding</a>
                          <a target="__self" href="https://www.pinterest.com/kistnersflowers/local-altars/">Funeral</a>
                          <a href="#">Birthday</a>
                          <a href="#">Shop All Occasions</a>
                      </div>
                  </li>
              </ul>
          </nav>
      </header>
      <main>
        <div id="home-page-div">
            ${generateCardHTML()}
        </div>
        <div id="privacy-div">
        <!doctype html>
        <html lang="en">
          <head>
            <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
            <link rel="stylesheet" type="text/css" href="main.css">
            <title>My Website</title>
          </head>
            <body class="background mexico">
                <p>
                    <h1>
                        Substitution Policy
                    </h1>
                    <p>
                        Occasionally, substitutions may be necessary to create your bouquet due to the
                        availability of certain flowers in various parts of the country. Care is taken to
                         maintain the style, theme and color scheme of the arrangement, using flowers of equal
                         value. Additionally, the substitution of certain keepsake items may be necessary due to
                          increased demand, especially during major holidays. In single-flower arrangements,
                          such as an all rose bouquet, or orchids, we will make every attempt to match the
                          flower type, but may substitute with another color.
                    </p>
                    <h1>
                        Privacy Policy
                    </h1>
                    <p>
                        This privacy statement has been created in order to demonstrate our firm commitment to protecting customer privacy.
                    </p>
                    <h2>
                        Information We Collect
                    </h2>
                    <p>
                        If you open an account on our site or make a purchase, we need your contact information
                         including your name, e-mail address and mailing address to complete your transaction.
                    </p>
                    <p>
                        When you visit our website, we also collect some basic information that does not
                        identify individual users. We use this information to determine our users demographics
                         and interests, so that we can better understand and serve our users.
                    </p>
                    <h2>
                        "Cookies"
                    </h2>
                    <p>
                        Cookies are small files which store certain information about your activity on the
                        website and are stored on your computers hard drive. Our cookies do not contain any
                         personally identifying information. We use cookies to let us know that you are a prior
                          customer, so that you dont have to reenter information you gave us on your prior
                           visits. Most web browsers automatically accept cookies, but most allow you to
                            instruct your browser to prevent the use of cookies. However, if you disable
                             cookies, you will not be able to use certain features of this website.
                    </p>
                    <p>
                        Our Use and Disclosure of Your Information
                    </p>
                    <p>
                        When opening an account or making a purchase, you have an opportunity to opt-in or
                         opt-out from receiving emails from us. If you opt-in to receive information from us,
                          we may use your purchase history, contact information and other registration
                           information to provide you with more relevant information and email content. We
                            may send emails to our users regarding changes in our services or other information
                             we believe will be of interest to our users. If you prefer not to receive these
                              emails, you can send us an email with the subject line no emails or reply to our
                               email with the subject line no emails.
                    </p>
                    <p>
                        If you send us personal correspondence, such as emails or letters, or if other users or
                         third parties send us correspondence about your activities on our site, we may collect
                          such information. We may use that information and other information that we obtain
                           from your use of our site to resolve disputes, troubleshoot problems and enforce our agreement for Terms of Use.
                    </p>
                    <p>
                        We may share aggregate statistics about our sales, traffic patterns and related site
                         information with other businesses, but these statistics will include no personally
                          identifying information.
                    </p>
                    <p>
                        We may share your information with Teleflora and other reputable vendors for the purpose
                         of sending out special offers via email and/ or in connection with the services
                          provided by our site such as the delivery of flowers. Your information will not be
                           shared for any other purpose and will be kept secured.
                    </p>
                    <p>
                        We cannot ensure that all of your private communications and other personally
                         identifiable information will never be disclosed in ways not otherwise described in
                          this Privacy Statement. For example, we may be required to disclose information to
                           the government or third parties under certain circumstances, or third parties may
                            unlawfully intercept or access transmissions or private communications. We can (and
                                 you authorize us to) disclose any information about you to law enforcement or
                                  other government officials as we, in our sole discretion, believe necessary
                                   or appropriate in connection with an investigation of fraud, intellectual
                                    property infringements, or other activity that may be illegal or may expose us to legal liability.
                    </p>
                    <h2>
                        Security
                    </h2>
                    <p>
                        This site has security measures in place to protect the loss, misuse and alteration of
                         the information under our control.
                    </p>
                    <p>
                        All user credit card information is securely communicated using secure socket layer
                         (SSL) software, which is the industry standard and among the best software available
                          for secure commerce transactions.
                    </p>
                    <p>
                        All user information stored on our server is stored in an encrypted format.
                         Notwithstanding these efforts, we caution you that perfect security does not exist on the Internet.
                    </p>
                    <h2>
                        Linked Sites
                    </h2>
                    <p>
                        If this site contains any links to other websites, we are not responsible for the
                         privacy practices or the content of such websites.
                    </p>
                    <h2>
                        Changes to Privacy Statement; Consent
                    </h2>
                        <p>
                            We may update this Privacy Statement from time to time. You should check this page
                             periodically for changes. By using our site, you consent to the collection and use
                              of your information by us as described in this Privacy Statement.
                        </p>
                    <h2>
                        Questions and Comments
                    </h2>
                    <p>
                        We welcome your questions and comments about this Privacy Statement.
                    </p>
                </p>
            </body>
        </html>
        </div>
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
                                  <li><button id="privacy-button"><a href="#">Privacy</a></button></li>
                                  <!--<li><input  id="privacy-input" type="button" value = "Button Text" ></input></li>-->
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
      <script type="application/javascript" src="client.js"></script>
      </body>
  </html>
    `);
}
