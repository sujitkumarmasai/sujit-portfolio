import { useState, useRef } from 'react';
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg',
            linkSite: 'https://www.myglamm.com/',
            linkGithub: 'https://github.com/sujitkumarmasai/MyGlamm-Projects',
            // linkBlog:
            //     'https://medium.com/p/6d1c596086ea/edit',
                linkBlog: 'https://myglammm.netlify.app/',
            title: 'MyGlamm',
            desc: 'A web application to buy international beauty products & cosmetic makeup items..',
            img: 'https://user-images.githubusercontent.com/72076630/141668396-44a19b12-0a97-4859-bf97-1610b705de94.png',
        },
        {
            id: '2',
            icon: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEgorFtqFeSDw/company-logo_200_200/0/1596048507780?e=1649289600&v=beta&t=uPrhS3i8JFipEsl3KzGeXeyDCy5stlKWHIOu2vJA8V0',
            linkSite: 'https://www.bestbuy.com/',
            linkGithub: 'https://github.com/sujitkumarmasai/Bestbuyapp-Projects',
            // linkBlog:
            //     'https://medium.com/p/6d1c596086ea/edit',
            linkBlog:'https://aakash-naykude.github.io/BestBuyclonebyAakashNaykude.github.io/',
            title: 'Best Buy',
            desc: 'A web application to buy electronics, computers appliances, cell phones & more new tech..',
            
            img: 'https://camo.githubusercontent.com/e925b67fdd26298a45d2248c3e1e08f3f7afc6da1b45bda805237583ffac90db/68747470733a2f2f6d617361692d636f757273652e73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f75736572732f323033322f7375626d697373696f6e732f3232313439352f3339363330312f33393238653933643031396131313631346663656463333838353034656562302f53637265656e73686f74253230323032312d31302d32352532303230353635342e706e67',
        },
        {
            id: '3',
            icon: 'https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg',
            linkSite: 'https://www.myglamm.com/',
            linkGithub: 'https://github.com/sujitkumarmasai/MyGlamm-Projects',
            // linkBlog:
            //     'https://medium.com/p/6d1c596086ea/edit',
            linkBlog: 'https://myglammm.netlify.app/',
            title: 'MyGlamm',
            desc: 'A web application to buy international beauty products & cosmetic makeup items..',
            img: 'https://user-images.githubusercontent.com/72076630/141668396-44a19b12-0a97-4859-bf97-1610b705de94.png',
        },
        {
            id: '4',
            icon: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEgorFtqFeSDw/company-logo_200_200/0/1596048507780?e=1649289600&v=beta&t=uPrhS3i8JFipEsl3KzGeXeyDCy5stlKWHIOu2vJA8V0',
            linkSite: 'https://www.bestbuy.com/',
            linkGithub: 'https://github.com/sujitkumarmasai/Bestbuyapp-Projects',
            // linkBlog:'https://medium.com/p/6d1c596086ea/edit',
            linkBlog:'https://aakash-naykude.github.io/BestBuyclonebyAakashNaykude.github.io/',
            title: 'Best Buy',
            desc: 'A web application to buy electronics, computers appliances, cell phones & more new tech..',
           img: 'https://camo.githubusercontent.com/e925b67fdd26298a45d2248c3e1e08f3f7afc6da1b45bda805237583ffac90db/68747470733a2f2f6d617361692d636f757273652e73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f75736572732f323033322f7375626d697373696f6e732f3232313439352f3339363330312f33393238653933643031396131313631346663656463333838353034656562302f53637265656e73686f74253230323032312d31302d32352532303230353635342e706e67',
        }
    ];
    
    return (
        <div className="Project" id="Project">
            <br />
            <h1>My Projects</h1>
            <hr
                style={{
                    width: 220,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-100}
                // centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Demo</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
