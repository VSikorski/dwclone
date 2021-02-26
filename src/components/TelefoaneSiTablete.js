import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/CatStyle.css';
import CompareIcon from '@material-ui/icons/Compare';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { listProducts } from '../actions/productActions';
import axios from 'axios';


function TelefoaneSiTablete() {

const[products, setProducts] = useState([]);
const[loading, setLoading] = useState(false);
const[error, setError] = useState(false);
const dispatch = useDispatch();

useEffect( () => {
    const fetchData = async () => {
        try{
            setLoading(true);
            const { data } = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
    };
    fetchData();
    }, []); 

const TelefoaneSiTableteData = products.map((item) => {
    if (item.productType === "Telefoane și Tablete" & item.showProduct === "Y") 
    return item
    else return null;
});

    return (
        <div className="cat-cont">
        {loading ? <LoadingBox />
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
        :
        <div className="card-list">
        <div className="cover"><img src="https://i.ibb.co/0ZkqXhK/qwe12.png" alt="cover"/></div>
        <div className="allimg">
        {TelefoaneSiTableteData.map((product) =>(
            <div>
            {product ?
            <a href={`/product/${product._id}`} className="product-href">
            <div className="product-card">
                <div className="product-image">
                    <img src={product.img} className="prd-img" alt="productimage"/>
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
        )
        )}
        </div>
        </div>
        }

        </div>
    )
};

export default TelefoaneSiTablete;
