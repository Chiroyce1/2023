export const options = {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: "round",
    sound: {
        enabled: true,
        files: [
            "./sounds/explosion0.mp3",
            "./sounds/explosion1.mp3",
            "./sounds/explosion2.mp3",
        ],
        volume: {
            min: 6,
            max: 25,
        },
    },
    hue: {
        min: 0,
        max: 360,
    },
    delay: {
        min: 10,
        max: 90,
    },
    rocketsPoint: {
        min: 50,
        max: 50,
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 3,
        },
        trace: {
            min: 1,
            max: 2,
        },
    },
    brightness: {
        min: 1,
        max: 100,
    },
    decay: {
        min: 0.01,
        max: 0.03,
    },
    mouse: {
        click: false,
        move: false,
        max: 1,
    },
};
