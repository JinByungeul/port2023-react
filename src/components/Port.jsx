import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { portText } from "../constants";

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(_ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port_inner">
                <h2 className="port_title">portfolio <em>포폴 작업물</em></h2>
                <div className="port_wrap">
                    {portText.map((port, key) => (
                        <article class={`port_item p${key + 1}`} key={key} ref={(el) => (sectionsRef.current[key] = el)}>
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