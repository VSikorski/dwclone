import React from 'react';
import Categories from '../components/Categories';
import HomeHashtags from '../components/HomeHashtags';
import MainContent from '../components/MainContent';

function HomeScreen() {
    return (
        <div>
            <HomeHashtags />
            <Categories />
            <MainContent />
        </div>
    )
};

export default HomeScreen;
