import React from 'react';
import './style/BlogsPreview.css';
import BlogPreview from './BlogPreview';

function BlogsPreview() {
    return (
        <div className="BlogsPreview">
        <BlogPreview 
            src="https://darwin.md/images/blog/2021/01/800x600-ro.webp" 
            date="19-01-2021"
            heading="Samsung Lanseaza noua generație S21"
            text="Noua generație de flagship-uri a companiei sud-coreene Samsung, lansată astăzi, 
            include un model de bază și două device-uri ceva mai performante care se remarcă printr-un design exclusiv..."
            hashtag1 = "#Telefoane"
            hashtag2 = "#Smartphone"
            hashtag3 = "#Samsung"
            hashtag4 = "#Galaxy"
        />
        <BlogPreview 
            src="https://darwin.md/images/blog/2021/01/gadgets_2021_m.webp" 
            date="06-01-2021"
            heading="Gadget-uri la care trebuie să atragi atenția în 2021!"
            text="Iată că noul an își intră în drepturi și a venit timpul să aruncăm o privire peste noile device-uri ce vor fi în top-ul clasamentelor în anul 2021!
            Da, anul precedent a fost bogat în evenimente tehnologice..."
            hashtag1 = "#Gadget"
            hashtag2 = "#Smartphone"
            hashtag3 = "#Galaxy"
            hashtag4 = "#Samsung"
            hashtag5 = "#Watch"
            hashtag6 = "#Casti"
        />
        <BlogPreview 
            src="https://darwin.md/images/blog/2020/12/kfconsole_m.webp" 
            date="25-12-2020"
            heading="Consola de la KFC: Cyberpank la maxim și găinușă prăjită"
            text="Se pare că, Microsoft și Sony au în listă cu un concurent mai mult la capitolul console! Nu, asta nu e Google cu Stadia și nici Nintendo cu consola sa renumită.
            Aici, este vorba depre rețeaua de restaurante KFC..."
            hashtag1 = "#Gadget"
            hashtag2 = "#Console și jocuri"
            hashtag3 = "#Jocuri"
            hashtag4 = "#Cyberpunk"
            hashtag5 = "#2077"
        />
          <BlogPreview 
            src="https://darwin.md/images/blog/2020/12/lg_wing_m.webp" 
            date="22-12-2020"
            heading="LG WING: smartphone-ul care definește noi orizonturi"
            text="De curând arhicunosuta compania sud-coreeană a prezentat publicului noul său smartphone trasformer - LG WING. 
            Un telefon cu adevărat foarte ciudat. Nu că nu am fi văzut alte device-uri cu o funcție rotativă până acum..."
            hashtag1 = "#Smartphone"
        />
          <BlogPreview 
            src="https://darwin.md/images/blog/2020/12/cyber_m.webp" 
            date="15-12-2020"
            heading="CYBERPUNK 2077: Review-ul celui mai așteptat..."
            text="Poți da uitării cei 8 ani de veghe, amânările constante ale lansării și nivelul copleșitor de hype. 
            Cyberpunk 2077 e aici! Pentru mulți dintre noi, acest joc e o dovadă clară că CD Projekt RED..."
            hashtag1 = "#Gadget"
            hashtag2 = "#Console și jocuri"
            hashtag3 = "#Jocuri"
            hashtag4 = "#Cyberpunk"
            hashtag5 = "#2077"
        />
          <BlogPreview 
            src="https://darwin.md/images/blog/2020/11/samsung_sale_m.webp" 
            date="23-11-2020"
            heading="SAMSUNG BIG SALE: reduceri cu adevărat GRANDioase"
            text="Pentru cei care nu au reușit să profite de reducerile acestei luni, noi, cei de la Darwin am decis să 
            vă alintăm cu un sale special ce la sigur îți va fi pe plac!..."
            hashtag1 = "#Samsung"
            hashtag2 = "#Smartphone"
            hashtag3 = "#Galaxy"
            hashtag4 = "#Watch"
            hashtag5 = "#Casti"
        />

        </div>
    )
};

export default BlogsPreview;
