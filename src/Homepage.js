import React, { Component } from 'react';
import './homepage.css'
import jump from 'jump.js'
import $ from 'jquery';
import postars from './star'
import { TELEGRAM_LINK, TWITTER_LINK, MEDIUM_LINK, REDDIT_LINK } from './consts';
import { getWhitePaperLink, getDiffTime } from './util'

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if ($(this.mainNav).offset().top > 100) {
                $(this.mainNav).addClass('navbar-shrink');
            } else {
                $(this.mainNav).removeClass('navbar-shrink');
            }
        });

        $(document).ready(() => {
            let myPoststar = new postars($(this.canvas)[0]);
            myPoststar.init();
        });

        let intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
        this.timer();
    }

    componentWillUnmount() {
        if(this.state.intervalId){
            clearInterval(this.state.intervalId);
        }
    }

    timer = () => {
        let diffTime = getDiffTime();
        this.setState({
            days: diffTime.days,
            hours: diffTime.hours,
            minutes: diffTime.minutes,
            seconds: diffTime.seconds
        });
    };

    render() {
        return (
            <div ref="bodyBox" style={{ height: 'overflow-y: scroll' }}>
                <nav ref={(o) => {this.mainNav = o}} className="navbar navbar-expand-lg navbar-light fixed-top"
                     id="mainNav" >
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" onClick={() => {
                            jump(this.headerSection);
                        }}>
                            <img className="logo-icon" src="/image/logo_icon.png" />EON
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive" >
                            <ul className="navbar-nav ml-auto" >
                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" href="/airdrop" onClick={() => {*/}
                                    {/*}} >AirDrop</a>*/}
                                {/*</li>*/}

                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" onClick={() => {*/}
                                        {/*jump(this.aboutSection);*/}
                                    {/*}} >About</a>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" onClick={() => {*/}
                                        {/*jump(this.foundationSection);*/}
                                    {/*}} >Foundation</a>*/}
                                {/*</li>*/}
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" target="_blank"
                                       href="/bounty" onClick={() => {
                                    }} >Bounty</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" href="/team" onClick={() => {
                                    }} >Team</a>
                                </li>
                                <li className="nav-item nav-item-ico" >
                                    <a className="nav-link js-scroll-trigger" target="_blank"
                                       href="https://icoholder.com/en/eon-22280" onClick={() => {
                                    }} >ICO</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" target="_blank"
                                       href={getWhitePaperLink()} onClick={() => {
                                    }} >White Paper</a>
                                </li>
                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" onClick={() => {*/}
                                        {/*jump(this.foundationSection);*/}
                                    {/*}} >Foundation</a>*/}
                                {/*</li>*/}
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" onClick={() => {
                                        jump(this.signupSection);
                                    }} >Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header ref={(o) => {this.headerSection = o}} className="masthead text-center text-white d-flex" id="header">
                    <div className="container my-auto">
                        {/*<div className="row" >*/}
                            {/*<div className="col-lg-7 mx-auto" >*/}
                                {/*<img className='img-fluid' src="/image/logo_bg.gif?v=201804172007" alt="" />*/}
                                {/*<div className="logo-container" >*/}
                                    {/*<img className='img-logo' src="/image/logo.png" alt="" />*/}
                                    {/*<p>Blockchain Game Platform</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="row" >
                            <div className="col-lg-7 mx-auto" >
                                <img className='img-fluid' src="/image/logo_bg.gif?v=201804172007" alt="" />
                                <div className="logo-container" >
                                    <div className="whitelist-countdown sszhjt-font">
                                        <h3 className="text-uppercase grad-title">Whitelist countdown</h3>
                                        <div className="countdown">
                                            <div className="time">
                                                <p className="top">{this.state.days}</p>
                                                <p className="bottom">days</p>
                                            </div>
                                            <span className="delimiter">:</span>
                                            <div className="time">
                                                <p className="top">{this.state.hours}</p>
                                                <p className="bottom">hours</p>
                                            </div>
                                            <span className="delimiter">:</span>
                                            <div className="time">
                                                <p className="top">{this.state.minutes}</p>
                                                <p className="bottom">minutes</p>
                                            </div>
                                            <span className="delimiter">:</span>
                                            <div className="time">
                                                <p className="top">{this.state.seconds}</p>
                                                <p className="bottom">seconds</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="apply-link"
                                       href="https://docs.google.com/forms/d/1LArlDPiufwcQVJCioWIAWUsIYWfUjZOzmESG3TBkCZQ/edit" target="_blank">
                                        APPLY NOW
                                    </a>
                                </div>
                                <p className="slogan-content">Blockchain Game Platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block" style={{ position: 'absolute' }} >
                        <div>
                            <canvas ref={(o) => {this.canvas = o;}} />
                        </div>
                    </div>
                    <a className="slide-guide js-scroll-trigger" onClick={() => {
                        jump(this.foundationSection);
                    }}>
                        <img src="/image/down_arrow.png" />
                    </a>
                </header>
                <div>
                    <section ref={(o) => {this.foundationSection = o}} id="foundation" >
                        <div className="container" >
                            <div className="row" >
                                <div className="col-lg-12 mx-auto text-left" >
                                    <h2 className="mt-0 text-white" >EON Foundation</h2>
                                    <p className="text-white mt-5" >Founded in Palo Alto, EON foundation is
                                        dedicated
                                        to
                                        empower developers to create more games to our users. Our vision is to let
                                        players
                                        find great games easier and developers distribute their creation easier through
                                        EON
                                        platform with the help of EON tokens.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section ref={(o) => {this.usageSection = o}} className="bg-dark text-white" id="member" >
                        <div className="container text-center">
                            <h1 className="mb-5 text-uppercase grad-title">OUR TEAM MEMBERS ARE AWESOME!</h1>
                            <div className="row">
                                <div className="col-6 col-lg-4 col-md-4 col-sm-6 row-head" >
                                    <img src="/image/member/fb.png" />
                                </div>

                                <div className="col-6 col-lg-4 col-md-4 col-sm-6" >
                                    <img src="/image/member/oculus.png" />
                                </div>

                                <div className="col-6 col-lg-4 col-md-4 col-sm-6 row-end" >
                                    <img src="/image/member/stanford.png" />
                                </div>

                                <div className="col-6 col-lg-4 col-md-4 col-sm-6 row-head" >
                                    <img src="/image/member/bytedance.png" />
                                </div>

                                <div className="col-6 col-lg-4 col-md-4 col-sm-6" >
                                    <img src="/image/member/douyin.png" />
                                </div>

                                <div className="col-6 col-lg-4 col-md-4 col-sm-6 row-end" >
                                    <img src="/image/member/tsinghua.png" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section ref={(o) => {this.gamesSection = o}} className="bg-dark text-white" id="games" >
                        <div className="container text-center">
                            <p>
                                From the team who built the CryptoAlpaca game, now we bring you<br/>
                                EON &ndash;&ndash;&ndash; Decentralized Game Platform.
                            </p>
                            <h1 className="mb-5 text-uppercase grad-title">OUR GAMES ARE AMAZING!</h1>
                            <div className="row game-alpaca">
                                <div className="col-12">
                                    <a href="http://cryptoalpaca.pet/" target="_blank">
                                        <img src="/image/games/alpaca.png" /> <span>CryptoAlpaca</span>
                                    </a>
                                </div>
                            </div>
                            <div className="row show-case">
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12" >
                                    <img src="/image/user.png" />
                                    <h2>Active User</h2>
                                    <p>1000+ (Top2 among all<br/> Decentralized games)</p>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12" >
                                    <img src="/image/community.png" />
                                    <h2>Large Community</h2>
                                    <p>200K+ register users</p>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12" >
                                    <img src="/image/global.png" />
                                    <h2>Global Reach</h2>
                                    <p>Our players are from 100+ countries</p>
                                </div>
                            </div>
                            <div className="row game-demos">
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12 game-right-border">
                                    <a href="http://innovis.io/arcat/" target="_blank">
                                        <img src="/image/games/armeow.png" /> <span>Meow-AR Cat</span>
                                    </a>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12 game-right-border">
                                    <a href="http://etherfifa.com/" target="_blank">
                                        <img src="/image/games/worldcup.png" /> <span>Etherfifa</span>
                                    </a>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                    <p>More Games <br/> Coming Soon...</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section ref={(o) => {this.partnersSection = o}} className="bg-dark text-white" id="partners" >
                        <div className="container text-center">
                            <h1 className="text-uppercase grad-title mb-5">OUR BACKERS ARE EXPERIENCED!</h1>
                            {/*<p>They used to/currently work for: </p>*/}
                            <div className="row backers">
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <img src="/image/backers/usc.png" />
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <img src="/image/backers/imo.png" />
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <img src="/image/backers/zynga.png" />
                                </div>
                                {/*<div className="col-lg col-md col-sm-4 col-6">*/}
                                    {/*<img src="/image/backers/huobi.png" />*/}
                                {/*</div>*/}
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <img src="/image/backers/uhc.png" />
                                </div>
                            </div>
                            <h1 className="mt-6 mb-5 text-uppercase grad-title">WE HAVE BEEN FEATURED ON </h1>
                            <div className="row medias">
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <a href="http://markets.businessinsider.com/news/stocks/crypto-collectible-cryptoalpaca-partners-with-wax-and-opskins-marketplace-1021605802" target="_blank">
                                        <img src="/image/media/bi.png" />
                                    </a>
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <a href="http://fortune.com/2018/06/08/term-sheet-friday-june-8/" target="_blank">
                                        <img src="/image/media/fortune.png" />
                                    </a>
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <a href="https://finance.yahoo.com/news/crypto-collectible-cryptoalpaca-partners-wax-190300154.html" target="_blank">
                                        <img src="/image/media/yahoo.png" />
                                    </a>
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <a href="https://www.forbes.com/sites/astanley/2018/06/07/blockchain-game-momentum-builds-with-eon-foundation-5m-seed-round/#91f6afe34b0b" target="_blank">
                                        <img src="/image/media/forbes.png" />
                                    </a>
                                </div>
                                <div className="col-lg col-md col-sm-4 col-6">
                                    <a href="https://venturebeat.com/2018/06/07/eon-foundation-raises-5-million-for-blockchain-game-publishing/" target="_blank">
                                    <img src="/image/media/venturebeat.png" />
                                    </a>
                                </div>
                            </div>
                            <h1 className="mt-5 mb-5 text-uppercase grad-title">AND 300+ INTERNATIONAL PRESS</h1>
                        </div>
                    </section>

                    <section ref={(o) => {this.signupSection = o}} className="bg-dark text-white pt-1" id="signup" >
                        <div className="container text-center" >
                            <h3 className="mb-5 text-uppercase" >GET MORE UPDATES!</h3>
                            <div className="row signup-info" >
                                <div className="col-lg-9 col-md-8 col-sm-12 no-gutters" >
                                    <input type="email" id="emailInput" placeholder="Enter your email address" />
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 no-gutters" >
                                    <img className="img-fluid" src="/image/signup.png" />
                                    <button type="button" id="signupBtn" >SIGN UP</button>
                                </div>
                            </div>
                            <p className="pt-4" >We won't share your email with any third parties.</p>
                        </div>
                        <div className="container text-center social mt-4" >
                            <div className="row" >
                                <div className="col-1 col-lg-4 col-md-3 col-sm-2" >
                                </div>
                                <div className="col-10 col-lg-4 col-md-6 col-sm-8" >
                                    <a href={TWITTER_LINK} >
                                        <img src="/image/twitter.png" />
                                    </a>
                                    <a href={REDDIT_LINK} >
                                        <img src="/image/reddit.png" />
                                    </a>
                                    <a href={TELEGRAM_LINK} >
                                        <img src="/image/telegram.png" />
                                    </a>
                                    <a href={MEDIUM_LINK} >
                                        <img src="/image/medium.png" />
                                    </a>
                                </div>
                                <div className="col-1 col-lg-4 col-md-3 col-sm-2" >
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="modal fade" id="tipInfoModal" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog modal-dialog-centered" role="document" >
                        <div className="modal-content" >
                            <div className="modal-header" >
                                <h5 className="modal-title" id="tipInfoModalTitle" >Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                    <span aria-hidden="true" >&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" id="tipInfoModalContent" >
                            </div>
                            <div className="modal-footer" style={{ justifyContent: 'center' }} >
                                <button type="button" className="btn btn-info" data-dismiss="modal"
                                        style={{ width: '100px', borderRadius: '5px' }} >OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
