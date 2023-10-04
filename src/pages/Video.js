let cap; // Declarar a variável cap no escopo mais amplo

export function initVideo() {
    function onOpenCvReady() {
        if (typeof cv === 'undefined') {
            setTimeout(onOpenCvReady, 50);
            return;
        }
        console.log('OpenCV Ready');

        navigator.mediaDevices.getUserMedia({ video: {
            width: { ideal: 1280, max: 1280 },
            height: { ideal: 720, max: 720 },
        }, audio: false })
            .then(function (stream) {
                const video = document.getElementById('videoElement');
                video.srcObject = stream;
                cap = new cv.VideoCapture(video); // Inicialize aqui

                video.addEventListener('loadedmetadata', function () {
                    cap = new cv.VideoCapture(video);
                    console.log(`Video dimensions: ${video.videoWidth} x ${video.videoHeight}`);
                    const canvas = document.getElementById('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
            
                    // Configurar o contexto WebGL
                    const gl = canvas.getContext('webgl');
                    if (!gl) {
                        console.error('WebGL not supported');
                        return;
                    }

                    // Definir os vértices de um retângulo para cobrir toda a tela
                    const vertices = new Float32Array([
                        -1, -1,
                         1, -1,
                        -1,  1,
                         1,  1,
                    ]);
                    
                    // Criar um buffer de vértices
                    const vertexBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
                    
                    // Criar os shaders
                    const vertexShaderSource = `
                        attribute vec2 a_position;
                        varying vec2 v_texCoord;
                        void main() {
                            gl_Position = vec4(a_position, 0, 1);
                            v_texCoord = (a_position + 1.0) / 2.0;
                        }
                    `;
                    
                    const fragmentShaderSource = `
                        precision mediump float;
                        uniform sampler2D u_texture;
                        varying vec2 v_texCoord;
                        void main() {
                            gl_FragColor = texture2D(u_texture, v_texCoord);
                        }
                    `;
                    
                    const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
                    const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
                    
                    // Criar o programa de shader
                    const shaderProgram = gl.createProgram();
                    gl.attachShader(shaderProgram, vertexShader);
                    gl.attachShader(shaderProgram, fragmentShader);
                    gl.linkProgram(shaderProgram);
                    gl.useProgram(shaderProgram);
                    
                    // Atribuir os atributos de vértice
                    const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
                    gl.enableVertexAttribArray(positionLocation);
                    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
                    
                    // Configurar a textura
                    const texture = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
                    
                    // Configurar os parâmetros da textura
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    
                    // Vincular a textura à unidade de textura 0
                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    const textureLocation = gl.getUniformLocation(shaderProgram, 'u_texture');
                    gl.uniform1i(textureLocation, 0);
                    
                    // Função para renderizar
                    const render = () => {
                        gl.clear(gl.COLOR_BUFFER_BIT);
                        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                        requestAnimationFrame(render);
                    };
                    
                    // Iniciar o loop de renderização
                    render();
                });
            })
            .catch(function (error) {
                console.error('Error accessing the camera:', error);
            });
    }

    // Adicione o script do OpenCV ao seu documento HTML
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://docs.opencv.org/master/opencv.js';
    script.onload = onOpenCvReady;
    script.type = 'text/javascript';

    document.head.appendChild(script);
}

// Função auxiliar para criar um shader
function createShader(gl, source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}
export const renderVideo = () => {
    return `
        <video id="videoElement"  width="100%" height="auto" autoplay></video>
        <canvas id="canvas" width="100%" height="auto"></canvas>
    `;
};
