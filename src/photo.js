import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
class viewer {
    constructor(container, event, bkPicture) {
        this.container = document.querySelector(container);//容器
        this.containerWidth = this.container.offsetWidth;
        this.containerHeight = this.container.offsetHeight;
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.event = event;
        this.bkPicture = bkPicture;
        this.init();
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            if (this.dir && this.speed) {
                const angle = clock.getDelta() * this.dir * this.speed;
                this.model.angle += angle;
                // this.model.rotateY(angle);
                // this.model.position.y += THREE.Math.radToDeg(angle) * 0.7 /10;
                // console.log(this.model.angle);

                if (this.model.angle >= THREE.Math.degToRad(this.totalAngle)) {
                    this.model.angle = THREE.Math.degToRad(this.totalAngle);
                } else if (this.model.angle <= 0) {
                    this.model.angle = 0;
                } else {
                    this.model.rotateY(angle);
                    this.model.position.y += THREE.Math.radToDeg(angle) * 0.7 / 13;
                }
            }
        }
        animate();
    }

    init() {
        this.scene = new THREE.Scene();

        this.scene.background = new THREE.TextureLoader().load(this.bkPicture);
        this.scene.add(new THREE.AmbientLight(0xFFFFFF, 1));//添加环境光
        const light = new THREE.PointLight(0xFFD700, 1.3, 20);
        light.position.set(-8, 0, 0);
        this.scene.add(light);

        this.camera = new THREE.PerspectiveCamera(75, this.containerWidth / this.containerHeight, 0.1, 1000.00);//相机
        // this.camera = new THREE.OrthographicCamera( -7.5, 0, 10, -10, 0.1, 100 );
        this.camera.position.set(-8, 0, 13);
        // this.camera.position.set(-7.5, 0, 40);
        // this.camera.position.set(0, 0, 30);
        const rendererPar = {//渲染器参数设置
            // precision: "",
            antialias: !0,
            logarithmicDepthBuffer: !!0,
            depth: !0,
            preserveDrawingBuffer: !0
        };

        this.renderer = new THREE.WebGLRenderer(rendererPar);
        this.renderer.setSize(this.containerWidth, this.containerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.container.appendChild(this.renderer.domElement);

        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);//控制器引入
        this.model = new THREE.Group();
        this.model.name = 'model';
        this.model.angle = 0;
        this.model.rotation.y = -Math.PI / 2;
        this.scene.add(this.model);

        this.textureLoader = new THREE.TextureLoader();
        var startX, moveEndX, X;

        this.container.addEventListener('touchstart', (e) => {

            e.preventDefault();

            startX = e.touches[0].pageX;

        });

        this.container.addEventListener('touchmove', (e) => {

            e.preventDefault();

            moveEndX = e.changedTouches[0].pageX;


            X = moveEndX - startX;


            const absX = Math.abs(X);
            if (X > 0) {
                this.dir = 1;
                this.speed = absX >= 50 ? 0.6 : 0.6 * (absX / 50);

            } else if (X < 0) {
                this.dir = -1;
                this.speed = absX >= 50 ? 0.6 : 0.6 * (absX / 50);
            }

        });


    }

    onWindowResize() {
        this.containerWidth = this.container.offsetWidth;
        this.containerHeight = this.container.offsetHeight;
        // 重新设置相机宽高比例
        this.camera.aspect = this.containerWidth / this.containerHeight;
        // 更新相机投影矩阵
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.containerWidth, this.containerHeight);
    }

    createPlane(img, theta, index) {
        const geometry = new THREE.PlaneBufferGeometry(16, 20, 32);
        this.textureLoader.load(img, texture => {
            // texture.anisotropy = 16;
            // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, map: texture, transparent: !0 });
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.FrontSide, map: texture, transparent: !0 });

            const plane = new THREE.Mesh(geometry, material);

            // plane.position.setFromCylindricalCoords(7.5, -theta, 0);
            plane.position.setFromCylindricalCoords(7.5, -theta, -index * .7);
            const vector = new THREE.Vector3();
            vector.x = plane.position.x * 2;
            vector.y = plane.position.y;
            vector.z = plane.position.z * 2;

            plane.lookAt(vector);
            // plane.lookAt(new THREE.Vector3());
            plane.rotateY(Math.PI / 2);
            this.model.add(plane);
            this.progress++;
            this.event.emit("progress", this.progress / this.tTotal);
        })

    }

    createPhotos(pictures) {
        this.tTotal = pictures.length;
        this.totalAngle = 13 * this.tTotal;
        this.progress = 0;
        pictures.forEach((p, index) => {
            const angle = this.totalAngle * (index / this.tTotal)
            let theta = THREE.Math.degToRad(angle);
            this.createPlane(p, theta, index);
        })

    }


}

export default viewer;