import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Background() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            className="particle-bg"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#121212",
                    },
                },
                fpsLimit: 120,
                
                particles: {
                    "number": {
                        "value": 75,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": ["#EAECEC", "#FFDD43", "#28175a"]
                    },
                    "shape": {
                        "type":  "star",
                        "image": {
                            "src": "./assets/img/star.png",
                            "height": 100,
                            "width": 9
                        },
                        "stroke": {
                            "width": 0,
                            "color": "#ceb728"
                        },
                    },
                    "opacity": {
                        "value": .9,
                        "anim": {
                            "enable": true,
                            "speed": .8,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 10,
                            "size_min": .3,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": .5,
                        "direction": "bottom",
                        "random": true,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 600
                        }
                    }
                },
                "retina_detect": true
            }}
        />
    );
}

export default Background