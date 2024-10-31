import React from "react";
import { siteText } from "../constants";

const Site = () => {
    return (
        <section id="site">
            <div className="site_inner">
                <h2 className="site_title">Site coding <em>나의 작업물</em></h2>
                <div className="site_wrap">
                    {siteText.map((site, key) => (
                        <article className={`site_item s${key + 1}`} key={key}>
                            <span className="num">{key + 1}.</span>
                            <div className="text">
                                {site.text.map((text, key) => (
                                    <div key={key}>{text}</div>
                                ))}
                            </div>
                            <h3 className="title">{site.title}</h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                {site.info.map((inf, key) => (
                                    <span key={key}>{inf}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;