import {Container, Grid} from '@mui/material';
import './index.scss';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className="footer">
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <p>{t('footer')}</p>
                    </Grid>
                    <Grid xs={3}>
                        <h3 className="footer-title">
                            Important Links
                        </h3>
                        <div className="footer-link">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About us</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="contact.html">Contacts</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <h3 className="footer-title">
                            Community
                        </h3>
                        <div className="footer-link">
                            <ul>
                                <li><a href="newsfeed.html">NewsFeed</a></li>
                                <li><a href="user-timeline.html">Profile</a></li>
                                <li><a href="user-friends.html">Friends</a></li>
                                <li><a href="user-groups.html">Groups</a></li>
                                <li><a href="forums.html">Forums</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <h3 className="footer-title">
                            Followers
                        </h3>
                        <div className="footer-link">
                            <ul>
                                <li><a href="https://www.facebook.com/">facebook</a></li>
                                <li><a href="https://twitter.com/">twitter</a></li>
                                <li><a href="https://www.instagram.com/">instagram</a></li>
                                <li><a href="https://www.youtube.com/">Youtube</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={12} className="footer-bottom">
                        <div className="footer-copyright">
                            Copy© SpringSun 2021. All Rights By <a href="http://www.bootstrapmb.com/">LZ</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </div>
    );
};

export default Footer;
