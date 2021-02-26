import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../components/data';
import dataspecs from '../components/dataspecs';
import '../components/style/ProductScreen.css';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CompareIcon from '@material-ui/icons/Compare';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NewsLetter from '../components/NewsLetter';
import Map from '../components/Map';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ProductScreen(props) {

    const product = data.products.find(x => x._id === props.match.params.id);
    const specs = dataspecs.products.find(x => x._id === props.match.params.id);
 
    const IDproduct = product._id;
    const fullID = IDproduct.split("&");
    const rootID = fullID[0];
    const colorID = fullID[1];
    let memoryID = "";
    let memoryVariant1 = "";

    function requierMemoryId(){
        if(fullID[2]){memoryID = fullID[2]}
        return memoryID;
    }
    requierMemoryId();

    function memoryVariantFunc(){
        if(product.memory1){memoryVariant1 = "&" + product.memory1}
        return memoryVariant1;
    }
    memoryVariantFunc();

    const [radioFinalizeazaState, setradioFinalizeazaState] = useState(false);
    const [radioAsigurareState, setradioAsigurareState] = useState(true);
    const [radioProtectieState, setradioProtectieState] = useState(true);
    const [radioGarantieState, setradioGarantieState] = useState(true);
    const [radioSec8State, setradioSec8State] = useState(false);
    const [readMoreState, setreadMoreState] = useState(false);
    let [Counter, setCounter] = useState(1);

    function radioFinalizeazaClicked(){setradioFinalizeazaState(!radioFinalizeazaState);}
    function radioAsigurareClicked(){setradioAsigurareState(!radioAsigurareState);}
    function radioProtectieClicked(){setradioProtectieState(!radioProtectieState);}
    function radioGarantieClicked(){setradioGarantieState(!radioGarantieState);}
    function radioSec8Clicked(){setradioSec8State(!radioSec8State);}
    function readMoreClicked(){setreadMoreState(!readMoreState);}

    const decrement = () => {
        if (Counter > 1 ){
            setCounter(Counter-1)
        }
        else{
            setCounter(0)
        }
    }

    function increment(){
        setCounter(Counter+1)
    }

    return (
        <div className="ProductScreen">

            <div className="ProductScreen__section1">
                <div className="product-categories">
                    {product.category1 ? <div className="product-category">{product.category1}</div> :null}
                    {product.category2 ? <div className="product-category">{product.category2}</div> :null}
                    {product.category3 ? <div className="product-category">{product.category3}</div> :null}
                </div>
                <div className="productscreen-title">{product.titlu}</div>
                <div className="product-hashtags">
                    {product.hashtag1 ? <div className="product-hashtag">{product.hashtag1}</div> :null}
                    {product.hashtag2 ? <div className="product-hashtag">{product.hashtag2}</div> :null}
                    {product.hashtag3 ? <div className="product-hashtag">{product.hashtag3}</div> :null}
                    {product.hashtag4 ? <div className="product-hashtag">{product.hashtag4}</div> :null}
                    {product.hashtag5 ? <div className="product-hashtag">{product.hashtag5}</div> :null}
                    {product.hashtag6 ? <div className="product-hashtag">{product.hashtag6}</div> :null}
                    {product.hashtag7 ? <div className="product-hashtag">{product.hashtag7}</div> :null}
                </div>
                <div className="product-mainsection">
                    <div className="product-col1">
                        <div className="productscreen-images">
                            <div className="productscreen-image"><img src={product.img}/></div>
                            {product.img2 ? <div className="productscreen-image"><img src={product.img2}/></div> :null}
                            {product.img3 ? <div className="productscreen-image"><img src={product.img3}/></div> :null}
                            {product.img4 ? <div className="productscreen-image"><img src={product.img4}/></div> :null}
                            {product.img5 ? <div className="productscreen-image"><img src={product.img5}/></div> :null}
                            {product.img6 ? <div className="productscreen-image"><img src={product.img6}/></div> :null}
                            {product.img7 ? <div className="productscreen-image"><img src={product.img7}/></div> :null}
                            {product.img8 ? <div className="productscreen-image"><img src={product.img8}/></div> :null}
                            {product.img9 ? <div className="productscreen-image"><img src={product.img9}/></div> :null}
                            {product.img10 ? <div className="productscreen-image"><img src={product.img10}/></div> :null}
                        </div>
                        <div className="product-cover-image">
                            <img src={product.img}/>
                        </div>
                    </div>
                    <div className="product-col2">
                        <div className="product-culori">
                            <div className="product-culori-heading">Culoare</div>
                            <div className="product-culori-cont">

                                <a href={`/product/${rootID}&${product.color1.toLocaleLowerCase()}${memoryVariant1}`}> 
                                <div className="product-culoare">
                                {   colorID === product.color1 ?  ///////////////////////////////////////////////////////////////////////////////////////////
                                    <div className={`product-culoare-outline outline-color-${product.color1}`}>
                                        <div className={`product-culoare-dot color-${product.color1}`}>
                                        </div>
                                    </div>
                                    :
                                    <div className="product-culoare-outline">
                                        <div className={`product-culoare-dot color-${product.color1}`}>
                                        </div>
                                    </div>
                                }
                                </div>
                                </a>

                                {product.color2 ?
                                <a href={`/product/${rootID}&${product.color2.toLocaleLowerCase()}${memoryVariant1}`}>
                                <div className="product-culoare">
                                {   colorID === product.color2 ? 
                                    <div className={`product-culoare-outline outline-color-${product.color2}`}>
                                        <div className={`product-culoare-dot color-${product.color2}`}>
                                        </div>
                                    </div>
                                    :
                                    <div className="product-culoare-outline">
                                        <div className={`product-culoare-dot color-${product.color2}`}>
                                        </div>
                                    </div>
                                }
                                </div>
                                </a>
                                : null
                                }
                                {product.color3 ?
                                <a href={`/product/${rootID}&${product.color3.toLocaleLowerCase()}${memoryVariant1}`}>
                                <div className="product-culoare">
                                {   colorID === product.color3 ? 
                                    <div className={`product-culoare-outline outline-color-${product.color3}`}>
                                        <div className={`product-culoare-dot color-${product.color3}`}>
                                        </div>
                                    </div>
                                    :
                                    <div className="product-culoare-outline">
                                        <div className={`product-culoare-dot color-${product.color3}`}>
                                        </div>
                                    </div>
                                }
                                </div>
                                </a>
                                : null
                                }
                                {product.color4 ?
                                <a href={`/product/${rootID}&${product.color4.toLocaleLowerCase()}${memoryVariant1}`}>
                                <div className="product-culoare">
                                {   colorID === product.color4 ? 
                                    <div className={`product-culoare-outline outline-color-${product.color4}`}>
                                        <div className={`product-culoare-dot color-${product.color4}`}>
                                        </div>
                                    </div>
                                    :
                                    <div className="product-culoare-outline">
                                        <div className={`product-culoare-dot color-${product.color4}`}>
                                        </div>
                                    </div>
                                }
                                </div>
                                </a>
                                : null
                                }
                                {product.color5 ?
                                <a href={`/product/${rootID}&${product.color5.toLocaleLowerCase()}${memoryVariant1}`}>
                                <div className="product-culoare">
                                {   colorID === product.color5 ? 
                                    <div className={`product-culoare-outline outline-color-${product.color5}`}>
                                        <div className={`product-culoare-dot color-${product.color5}`}>
                                        </div>
                                    </div>
                                    :
                                    <div className="product-culoare-outline">
                                        <div className={`product-culoare-dot color-${product.color5}`}>
                                        </div>
                                    </div>
                                }
                                </div>
                                </a>
                                :null
                                }
                            </div>
                        </div>
                        <div className="product-memorie-optiuni">
                        {product.memory1 ?
                            <div className="product-memorie-optiuni-heading">Memorie</div>
                            :null}
                        
                        <div className="product-memorie-optiune-cont">
                        {product.memory1 ?
                            <a href={`/product/${rootID}&${colorID}&${product.memory1}`} className="no-decorations">
                                {memoryID === product.memory1 ?
                                <div className="product-memorie-optiune memory-active">{product.memory1} GB</div>
                                : <div className="product-memorie-optiune">{product.memory1} GB</div>
                                }
                            </a>
                        :null
                                }
                        {product.memory2 ?
                            <a href={`/product/${rootID}&${colorID}&${product.memory2}`} className="no-decorations">
                                {memoryID === product.memory2 ?
                                <div className="product-memorie-optiune memory-active">{product.memory2} GB</div>
                                : <div className="product-memorie-optiune">{product.memory2} GB</div>
                                }
                            </a>
                        :null
                        }
                        {product.memory3 ?
                            <a href={`/product/${rootID}&${colorID}&${product.memory3}`} className="no-decorations">
                                {memoryID === product.memory3 ?
                                <div className="product-memorie-optiune memory-active">{product.memory3} GB</div>
                                : <div className="product-memorie-optiune">{product.memory3} GB</div>
                                }
                            </a>
                        :null
                        }
                            </div>
                        </div>
                        <div className="product-short-specs">
                            {specs.Tip_memorie ? <div className="product-short-spec">Tip memorie : {specs.Tip_memorie}</div> : null}
                            {specs.Tehnologie ? <div className="product-short-spec">Tehnologie : {specs.Tehnologie}</div> : null}
                            {specs.Capacitate_stocare ? <div className="product-short-spec">Capacitate Stocare : {specs.Capacitate_stocare}</div> : null}
                            {specs.Tip_placa_video ? <div className="product-short-spec">Tip placă video : {specs.Tip_placa_video}</div> : null}
                            {specs.Tip_baterie ? <div className="product-short-spec">Tip baterie : {specs.Tip_baterie}</div> : null}
                            {specs.Nr_nuclee ? <div className="product-short-spec">Nr. nuclee : {specs.Nr_nuclee}</div> : null}
                            {specs.Difuzoare_integrate ? <div className="product-short-spec">Difuzoare integrate : {specs.Difuzoare_integrate}</div> : null}
                            {specs.Rezolutie_senzor ? <div className="product-short-spec">Rezolutie senzor : {specs.Rezolutie_senzor}</div> : null}
                            {specs.Camera_secundara ? <div className="product-short-spec">Camera secundara : {specs.Camera_secundara}</div> : null}
                            {specs.Chipset ? <div className="product-short-spec">Chipset : {specs.Chipset}</div> : null}
                            {specs.Tip_procesor ? <div className="product-short-spec">Tip procesor : {specs.Tip_procesor}</div> : null}
                            {specs.Rezolutie ? <div className="product-short-spec">Rezolutie : {specs.Rezolutie}</div> : null}
                            {specs.Memorie_interna ? <div className="product-short-spec">Memorie interna : {specs.Memorie_interna}</div> : null}
                            {specs.Memorie_RAM ? <div className="product-short-spec">Memorie RAM : {specs.Memorie_RAM}</div> : null}
                            {product.productType === "Gadget" ?
                            <>
                            {specs.Timpul_de_lucru ? <div className="product-short-spec">Timpul de lucru : {specs.Timpul_de_lucru}</div> : null}
                            {specs.Compatibilitate ? <div className="product-short-spec">Compatibilitate : {specs.Compatibilitate}</div> : null}
                            {specs.Touchscreen ? <div className="product-short-spec">Touchscreen : {specs.Touchscreen}</div> : null}
                            {specs.Tehnologia_ecranului ? <div className="product-short-spec">Tip Display : {specs.Tehnologia_ecranului}</div> : null}
                            {specs.Capacitate_baterie ? <div className="product-short-spec">Capacitate baterie : {specs.Capacitate_baterie}</div> : null}
                            {specs.Bluetooth ? <div className="product-short-spec">Bluetooth : {specs.Bluetooth}</div> : null}
                            {specs.Frecventa_procesor ? <div className="product-short-spec">Frecvența procesor : {specs.Frecventa_procesor}</div> : null}
                            {specs.Distanta_de_lucru ? <div className="product-short-spec">Distanța de lucru : {specs.Distanta_de_lucru}</div> : null}
                            {specs.Timp_de_incarcare ? <div className="product-short-spec">Timp de încărcare : {specs.Timp_de_incarcare}</div> : null}
                            {specs.Caracteristici_suplimentare ? <div className="product-short-spec">Caracteristici suplimentare : {specs.Caracteristici_suplimentare}</div> : null}
                            </>
                            :null}
                            <div><a href="#">Toate specificațiile</a></div>
                        </div>
                        <div className="product-recenzie-cont">
                            <div className="prd-btn-cont"><div className="product-recenzie-button">Lasa o recenzie</div></div>
                            <div className="product-recenzii">
                                <div className="stars"><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>
                                <a href="#">Toate recenziile</a>
                            </div>
                            <div className="product-options">
                                <div className="product-option"><CompareIcon /> <p>în comparație</p></div>
                                <div className="product-option"><FavoriteBorderIcon /> <p>în favorite</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="product-col3">
                        <div className="col3sec1">
                            <div className="col3-cont">
                                Vrei să afli <a href="#">mai multe detalii</a> despre produs?
                            </div>
                        </div>
                        <div className="col3sec2">
                            <div className="sec2pret">{product.pretTotal} lei</div>
                            <div className="sec2button-cont"><div className="sec2button-cumpara">cumpără</div></div>
                            <div className="sec2pret-luna">{product.pretLunar} lei/lună</div>
                            <div className="sec2button-cont"><div className="sec2button-credit">solicită credit</div></div>    
                            <div className="sec2sec3">ID:{product._id}</div>
                        </div>
                        <div className="col3sec3">
                            <div className="sec1sec1">
                                <div className="sec1sec2-text">Cashback <b>{product.cashback}</b> lei</div>
                                <div><ArrowForwardIcon /></div>
                            </div>
                            <div className="sec1sec2">
                                <div>Schimbă telefonul vechi pe unul nou, prin Trade-in</div>
                                <div className="arrow"><ArrowForwardIcon /></div>
                            </div>
                            <div className="sec1sec2">
                                <div>Arzi de nerăbdare? Ridică produsul prin Pick-up</div>
                                <div className="arrow"><ArrowForwardIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ProductScreen__section2">
                { !readMoreState ?
                <div className="spec-conteiners">
                    <div className="spec-conteiners-left">
                        <div className="spec-conteiner">
                            <div className="spec-list spec-list-header">Generale</div>
                            <div className="spec-list">
                    
                                <div className="spec-list-left">Producător</div>
                                {specs.Producator ? <div className="spec-list-right light_blue_color">{specs.Producator}</div> :null}

                            </div>
                            {specs.Dimensiuni ?
                            <div className="spec-list">
                                <div className="spec-list-left">Dimensiuni (L x L x G)</div>
                                 <div className="spec-list-right">{specs.Dimensiuni}</div> 
                            </div>
                            :null}
                        
                        <div className="spec-list">
                            <div className="spec-list-left">Greutate</div>
                            {specs.Greutate ? <div className="spec-list-right">{specs.Greutate}</div> :null}
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Model</div>
                            {specs.Model ? <div className="spec-list-right">{specs.Model}</div> :null}
                        </div>
                            {specs.Tip ? 
                            <div className="spec-list">
                            <div className="spec-list-left">Tip</div>
                             <div className="spec-list-right">{specs.Tip}</div> 
                             </div>
                             :null
                             }
                            {specs.Tehnologie ? 
                            <div className="spec-list">
                            <div className="spec-list-left">Tehnologie</div>
                             <div className="spec-list-right">{specs.Tehnologie}</div> 
                             </div>
                             :null
                             }
                            {specs.Seria ? 
                            <div className="spec-list">
                            <div className="spec-list-left">Seria</div>
                             <div className="spec-list-right">{specs.Seria}</div> 
                             </div>
                             :null
                             }
                            {specs.Compatibilitate ? 
                            <div className="spec-list">
                            <div className="spec-list-left">Compatibilitate</div>
                             <div className="spec-list-right">{specs.Compatibilitate}</div> 
                             </div>
                             :null
                             }
                        <div className="spec-list">
                            <div className="spec-list-left">Culoare</div>
                            {specs.Culoare ? <div className="spec-list-right">{specs.Culoare}</div> :null}
                        </div>
                        </div>

                    
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Caracteristici</div>
                        {specs.NrSIM ?
                        <div className="spec-list">
                            <div className="spec-list-left">Nr. SIM</div>
                            <div className="spec-list-right">{specs.NrSIM}</div>
                        </div>
                        :null
                        }
                        {specs.Retea2G ?
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 2G</div>
                            <div className="spec-list-right">{specs.Retea2G}</div>
                        </div>
                        : null
                        }
                        {specs.Retea3G ?
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 3G</div>
                            <div className="spec-list-right">{specs.Retea3G}</div>
                        </div>
                        :null
                        }
                        {specs.Retea4G ?
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 4G</div>
                            <div className="spec-list-right">{specs.Retea4G}</div>
                        </div>
                        :null
                        }
                        {specs.TipSIM ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip SIM</div>
                            <div className="spec-list-right">{specs.TipSIM}</div>
                        </div>
                        :null
                        }
                        {specs.Putere ?
                        <div className="spec-list">
                            <div className="spec-list-left">Putere</div>
                            <div className="spec-list-right">{specs.Putere}</div>
                        </div>
                        :null
                        }
                        {specs.Frecventa ?
                        <div className="spec-list">
                            <div className="spec-list-left">Frecventa</div>
                            <div className="spec-list-right">{specs.Frecventa}</div>
                        </div>
                        :null
                        }
                        {specs.Formate_de_redare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Formate de redare</div>
                            <div className="spec-list-right">{specs.Formate_de_redare}</div>
                        </div>
                        :null
                        }
                        {specs.Caracteristici_suplimentare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Caracteristici suplimentare</div>
                            <div className="spec-list-right">{specs.Caracteristici_suplimentare}</div>
                        </div>
                        :null
                        }
                        {specs.Distanta_de_lucru ?
                        <div className="spec-list">
                            <div className="spec-list-left">Distanta de lucru</div>
                            <div className="spec-list-right">{specs.Distanta_de_lucru}</div>
                        </div>
                        :null
                        }
                        {specs.Producator_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Producător procesor</div>
                            <div className="spec-list-right">{specs.Producator_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Tip_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip procesor</div>
                            <div className="spec-list-right">{specs.Tip_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Frecventa_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Frecvența procesor</div>
                            <div className="spec-list-right">{specs.Frecventa_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Model_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Model procesor</div>
                            <div className="spec-list-right">{specs.Model_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Nr_nuclee ?
                        <div className="spec-list">
                            <div className="spec-list-left">Nr. nuclee</div>
                            <div className="spec-list-right">{specs.Nr_nuclee}</div>
                        </div>
                        :null
                        }
                        {specs.Monitoring ?
                        <div className="spec-list">
                            <div className="spec-list-left">Monitoring</div>
                            <div className="spec-list-right">{specs.Monitoring}</div>
                        </div>
                        :null
                        }
                        {specs.Material ?
                        <div className="spec-list">
                            <div className="spec-list-left">Material</div>
                            <div className="spec-list-right">{specs.Material}</div>
                        </div>
                        :null
                        }                   
                    </div>
                    </div>
                    <div className="spec-conteiners-right">

                    <div className="spec-conteiner">
                    {specs.Chipset ? <>
                        <div className="spec-list spec-list-header">Procesor</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Chipset</div>
                            <div className="spec-list-right">{specs.Chipset}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Tip procesor</div>
                            <div className="spec-list-right">{specs.Tip_procesor}</div>
                        </div>
                    </>
                    :null}
                    </div>
                    
                    {specs.Rezolutie ?
                    <div className="spec-conteiner minusmargintop">
                        <div className="spec-list spec-list-header">Display</div>
                        {specs.Tehnologia_ecranului ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tehnologia ecranului</div>
                            <div className="spec-list-right">{specs.Tehnologia_ecranului}</div>
                        </div>
                        :null}
                        <div className="spec-list">
                            <div className="spec-list-left">Rezolutie</div>
                            <div className="spec-list-right">{specs.Rezolutie}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Diagonala display</div>
                            <div className="spec-list-right">{specs.Diagonala_display}</div>
                        </div>
                        {specs.Touchscreen ?
                        <div className="spec-list">
                            <div className="spec-list-left">Touchscreen</div>
                            <div className="spec-list-right">{specs.Touchscreen}</div>
                        </div>
                        :null
                        }
                    </div>
                    :null
                    }
                    {specs.Memorie_interna || specs.Capacitate_stocare || specs.Memorie_RAM ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Memorie</div>
                        {specs.Slot_memorie ?
                        <div className="spec-list">
                            <div className="spec-list-left">Slot memorie</div>
                            <div className="spec-list-right">{specs.Slot_memorie}</div>
                        </div>
                        :null
                        } 
                        <div className="spec-list">
                            <div className="spec-list-left">Memorie RAM</div>
                            <div className="spec-list-right">{specs.Memorie_RAM}</div>
                        </div>
                        {specs.Memorie_interna ?
                        <div className="spec-list">
                            <div className="spec-list-left">Memorie interna</div>
                            <div className="spec-list-right">{specs.Memorie_interna}</div>
                        </div>
                        :null
                        }
                        {specs.Capacitate_stocare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Capacitate stocare</div>
                            <div className="spec-list-right">{specs.Capacitate_stocare}</div>
                        </div>
                        :null
                        }
                        {specs.Tip_unitate_stocare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip unitate stocare</div>
                            <div className="spec-list-right">{specs.Tip_unitate_stocare}</div>
                        </div>
                        :null
                        }
                    </div>
                    :null}
                    {specs.Tip_placa_video ?
                    <div className="spec-conteiner">
                    <div className="spec-list spec-list-header">Placa video</div>
                    {specs.Tip_placa_video ?
                    <div className="spec-list">
                            <div className="spec-list-left">Tip placă video</div>
                            <div className="spec-list-right">{specs.Tip_placa_video}</div>
                        </div>
                    :null
                    }
                    {specs.Model_placa_video ?
                    <div className="spec-list">
                            <div className="spec-list-left">Model placă video</div>
                            <div className="spec-list-right">{specs.Model_placa_video}</div>
                    </div>
                    :null
                    }
                    </div>
                    :null
                    }
                    
                    <div onClick={readMoreClicked} className="sec2-button-cont">
                        <p>Mai multe specificații</p>
                        <ExpandMoreIcon />
                    </div>
                </div>
                </div>

                    :

                    <div className="spec-conteiners">
                        <div className="spec-conteiners-left">

                        <div className="spec-conteiner">
                            <div className="spec-list spec-list-header">Generale</div>
                            <div className="spec-list">
                                <div className="spec-list-left">Producător</div>
                                <div className="spec-list-right light_blue_color">{specs.Producator}</div>
                            </div>
                            {specs.Dimensiuni?
                            <div className="spec-list">
                                <div className="spec-list-left">Dimensiuni (L x L x G)</div>
                                <div className="spec-list-right">{specs.Dimensiuni}</div>
                            </div>
                            :null}
                        
                        <div className="spec-list">
                            <div className="spec-list-left">Greutate</div>
                            <div className="spec-list-right">{specs.Greutate}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Model</div>
                            <div className="spec-list-right">{specs.Model}</div>
                        </div>
                        {specs.Seria ?
                        <div className="spec-list">
                            <div className="spec-list-left">Culoare</div>
                            <div className="spec-list-right">{specs.Seria}</div>
                        </div>
                        :null
                        }
                        {specs.Compatibilitate ?
                        <div className="spec-list">
                            <div className="spec-list-left">Compatibilitate</div>
                            <div className="spec-list-right">{specs.Compatibilitate}</div>
                        </div>
                        :null
                        }
                        {specs.Tip ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip</div>
                            <div className="spec-list-right">{specs.Tip}</div>
                        </div>
                        :null
                        }
                        <div className="spec-list">
                            <div className="spec-list-left">Culoare</div>
                            <div className="spec-list-right">{specs.Culoare}</div>
                        </div>
                        </div>

                        {specs.Caracteristici_suplimentare ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Caracteristici</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Caracteristici suplimentare</div>
                            <div className="spec-list-right">{specs.Caracteristici_suplimentare}</div>
                        </div>
                    </div>
                    :null }
                        
                        {specs.Retea3G ? 
                        <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Caracteristici</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Nr. SIM</div>
                            <div className="spec-list-right">{specs.NrSIM}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 2G</div>
                            <div className="spec-list-right">{specs.Retea2G}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 3G</div>
                            <div className="spec-list-right">{specs.Retea3G}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Retea 4G</div>
                            <div className="spec-list-right">{specs.Retea4G}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Tip SIM</div>
                            <div className="spec-list-right">{specs.TipSIM}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Caracteristici suplimentare</div>
                            <div className="spec-list-right">{specs.Caracteristici_suplimentare}</div>
                        </div>
                    </div>
                    :null
                    }
                    {specs.Producator_procesor || specs.Nr_nuclee ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Procesor</div>
                        {specs.Chipset ?
                        <div className="spec-list">
                            <div className="spec-list-left">Chipset</div>
                            <div className="spec-list-right">{specs.Chipset}</div>
                        </div>
                        :null
                        }
                        {specs.Producator_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Producător procesor</div>
                            <div className="spec-list-right">{specs.Producator_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Tip_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip procesor</div>
                            <div className="spec-list-right">{specs.Tip_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Frecventa_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Frecvența procesor</div>
                            <div className="spec-list-right">{specs.Frecventa_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Model_procesor ?
                        <div className="spec-list">
                            <div className="spec-list-left">Model procesor</div>
                            <div className="spec-list-right">{specs.Model_procesor}</div>
                        </div>
                        :null
                        }
                        {specs.Nr_nuclee ?
                        <div className="spec-list">
                            <div className="spec-list-left">Nr. nuclee</div>
                            <div className="spec-list-right">{specs.Nr_nuclee}</div>
                        </div>
                        :null
                        }
                    </div>
                    :null}
                    {specs.Rezolutie ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Display</div>
                        {specs.Tehnologia_ecranului ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tehnologia ecranului</div>
                            <div className="spec-list-right">{specs.Tehnologia_ecranului}</div>
                        </div>
                        :null}

                        <div className="spec-list">
                            <div className="spec-list-left">Rezolutie</div>
                            <div className="spec-list-right">{specs.Rezolutie}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Diagonala display</div>
                            <div className="spec-list-right">{specs.Diagonala_display}</div>
                        </div>
                    </div>
                    :null
                    }
                    {specs.Memorie_interna || specs.Capacitate_stocare || specs.Memorie_RAM ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Memorie</div>
                        {specs.Slot_memorie ?
                        <div className="spec-list">
                            <div className="spec-list-left">Slot memorie</div>
                            <div className="spec-list-right">{specs.Slot_memorie}</div>
                        </div>
                        :null
                        } 
                        <div className="spec-list">
                            <div className="spec-list-left">Memorie RAM</div>
                            <div className="spec-list-right">{specs.Memorie_RAM}</div>
                        </div>
                        {specs.Memorie_interna ?
                        <div className="spec-list">
                            <div className="spec-list-left">Memorie interna</div>
                            <div className="spec-list-right">{specs.Memorie_interna}</div>
                        </div>
                        :null
                        }
                        {specs.Capacitate_stocare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Capacitate stocare</div>
                            <div className="spec-list-right">{specs.Capacitate_stocare}</div>
                        </div>
                        :null
                        }
                        {specs.Tip_memorie ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip memorie</div>
                            <div className="spec-list-right">{specs.Tip_memorie}</div>
                        </div>
                        :null
                        }
                        {specs.Tip_unitate_stocare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip unitate stocare</div>
                            <div className="spec-list-right">{specs.Tip_unitate_stocare}</div>
                        </div>
                        :null
                        } 
                    </div>
                    :null
                    }
                    {specs.Tip_placa_video || specs.Model_placa_video?
                    <div className="spec-conteiner">
                    <div className="spec-list spec-list-header">Placa video</div>
                    {specs.Tip_placa_video ?
                    <div className="spec-list">
                            <div className="spec-list-left">Tip placă video</div>
                            <div className="spec-list-right">{specs.Tip_placa_video}</div>
                        </div>
                    :null
                    }
                    {specs.Model_placa_video ?
                    <div className="spec-list">
                            <div className="spec-list-left">Model placă video</div>
                            <div className="spec-list-right">{specs.Model_placa_video}</div>
                    </div>
                    :null
                    }
                    </div>
                    :null
                    }
                        </div>
                        <div className="spec-conteiners-right">

                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Conectivitate</div>
                        {specs.GPS ?
                        <div className="spec-list">
                            <div className="spec-list-left">GPS</div>
                            <div className="spec-list-right">{specs.GPS}</div>
                        </div>
                        :null}
                        <div className="spec-list">
                            <div className="spec-list-left">Bluetooth</div>
                            <div className="spec-list-right">{specs.Bluetooth}</div>
                        </div>
                        {specs.WiFi ?
                        <div className="spec-list">
                            <div className="spec-list-left">Wi-Fi</div>
                            <div className="spec-list-right">{specs.WiFi}</div>
                        </div>
                        :null}
                        {specs.NFC ?
                        <div className="spec-list">
                            <div className="spec-list-left">NFC</div>
                            <div className="spec-list-right">{specs.NFC}</div>
                        </div>
                        :null }
                        {specs.USB_port ?
                        <div className="spec-list">
                            <div className="spec-list-left">USB port</div>
                            <div className="spec-list-right">{specs.USB_port}</div>
                        </div>
                        :null }
                        {specs.HDMI ?
                        <div className="spec-list">
                            <div className="spec-list-left">HDMI</div>
                            <div className="spec-list-right">{specs.HDMI}</div>
                        </div>
                        :null }
                        {specs.RJ45_LAN ?
                        <div className="spec-list">
                            <div className="spec-list-left">RJ-45 LAN</div>
                            <div className="spec-list-right">{specs.RJ45_LAN}</div>
                        </div>
                        :null }
                        {specs.USB_3_1_Gen1 ?
                        <div className="spec-list">
                            <div className="spec-list-left">USB 3.1 (Gen. 1)</div>
                            <div className="spec-list-right">{specs.USB_3_1_Gen1}</div>
                        </div>
                        :null }
                        {specs.USB_3_1_Gen1_Type_C ?
                        <div className="spec-list">
                            <div className="spec-list-left">USB 3.1 (Gen. 1) Type C</div>
                            <div className="spec-list-right">{specs.USB_3_1_Gen1_Type_C}</div>
                        </div>
                        :null }
                    </div>
                        {specs.Camera ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Foto video</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Camera</div>
                            <div className="spec-list-right">{specs.Camera}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Rezolutie senzor</div>
                            <div className="spec-list-right">{specs.Rezolutie_senzor}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Blitz</div>
                            <div className="spec-list-right">{specs.Blitz}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Camera secundara</div>
                            <div className="spec-list-right">{specs.Camera_secundara}</div>
                        </div>
                        <div className="spec-list">
                            <div className="spec-list-left">Rezolutie video</div>
                            <div className="spec-list-right">{specs.Rezolutie_video}</div>
                        </div>
                    </div>
                    :null    
                    }
                    
                    { specs.Capacitate_baterie || specs.Tip_baterie ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Alimentare</div>
                        {specs.Capacitate_baterie ?
                        <div className="spec-list">
                            <div className="spec-list-left">Capacitate baterie</div>
                            <div className="spec-list-right">{specs.Capacitate_baterie}</div>
                        </div>
                        :null}
                        {specs.Celule ?
                        <div className="spec-list">
                            <div className="spec-list-left">Celule</div>
                            <div className="spec-list-right">{specs.Celule}</div>
                        </div>
                        :null}
                        {specs.Tip_baterie ?
                        <div className="spec-list">
                            <div className="spec-list-left">Tip baterie</div>
                            <div className="spec-list-right">{specs.Tip_baterie}</div>
                        </div>
                        :null}
                           {specs.Timpul_de_lucru ?
                        <div className="spec-list">
                            <div className="spec-list-left">Timpul de lucru</div>
                            <div className="spec-list-right">{specs.Timpul_de_lucru}</div>
                        </div>
                        :null}
                         {specs.Timp_de_incarcare ?
                        <div className="spec-list">
                            <div className="spec-list-left">Timp de incarcare</div>
                            <div className="spec-list-right">{specs.Timp_de_incarcare}</div>
                        </div>
                        :null}
                    </div>
                    :null
                    }
                    {specs.Camera_WEB || specs.Difuzoare_integrate || specs.Microfon ?
                     <div className="spec-conteiner">
                     <div className="spec-list spec-list-header">Multimedia</div>
                     {specs.Unitati_citire_scriere ?
                     <div className="spec-list">
                         <div className="spec-list-left">Unitati citire/scriere</div>
                         <div className="spec-list-right">{specs.Unitati_citire_scriere}</div>
                     </div>
                     :null}
                     {specs.Camera_WEB ?
                     <div className="spec-list">
                         <div className="spec-list-left">Camera WEB</div>
                         <div className="spec-list-right">{specs.Camera_WEB}</div>
                     </div>
                     :null}
                    {specs.Mesagerie ?
                     <div className="spec-list">
                         <div className="spec-list-left">Mesagerie</div>
                         <div className="spec-list-right">{specs.Mesagerie}</div>
                     </div>
                     :null}
                    {specs.Microfon ?
                     <div className="spec-list">
                         <div className="spec-list-left">Microfon</div>
                         <div className="spec-list-right">{specs.Microfon}</div>
                     </div>
                     :null}
                    {specs.Cititor_de_carduri ?
                     <div className="spec-list">
                         <div className="spec-list-left">Cititor de carduri</div>
                         <div className="spec-list-right">{specs.Cititor_de_carduri}</div>
                     </div>
                     :null}
                    {specs.Difuzoare_integrate ?
                     <div className="spec-list">
                         <div className="spec-list-left">Difuzoare integrate</div>
                         <div className="spec-list-right">{specs.Difuzoare_integrate}</div>
                     </div>
                     :null}
                 </div>
                 :null}

                    {specs.Tastatura_numerica ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Altele</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Tastatura numerica</div>
                            <div className="spec-list-right">{specs.Tastatura_numerica}</div>
                        </div>
                    </div>
                    :null }
                    {specs.Sistem_de_operare ?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Software</div>
                        <div className="spec-list">
                            <div className="spec-list-left">Sistem de operare</div>
                            <div className="spec-list-right">{specs.Sistem_de_operare}</div>
                        </div>
                    </div>
                    :null}
                    {specs.Sensori || specs.Altele?
                    <div className="spec-conteiner">
                        <div className="spec-list spec-list-header">Funcționalitate</div>
                        {specs.Sensori ?
                        <div className="spec-list">
                            <div className="spec-list-left">Sensori</div>
                            <div className="spec-list-right">{specs.Sensori}</div>
                        </div>
                        :null}
                        {specs.Altele ?
                        <div className="spec-list">
                            <div className="spec-list-left">Altele</div>
                            <div className="spec-list-right">{specs.Altele}</div>
                        </div>
                        :null}
                    </div>
                    :null}
                    <div onClick={readMoreClicked} className="sec2-button-cont">
                            <p>Mai puține specificații</p>
                            <ExpandMoreIcon />
                        </div>
                        </div>
                    </div>
                }
            </div>
            { product.videosrc ?
            <div className="ProductScreen__section3">
                <iframe className="video"
                    width="100%" 
                    height="100%" 
                    src={product.videosrc}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            :null
            }
            <div className="ProductScreen__section4">
                <div className="sec4col1">
                    <div className="sec4heading">Oferte de credit</div>
                    <div className="sec4credit light_grey_background">
                        <div className="sec4credit-section"><div className="credit-procent">2%</div></div>
                        <div className="sec4credit-section credit-section-activ"><div className="credit-timp credit-timp-activ">36 <p>luni</p></div><div className="credit-pret credit-pret-activ">358 <p>lei</p></div></div>
                        <div className="sec4credit-section"><div className="credit-timp">24 <p>luni</p></div><div className="credit-pret">386 <p>lei</p></div></div>
                        <div className="sec4credit-section"><div className="credit-timp">12 <p>luni</p></div><div className="credit-pret">694 <p>lei</p></div></div>
                        <div className="sec4credit-section"><div className="credit-timp">18 <p>luni</p></div><div className="credit-pret">490 <p>lei</p></div></div>
                        <div className="sec4credit-section"><div className="credit-timp">10 <p>luni</p></div><div className="credit-pret">818 <p>lei</p></div></div>
                        <div className="sec4credit-section"><div className="credit-timp">6 <p>luni</p></div><div className="credit-pret">1 240 <p>lei</p></div></div>
                    </div>
                    <div className="sec4-options">
                        <div className="sec4-option" onClick={radioAsigurareClicked}>
                            <div className="sec4-radio-outline light_grey_background">
                            {radioAsigurareState ?
                                <div className="sec4-radio-dot light_green_background"></div>
                                :null
                            }
                            </div>
                            <p>Asigurare în caz de furt</p>
                        </div>
                        <div className="sec4-option" onClick={radioProtectieClicked}>
                            <div className="sec4-radio-outline light_grey_background">
                            {radioProtectieState ?
                                <div className="sec4-radio-dot light_green_background"></div>
                                :null
                            }
                            </div>
                            <p>Protecție în caz de accident</p>
                        </div>
                        <div className="sec4-option" onClick={radioGarantieClicked}>
                            <div className="sec4-radio-outline light_grey_background">
                            {radioGarantieState ?
                                <div className="sec4-radio-dot light_green_background"></div>
                                :null
                            }
                            </div>
                            <p>Extinderea garanției cu 3 ani</p>
                        </div>
                    </div>
                </div>
                <div className="sec4-sidebar light_grey_background"></div>
                <div className="sec4col2">
                    <div className="sec4input light_grey_background"><input placeholder="Nume Prenume"/></div>
                    <div className="sec4input light_grey_background"><input placeholder="Număr de telefon"/></div>
                    <div className="sec4-info">
                        <div className="sec4-info__left">
                            <div className="sec4-info__left1">
                                <div>Credit</div>
                                <div>Servicii</div>
                                <div className="light_green">Reducere</div>
                            </div>
                            <div className="sec4-info__left2">
                                <div className="sec4-info-text">453<p>lei/lună</p></div>
                                <div className="sec4-info-text">96<p>lei/lună</p></div>
                                <div className="sec4-info-text light_green">60<p>lei/lună</p></div>
                            </div>
                        </div>
                        <div className="sec4-sidebar2 light_grey_background"></div>
                        <div className="sec4-info__right">
                            <div className="info-right-heading">Total</div>
                            <div className="info-right-price">306<p>lei/lună</p></div>
                        </div>
                    </div>
                    <div className="sec4-radiocont">
                        <div className="sec4-option sec4radio">
                            <div className="sec4-radio-outline light_grey_background" onClick={radioFinalizeazaClicked}>
                                { radioFinalizeazaState ?
                                <div className="sec4-radio-dot light_green_background"></div>
                                :null
                                }
                            </div>
                            <a className="sec4a">Sunt de acord cu politica de confidențialitate</a>
                        </div>
                    </div>
                    <div className="finzalizeaza">
                        <div className="finalizeaza__left">
                            <div className="finalizeaza-text">Cantitatea</div>
                            <div className="finalizeaza-counter-cont light_grey_background">
                                <div className="counter-decrement" onClick={decrement}>-</div>
                                <div className="counter-display">{Counter}</div>
                                <div className="counter-increment" onClick={increment}>+</div>
                            </div>
                        </div>
                        <div className="finalizeaza__right">
                            { radioFinalizeazaState ?
                            <a href="#" className="no-decorations"><div className="finalizeaza-button light_grey_background finalizeaza-button-activ">Finalizează comanda</div></a>
                            :<div className="finalizeaza-button light_grey_background">Finalizează comanda</div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="ProductScreen__section5">
                <div className="section5__left">
                    <div className="section5-heading">Calculator Trade-in</div>
                    <div className="section5-subheading">Alege dispozitiv-ul tău completând cele 3 casete obligatorii și află prețul estimativ</div>
                    <div className="section5__left12">
                    <div className="section5__left1">
                        <div className="section5-inputs">
                            <div className="section5-inputs-heading">Dispozitiv actual</div>
                            <div className="section5-input">
                                <select id="user_device" name="user_device" className="select-css">
                                    <option value="tipul_dispozitivului">Tipul dispozitivului</option>
                                    <option value="smartphone">Smartphone</option>
                                    <option value="notebook">Notebook</option>
                                    <option value="tablet">Tablet</option>
                                </select>
                            </div>
                            <div className="section5-input">
                                <select id="user_device_brand" name="user_device_brand" className="select-css">
                                    <option value="device_brand">Selecteaza brandul</option>
                                </select>
                            </div>
                            <div className="section5-input">
                                <select id="user_device_model" name="user_device_model" className="select-css">
                                    <option value="device_model">Selecteaza modelul</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="section5__left2">
                        <div className="section5-inputs">
                            <div className="section5-inputs-heading">Dispozitiv nou</div>
                            <div className="section5-input">
                                <select id="shop_device" name="shop_device" className="select-css">
                                    <option value="tipul_dispozitivului">Tipul dispozitivului</option>
                                    <option value="smartphone">Smartphone</option>
                                    <option value="notebook">Notebook</option>
                                    <option value="tablet">Tablet</option>
                                </select>
                            </div>
                            <div className="section5-input">
                                <select id="shop_device_brand" name="shop_device_brand" className="select-css">
                                    <option value="device_brand">Selecteaza brandul</option>
                                    <option value="device_brand">Xiaomi</option>
                                    <option value="device_brand">Samsung</option>
                                </select>
                            </div>
                            <div className="section5-input">
                                <select id="shop_device_model" name="shop_device_model" className="select-css">
                                    <option value="device_model">Selecteaza modelul</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="section5-devices-cont">
                        <div className="section5-device-cont">
                            <div className="section5-device-photo">
                                <img src="https://i.ibb.co/HDkKLbF/apple-iphone-11-pro-max-green1d-201207112626-darwin.png" className="section5-pic"/>
                            </div>
                            <div className="section5-device-info">
                                <div className="section5-pret-text add2rempad">Prețul estimat</div>
                                <div className="section5-pret add2rempad">4499 lei</div>
                            </div>
                        </div>
                        <div className="section5-device-cont">
                            <div className="section5-device-photo">
                                <img src={product.img} className="section5-pic"/>
                            </div>
                            <div className="section5-device-info">
                                <div className="section5-pret-text rem2rempad">Diferența de achitat</div>
                                <div className="section5-pret rem1rempad">1500 lei</div>
                            </div>
                        </div>
                    </div>
                    <div className="section5-footer">
                        <p>* Prețul dispozitivului este prezentat orientativ. Valoarea exactă a produsului o puteți afla la consultanții Darwin. 
                            Dacă dispuneți de încărcătorul, cablul USB și cutia originală, iar dispozitivul nu prezintă zgîrîieturi semnificative, 
                            deformări, ecran spart sau lipsa pieselor interioare, prețul acestuia poate atinge valoarea cea mai apropiată celei prezentate mai sus!</p>
                    </div>
                </div>

                <div className="sec5-sidebar light_grey_background"></div>

                <div className="section5__right">
                    <div className="section5__right-heading">Ia cu tine gadget-ul de care ești gata să te desparți, 
                    buletinul de identitate + fișa de însoțire și vino pentru o evaluare detaliată.
                    </div>
                    <div className="section5-location-hashtags">
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
                    </div>
                    <div className="section5-map">
                        <Map />
                    </div>
                </div>
            </div>

            <div className="ProductScreen__section6">
            </div>
            <div className="ProductScreen__section7">
                <NewsLetter />
            </div>
            <div className="ProductScreen__section8">
                <div className="pick-up-section">
                    <div className="pick-up-header">Pick-up</div>
                    <div className="pick-up-subheader">Comandă online, ridică offline. Alegeți cel mai apropiat 
                        magazin Darwin sau locația unde doriți să ridicați <b className="subheader_bold">{product.titlu}.</b></div>
                    <div className="pick-up-inputs">
                        <div className="sec4input light_grey_background sec8inputdiv"><input placeholder="Nume Prenume"/></div>
                        <div className="sec4input light_grey_background sec8inputdiv"><input placeholder="Număr de telefon"/></div>
                    </div>
                    <div className="sec8-devider">
                        <p>Alege magazinul</p>
                        <div className="devider-button">Magazin în apropiere</div>
                    </div>
                    <div className="section5-location-hashtags sec8-location">
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
                    </div>
                    <div className="sec8-finalizeaza">
                        <div className="sec8-radio-cont">
                            <div className="sec4-option">

                                <div className="sec4-radio-outline light_grey_background" onClick={radioSec8Clicked}>
                                    { radioSec8State ?
                                    <div className="sec4-radio-dot light_green_background"></div>
                                    :null
                                    }
                                </div>

                                <a className="sec4a">Sunt de acord cu politica de confidențialitate</a>
                            </div>
                        </div>

                        { !radioSec8State ?
                            <div className="sec8-finalizeaza-button">Rezervă produsul</div>
                            : <a href="#" className="no-decorations"><div className="sec8-finalizeaza-button sec8-button-active">Rezervă produsul</div></a>
                        }
                        

                    </div>
                </div>
                <div className="productpage_map"><Map />
                </div>
            </div>
        </div>
    )
};

export default ProductScreen;
