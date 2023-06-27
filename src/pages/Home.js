import React from 'react';
import HeroHeader from '../components/layout/HeroHeader';
import classNames from 'classnames';
import ImageGallery from '../components/layout/ImageGallery';

const Main = () => {
    return (
        <>
            <HeroHeader />
            <main className={classNames("wrapper_maxWidth", "wrapper_horizontalPadding", "spacing_noMargin", "spacing_mobile-margin-top-20", "spacing_tablet-margin-top-30", "spacing_desktop-margin-top-30", "spacing_oversized-margin-top-30", "spacing_margin-bottom-30")}>
                <div className="spacing_margin-bottom-30">
                    <h4 className={classNames("text", "text_size-h23", "text_color-midnight2C343E", "spacing_noMargin", "spacing_margin-top-15", "text_noLineHeight")}>Бесплатные стоковые фото</h4>
                    <ImageGallery />
                </div>
            </main>
        </>
    );
};

export default Main;
