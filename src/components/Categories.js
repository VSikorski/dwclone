import React from 'react';
import './style/Categories.css';

function Categories() {
    return (
        <div>
            <div className="categories">
                <div className="card"><div className="category cat1logo"></div></div>
                <div className="card"><div className="category cat2logo"></div></div>
                <div className="card"><div className="category cat3logo"></div></div>
                <div className="card"><div className="category cat4logo"></div></div>
                <div className="card"><div className="category cat5logo"></div></div>
                <div className="card"><div className="category cat6logo"></div></div>
                <div className="card"><div className="category cat7logo"></div></div>
                <div className="card"><div className="category cat8logo"></div></div>
                <div className="card"><div className="category cat9logo"></div></div>
                <div className="card"><div className="category cat10logo"></div></div>
           </div>
           <div className="text-container">
           <div className="text">Telefoane și Tablete</div>
           <div className="text">Laptopuri și PC</div>
           <div className="text">Gadget</div>
           <div className="text">Apple</div>
           <div className="text">Audio</div>
           <div className="text">Sport și sănătate</div>
           <div className="text">Transport electric</div>
           <div className="text">TV, Foto și Optică</div>
           <div className="text">Accesorii</div>
           <div className="text">Electrocasnice</div>
           </div>
        </div>
    )
};

export default Categories;
