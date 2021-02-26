import React from 'react';
import './style/ShopsInfo.css';
import Map from './Map';

function ShopsInfo() {
    return (
        <div className="ShopsInfo">
            <div className="magazinele-noastre">
                <div className="magazine-text-large"><p>Magazinele noastre</p></div>
                <div className="magazine-locations">
                    <div className="magazine-location-mult"><p>Chișinău</p><div className="loc-nr">10</div></div>
                    <div className="magazine-location-mult"><p>Bălți</p><div className="loc-nr">2</div></div>
                    <div className="magazine-location"><p>Edineț</p></div>
                    <div className="magazine-location"><p>Ungheni</p></div>
                    <div className="magazine-location"><p>Orhei</p></div>
                    <div className="magazine-location"><p>Călărași</p></div>
                    <div className="magazine-location"><p>Hîncești</p></div>
                    <div className="magazine-location"><p>Ceadîr-Lunga</p></div>
                    <div className="magazine-location"><p>Strășeni</p></div>
                    <div className="magazine-location"><p>Drochia</p></div>
                    <div className="magazine-location"><p>Soroca</p></div>
                    <div className="magazine-location"><p>Glodeni</p></div>
                    <div className="magazine-location"><p>Cahul</p></div>
                    <div className="magazine-location"><p>Nisporeni</p></div>
                </div>
                <div className="magazine-text">
                    <div className="magazine-text-header">Darwin – cel mai ambițios retailer de gadgets & smartphones</div>
                    <div className="paragraph1">
                        <p>
                        Da, noi vindem smartphone-uri, laptop-uri, tablete și o mulțime de gadgeturi. Dar pe lângă asta, schimbăm lumea din jur.
                         Organizăm evenimente colorate, precum e Festivalul Culorilor Darwin, și emisiuni utile, cum e Laboratorul Darwin.
                        </p>
                    </div>
                    <div className="paragraph2">
                        <p>
                        Suntem dealeri autorizați ai companiilor Apple, Samsung, Fly, Philips, Nokia, Acer, Lenovo, Dell, Asus, Intel, JBL,
                         Beats by Dr. Dre, Skullcandy și altele. Ne-am lansat în martie, 2013, în Republica Moldova, pentru a colora 
                         experiența ta digitală cu emoție, stil și creativitate.
                        </p>
                    </div>
                </div>
                <div className="magazine-button">
                    <p>Magazine în apropiere</p>
                </div>
            </div>

            <div className="map">
                <Map />
            </div>
        </div>
    )
};

export default ShopsInfo;
