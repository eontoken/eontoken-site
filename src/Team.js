import React, { Component } from 'react';
import './team.css';
import { Link, withRouter } from 'react-router-dom';
import postars from './star'
import { getWhitePaperLink } from './util'

class Team extends Component {
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

    }

    render() {
        return (
            <div ref="bodyBox" style={{ height: 'overflow-y: scroll' }}>
                <nav ref={(o) => {this.mainNav = o}} className="navbar navbar-expand-lg navbar-light fixed-top"
                     id="mainNav" >
                    <div className="container" >
                        <a className="navbar-brand js-scroll-trigger" href="/" >
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
                                    {/*<Link to="/airdrop" className="nav-link js-scroll-trigger">AirDrop</Link>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" href="/#about">About</a>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item" >*/}
                                    {/*<a className="nav-link js-scroll-trigger" href="/#foundation">Foundation</a>*/}
                                {/*</li>*/}
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" target="_blank"
                                       href="/bounty" onClick={() => {
                                    }} >Bounty</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" onClick={() => {
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
                                    {/*<a className="nav-link js-scroll-trigger" href="/#foundation">Foundation</a>*/}
                                {/*</li>*/}
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" href="/#signup">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="root d-flex w-100" >
                    <div style={{ position: 'absolute' }} >
                        <canvas className="d-block" ref={(o) => {this.canvas = o;}} />
                    </div>
                    <div className="container" id="teamInfo">
                        <h1>Core Team Members</h1>
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Aron.png"/>
                                <h2>Aron Lyu</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/aron-lyu-b929308a/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Early Bitcoin adopter since 2012<br/>
                                    Product Lead, Bytedance USA<br/>
                                    Entrepreneur in Residence,Morningside Ventures<br/>
                                    Stanford University,Ignite<br/>
                                    YC Alumni
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Tao.png"/>
                                <h2>Tao Hu</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/taohu1989/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Successful Serial Entrepreneur<br/>
                                    Early Employees Of Oculus(Facebook)<br/>
                                    Computer Science, University of Southern California<br/>
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Mike.png"/>
                                <h2>Mark Nedzelskii</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/mark-nedzelskii-380752161/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Early Ethereum Investor<br/>
                                    ICO Proficient <br/>
                                    Blockchain Association Board,Tsinghua University<br/>
                                    University of International Business and Economics
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Sunny.png"/>
                                <h2>Sunny Sun</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/usunyu/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Former Senior Engineer, Facebook<br/>
                                    Blockchain Experts<br/>
                                    Computer Science, University of Southern California
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Hao.png"/>
                                <h2>Hao Dong</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/%E6%98%8A-%E8%91%A3-ba0616166/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    ACM Finalist<br/>
                                    Bitcoin Early Miner<br/>
                                    Computer Science, Beijing Jiaotong University
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Lee.png"/>
                                <h2>Will Lee</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/will-lee-698766ba/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Former First Operation Manager of DouYin and Tik Tok(NO.1 iOS app globally）<br/>
                                    Single promotional video reach 100M views<br/>
                                    Ex-Branding Manager at Bytedance<br/>
                                    Founder of Wechat/Weibo KOL agency, 10M fans
                                </p>
                            </div>
                        </div>
                        {/*<div className="row mt-4">*/}
                            {/*<div className="col-12 col-lg-4 col-md-12 col-sm-12">*/}
                                {/*<img src="/image/team/Tong.png"/>*/}
                                {/*<h2>XiaoTong</h2>*/}
                                {/*<p>*/}
                                    {/*Early Bitcoin Community Evangelist<br/>*/}
                                    {/*Ex-4A Advertising Agency Recruits<br/>*/}
                                    {/*Nanyang Academy of Fine Arts,Singapore*/}
                                {/*</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <h1>Advisors</h1>
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Zyda.png"/>
                                <h2>Dr.Michael Zyda</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/mikezyda/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Founding Director, USC GamePipe Laboratory<br/>
                                    (#1 Gaming Program in the world).<br/>
                                    His alums have shipped games played by over 2.5 billion players, about $100B in revenue.<br/>
                                    Consultants of White House Office<br/>
                                    Director of America's Army PC Game
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Dhawan.png"/>
                                <h2>Anshul Dhawan</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/anshuldhawan/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Co-founder at Equally<br/>
                                    8 years veteran, Former Product Lead at Zynga.<br/>
                                    Early employees at Zynga, built several Top10 Grossing games, including the famous Zynga Poker.
                                </p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/image/team/Feng.png"/>
                                <h2>Feng Li</h2>
                                <h6>
                                    <a href="https://www.linkedin.com/in/feng-li-5136a147/" target="_blank">
                                        <img src="/image/linkedin.png"/>
                                        <img src="/image/linkedin_h.png"/>
                                    </a>
                                </h6>
                                <p>
                                    Early Investor of Coinbase& Ripple<br/>
                                    Founding Partner of FreeS Fund<br/>
                                    Ex-IDG Partner<br/>
                                    Successful Seria Entrepreneur,multiple exits
                                </p>
                            </div>
                        </div>
                        {/*<div className="row">*/}
                            {/*<div className="col-12 col-lg-4 col-md-12 col-sm-12">*/}
                                {/*<img src="/image/team/Junfei.png"/>*/}
                                {/*<h2>Junfei Ren</h2>*/}
                                {/*<p>*/}
                                    {/*Ex ZhenFund<br/>*/}
                                    {/*Early adopters of Bitcoin<br/>*/}
                                    {/*Former partners at huobi labs <br/>*/}
                                    {/*Former president of plusyoou*/}
                                {/*</p>*/}
                            {/*</div>*/}
                            {/*<div className="col-12 col-lg-4 col-md-12 col-sm-12">*/}
                                {/*<img src="/image/team/Dong.png"/>*/}
                                {/*<h2>Bo Dong</h2>*/}
                                {/*<p>*/}
                                    {/*Former Partner @FBG Capital<br/>*/}
                                    {/*M.S Massachusetts Institute of Technology<br/>*/}
                                    {/*B.S  Nanyang Technological University.*/}
                                {/*</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Team);
