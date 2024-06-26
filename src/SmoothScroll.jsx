import React from "react";
import { TweenLite, Power4 } from "gsap";

export default class SmoothScroll extends React.Component {
    state = {
        height: window.innerHeight
    };
    ro = new ResizeObserver(elements => {
        for (let elem of elements) {
            const crx = elem.contentRect;
            console.log(crx);
            this.setState({
                height: crx.height
            });
        }
    });
    componentxDidMount() {
        window.addEventListener("scroll", this.onScroll);
        this.ro.observe(this.viewport);
    }
    onScroll = () => {
        TweenLite.to(this.viewport, 1, {
            y: -window.pageYOffset,
            ease: Power4.easeOut
        });
    };
    render() {
        return (
            <div  ref={ref => (this.viewport = ref)}>
                {this.props.children}
            </div>
        );
    }
}
