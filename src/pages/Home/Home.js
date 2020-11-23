import React from 'react';
import Layout from '../../components/Layout/Layout';
import CoolEngine from './cool-engine.jpg';
import './Home.css'

const Home = () => {
    return (
        <Layout>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                        <section className="landing">
                            <div className="container-fluid caption-div"><h2 className="caption">LOREM IPSUM TEST TEXT HERE<span className="span-caption">MORE LOREM IPSUM TEXT</span></h2></div>
                        </section>
                        <section className="help-business">
                            <div className="container-fluid help-div"><h2 className="help-caption">LOREM IPSUM TEST TEXT HERE<span className="span-help-caption">MORE LOREM IPSUM TEXT</span></h2></div>
                        </section>
                        <div className="boxcontainer">
                            <section className="card-row-1">
                                <div className="container-fluid card-div">
                                    <div className="card"><span>Suspension</span></div>
                                    <div className="card"><span>Suspension</span></div>
                                    <div className="card"><span>Suspension</span></div>
                                </div>
                            </section>
                            <section className="card-row-2">
                                <div className="container-fluid card-div">
                                    <div className="card"><span>Suspension</span></div>
                                    <div className="card"><span>Suspension</span></div>
                                    <div className="card"><span>Suspension</span></div>
                                </div>
                            </section>
                        </div>
                        <section className="stats">
                            <div className="container">
                                <div className="row">
                                    <div className="col item">Item 1</div>
                                    <div className="col item">Item 2</div>
                                    <div className="col item">Item 3</div>
                                    <div className="col item">Item 4</div>
                                </div>
                            </div>
                        </section>
                        <div className="container item-list-container">
                            <div className="row">
                                <div className="col">
                                    <p className="h2">The primary goals of blah blah blady blah</p>
                                    <ul className="item-list">
                                        <li>Blah blah blah one</li>
                                        <li>Blah blah blah two</li>
                                        <li>Blah blah blah three</li>
                                        <li>Blah blah blah four</li>
                                        <li>Blah blah blah five</li>
                                    </ul>
                                    <button className="btn btn-primary">Learn more</button>
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={CoolEngine} alt="automobile combustion engine" />
                                </div>
                            </div>
                        </div>
                        <div className="secondary-image">
                                <div className="container-fluid">
                                    <div className="row h-100">
                                        <div className="col main-text">
                                            <div className="h2">ARCHM Industries is fully sick brah, come check it out.</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

export default Home;