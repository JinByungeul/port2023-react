import React from "react";
import { portText } from "../constants";


const Port = () => {
    return (
        <section id="port">
            <div className="port_inner">
                <h2 className="port_title">portfolio <em>포폴 작업물</em></h2>
                <div className="port_wrap">
                    {portText.map((port, key) => (
                        <article class={`port_item p${key + 1}`}>
                            <span class="num">{port.num}.</span>
                            <a href={port.code} target="_blank" class="img">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 class="title">{port.title}</h3>
                            <p class="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" class="site">사이트보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;