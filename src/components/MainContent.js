import React from 'react';
import AddonInfo from './AddonInfo';
import BlogsPreview from './BlogsPreview';
import Gadget from './Gadget';
import Laptop from './Laptop';
import LargeCategories from './LargeCategories';
import NewsLetter from './NewsLetter';
import ShopsInfo from './ShopsInfo';
import SmartTrade from './SmartTrade';
import TCButton from './TCButton';
import TelefoaneSiTablete from './TelefoaneSiTablete';
import VBButton from './VBButton';

function MainContent() {
    return (
        <div>
            <TelefoaneSiTablete />
            <SmartTrade />
            <Laptop />
            <LargeCategories />
            <TCButton />
            <Gadget />
            <ShopsInfo />
            <AddonInfo />
            <BlogsPreview />
            <VBButton />
            <NewsLetter />
        </div>
    )
};

export default MainContent;
