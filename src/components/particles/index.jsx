import zIndex from "@mui/material/styles/zIndex";
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const CustomParticles = () => {
  
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 40,
              fullScreen: { 
                enable: true,
                zIndex: -1 
              },
              particles: {
                number: {
                  value: 50
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 0.25
                },
                size: {
                  value: 400,
                  random: {
                    enable: true,
                    minimumValue: 200
                  }
                },
                move: {
                  enable: true,
                  speed: 10,
                  direction: "top",
                  outModes: {
                    default: "out",
                    top: "destroy",
                    bottom: "none"
                  }
                }
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true
                }
              },
              style: {
                filter: "blur(50px)"
              },
              detectRetina: true,
              themes: [
                {
                  name: "light",
                  default: {
                    value: true,
                    mode: "light"
                  },
                  options: {
                    // background: {
                    //   color: "#f7f8ef"
                    // },
                    particles: {
                      color: {
                        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                      }
                    }
                  }
                },
                {
                  name: "dark",
                  default: {
                    value: true,
                    mode: "dark"
                  },
                  options: {
                    // background: {
                    //   color: "#080710"
                    // },
                    particles: {
                      color: {
                        value: ["#004f74", "#245100",'#607d8b','#043e94','#0d1337']
                      }
                    }
                  }
                }
              ],
              emitters: {
                direction: "top",
                position: {
                  x: 50,
                  y: 150
                },
                rate: {
                  delay: 0.12,
                  quantity: 2
                },
                size: {
                  width: 100,
                  height: 0
                }
              }
}}
        />
    );
};
        
export default CustomParticles;