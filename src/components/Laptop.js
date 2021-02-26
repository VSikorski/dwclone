import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompareIcon from '@material-ui/icons/Compare';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



function Laptop() {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();
    },[]);

    const LaptopData = products.map((item) => {
        if (item.productType === "Laptopuri și PC" & item.showProduct === "Y") return item
    });

    return (
        <div className="TelefoaneSiTablete">
            
            <div className="card-list">
            <div className="cover"><img src="https://i.ibb.co/jwk4SbV/lap2.jpg"/></div>
            <div className="allimg">
            {LaptopData.map((product) =>(

                <div>

                {product ?
                <a href={`/product/${product._id}`} className="product-href">
                <div className="product-card">
                    <div className="product-image">
                        <img src={product.img} className="prd-img"/>

                        {product.specialHashtag1 ? 
                        <div className="special-hashtags">
                            <div className="special-hashtag credit0">{product.specialHashtag1}</div>
                        </div>
                        :null
                        }

                        {
                        product.specialHashtag2 ? 
                        <div className="special-hashtags">
                            <div className="special-hashtag produsPopular">{product.specialHashtag2}</div>
                        </div>
                        :null
                        }

                        {
                        product.specialHashtag3 ? 
                        <div className="special-hashtags">
                            <div className="special-hashtag stocLimitat">{product.specialHashtag3}</div>
                        </div>
                        :null
                        }

                    </div>

                    <div className="short-description">
                        {product.shortDescription}
                    </div>

                    <div className="hashtags-p">
                        <div className="hashtag-p">{product.hashtag1}</div>
                        <div className="hashtag-p">{product.hashtag2}</div>
                        <div className="hashtag-p">{product.hashtag3}</div>
                        <div className="hashtag-p">{product.hashtag4}</div>
                    </div>
                    <div className="product-title"><div className="product-titlep">{product.titlu}</div></div>
                    <div className="bottom">
                        <div className="bottom__left">

                            {
                            product.pretLunar ?
                             <div className="pret-addon"><p className="pret-addonp">{product.pretLunar} lei lunar</p></div>
                            :null
                            }

                            {
                            product.precomanda ?
                             <div className="pret-addon precomanda"><p className="pret-addonp">Precomandă</p></div>
                            :null
                            }

                            {
                            product.pretVechi ?
                             <div className="pret-addon pretVechi"><div className="pret-vechi">{product.pretVechi} lei</div><p className="pret-addonp">-{product.diferenta} lei</p></div>
                            :null
                            }

                            <div className="pret-total"><p className="pret-totalp">{product.pretTotal}</p><p className="lei">lei</p></div>
                            <div className="cashback"><p>Cashback {product.cashback} lei</p></div>
                        </div>
                        <div className="bottom__right">
                            <div className="icons-p">
                                <div className="compare-icon"><CompareIcon /></div>
                                <div className="addtocart-icon"><ShoppingCartIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
                :null
                }

                </div>

            ))}
            </div>
            </div>
  
        </div>
        
    
    )
};

export default Laptop;