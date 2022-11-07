import * as React from "react";
import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";
import hemaLogo from "../../images/hemaLogo.webp";

var currentTime = new Date()
var year = currentTime.getFullYear()

type Link = {
   label: string;
   url: string;
};

const links: Link[] = [
   {
      label: "Privacy Policy",
      url: "/",
   },
   {
      label: "Copyright/Legal Info",
      url: "/copyright"
   },
];


const Footer = () => {
   const linkDoms = links.map((link) => (
      <div key={link.label}>
         <a href={link.url} target="_blank" rel="noreferrer">
            {link.label}
         </a>
      </div>
   ));

   return (
      <>
         <footer className="footer">
            <div className="container">
               <div className="footerLogo">
                  <a className="logo" href="/">
                     {/*<img className="" src={logo} alt="Prezzo" />*/}
                     {/*<h1>HEMA</h1>*/}
                  </a>
               </div>
               <div className="footer_links">
                  <div className="column">
                     <a href="/" target="_self" title="Prezzo" rel="noreferrer">
                        <img src={hemaLogo} alt="Logo" className="fadein imgFinal"/>
                     </a>
                     <div className="social-media">
                        <a href="#" target="_blank" title="Facebook" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Instagram" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Twitter" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                     </div>
                  </div>
                  <div className="column">
                        <h5><strong>populaire categorieën</strong></h5>
                        <ul>
                           <li><a href="https://jobs.prezzorestaurants.co.uk/" title="Careers">dameskleding</a></li>
                           <li><a href="/community-commitments/" title="Community Commitments">meisjeskleding</a></li>
                           <li><a href="/health/hub/" title="Health Hub">jongenskleding</a></li>
                           <li><a href="/offers/" title="Offers">babykleding</a></li>
                           <li><a href="/competitions/" title="Competitions">wonen en slapen</a></li>
                           <li><a href="/competitions/" title="Competitions">wijn</a></li>
                           <li><a href="/competitions/" title="Competitions">gebak</a></li>
                        </ul>
                  </div>
                  <div className="column">
                     <h5><strong>meer voor HEMA fans</strong></h5>
                     <ul>
                        <li><a href="/menus/main-menu/" title="Main Menu">'meer HEMA' klantenpas</a></li>
                        <li><a href="/menus/kids-menu-2021/" title="Kid's Menu">lees onze folders</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">HEMA op social media</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">HEMA design contest</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">HEMA fotoservice</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">HEMA tickets</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">HEMA verzekeringen</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">inspiratie</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">nieuws</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h5><strong>meer over HEMA</strong></h5>
                     <ul>
                        <li><a href="/privacy-policy/" title="Privacy Policy">over ons bedrijf</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">corona update</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">werken bij HEMA</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">een duurzame HEMA</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">HEMA Foundatio</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">HEMA zakelijk</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">klantenservice</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">actievoorwaarden</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">saldo cadeaukaart opvragen</a></li>
                     </ul>
                  </div>
                  <div className="column">
                     <h5><strong>international</strong></h5>
                     <ul>
                        <li><a href="/find-and-book/" title="Book a table">HEMA België</a></li>
                        <li><a href="/order-online/" title="Delivery &amp; Collection">HEMA Duitsland</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Engeland</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Frankrijk</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Oostenrijk</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Spanje</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Verenigde Arabische Emiraten</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">HEMA Mexico</a></li>
                     </ul>
                  </div>
                  {/*<div className="column">
                     <h5>FAQs</h5>
                     <ul>
                        <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us/requests/new" title="Contact Us">Contact Us</a></li>
                        <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us" title="FAQs">FAQs</a></li>
                        <li><a href="/about-prezzo/modern-slavery-statement/" title="Modern Slavery Statement">Modern Slavery Statement</a></li>
                     </ul>
                  </div>*/}
               </div>
            </div>




         </footer>
      </>
   );
};

export default Footer;
