import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Laptop, Sparkles } from 'lucide-react';

interface Interactive3DCanvasProps {
  className?: string;
}

export const Interactive3DCanvas: React.FC<Interactive3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!webglSupported) return;

    const container = mountRef.current;
    if (!container) return;

    // Viewport & Capability Detection
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileDevice = mobileQuery.matches || touchQuery.matches;
    setIsMobile(isMobileDevice);

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, isMobileDevice ? 15.5 : 14);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobileDevice, // Antialias only on desktop to save mobile GPU
        alpha: true,
        powerPreference: isMobileDevice ? 'low-power' : 'high-performance',
      });
      renderer.setPixelRatio(isMobileDevice ? Math.min(window.devicePixelRatio, 1.25) : Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Lighting (Optimized for mobile: fewer lights)
    const ambientLight = new THREE.AmbientLight(0xFFFBF5, isMobileDevice ? 1.5 : 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xF6E05E, 1.3);
    dirLight.position.set(10, 15, 10);
    scene.add(dirLight);

    let blueLight: THREE.PointLight | null = null;
    if (!isMobileDevice) {
      blueLight = new THREE.PointLight(0x3B82F6, 1.5, 30);
      blueLight.position.set(-8, 5, 4);
      scene.add(blueLight);
    }

    // Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xFDF8F3,
      roughness: 0.6,
      metalness: 0.05,
    });

    const inkEdgeMat = new THREE.LineBasicMaterial({
      color: 0x191817,
      linewidth: 1.5,
    });

    const kraftMat = new THREE.MeshStandardMaterial({
      color: 0xD97706,
      roughness: 0.5,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x1E293B,
      roughness: 0.2,
      metalness: 0.8,
    });

    // --- 1. Stylized 3D Laptop ---
    const laptopGroup = new THREE.Group();

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(4.2, 0.22, 2.8);
    const baseEdgesGeo = new THREE.EdgesGeometry(baseGeo);
    const baseMesh = new THREE.Mesh(baseGeo, paperMat);
    const baseEdges = new THREE.LineSegments(baseEdgesGeo, inkEdgeMat);
    laptopGroup.add(baseMesh);
    laptopGroup.add(baseEdges);

    // Screen Lid
    const screenLidGroup = new THREE.Group();
    screenLidGroup.position.set(0, 0.11, -1.4);

    const lidGeo = new THREE.BoxGeometry(4.2, 2.7, 0.18);
    lidGeo.translate(0, 1.35, 0);
    const lidEdgesGeo = new THREE.EdgesGeometry(lidGeo);
    const lidMesh = new THREE.Mesh(lidGeo, paperMat);
    const lidEdges = new THREE.LineSegments(lidEdgesGeo, inkEdgeMat);
    screenLidGroup.add(lidMesh);
    screenLidGroup.add(lidEdges);

    // Screen Display
    const displayGeo = new THREE.PlaneGeometry(3.8, 2.3);
    displayGeo.translate(0, 1.35, 0.1);
    const displayMesh = new THREE.Mesh(displayGeo, screenMat);
    screenLidGroup.add(displayMesh);

    screenLidGroup.rotation.x = -Math.PI * 0.18;
    laptopGroup.add(screenLidGroup);

    laptopGroup.position.set(0.3, -0.4, 0);
    laptopGroup.rotation.y = -Math.PI * 0.14;
    laptopGroup.rotation.x = Math.PI * 0.08;
    mainGroup.add(laptopGroup);

    // --- 2. Floating Objects ---
    const icoGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const icoEdgesGeo = new THREE.EdgesGeometry(icoGeo);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xFEF3C7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.85,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    const icoEdges = new THREE.LineSegments(icoEdgesGeo, inkEdgeMat);
    const icoGroup = new THREE.Group();
    icoGroup.add(icoMesh);
    icoGroup.add(icoEdges);
    icoGroup.position.set(-3.2, 2.0, 1.2);
    mainGroup.add(icoGroup);

    // Desktop-Only Additional Objects
    let cubeGroup: THREE.Group | null = null;
    let planeGroup: THREE.Group | null = null;
    let cubeGeo: THREE.BoxGeometry | null = null;
    let cubeEdgesGeo: THREE.EdgesGeometry | null = null;
    let planeShape: THREE.BufferGeometry | null = null;
    let planeEdgesGeo: THREE.WireframeGeometry | null = null;
    let planeMat: THREE.MeshStandardMaterial | null = null;

    if (!isMobileDevice) {
      // Kraft Box
      cubeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      cubeEdgesGeo = new THREE.EdgesGeometry(cubeGeo);
      const cubeMesh = new THREE.Mesh(cubeGeo, kraftMat);
      const cubeEdges = new THREE.LineSegments(cubeEdgesGeo, inkEdgeMat);
      cubeGroup = new THREE.Group();
      cubeGroup.add(cubeMesh);
      cubeGroup.add(cubeEdges);
      cubeGroup.position.set(3.6, 1.8, -0.5);
      mainGroup.add(cubeGroup);

      // Paper Plane
      planeShape = new THREE.BufferGeometry();
      const planeVertices = new Float32Array([
        0, 0, 1.1,
        -0.7, 0, -0.7,
        0, 0.25, -0.35,

        0, 0, 1.1,
        0.7, 0, -0.7,
        0, 0.25, -0.35,
      ]);
      planeShape.setAttribute('position', new THREE.BufferAttribute(planeVertices, 3));
      planeShape.computeVertexNormals();
      planeEdgesGeo = new THREE.WireframeGeometry(planeShape);
      planeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide, roughness: 0.5 });
      const planeMesh = new THREE.Mesh(planeShape, planeMat);
      const planeEdges = new THREE.LineSegments(planeEdgesGeo, inkEdgeMat);
      planeGroup = new THREE.Group();
      planeGroup.add(planeMesh);
      planeGroup.add(planeEdges);
      planeGroup.position.set(3.2, -1.9, 1.8);
      planeGroup.rotation.set(0.4, -0.8, 0.3);
      mainGroup.add(planeGroup);
    }

    requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    // Desktop Mouse Parallax (cached bounding rect to prevent layout thrashing)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let cachedRect = container.getBoundingClientRect();

    const updateCachedRect = () => {
      if (container) cachedRect = container.getBoundingClientRect();
    };

    if (!isMobileDevice) {
      handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX - cachedRect.left) / (cachedRect.width || 1) - 0.5;
        const y = (e.clientY - cachedRect.top) / (cachedRect.height || 1) - 0.5;
        mouse.targetX = x * 2;
        mouse.targetY = -y * 2;
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', updateCachedRect, { passive: true });
    }

    // Animation Loop with Visibility & Tab State Pausing
    let animationFrameId: number = 0;
    let isRunning = false;
    let isVisible = true;
    let isTabActive = !document.hidden;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRunning) return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        if (!isMobileDevice) {
          mouse.x += (mouse.targetX - mouse.x) * 0.05;
          mouse.y += (mouse.targetY - mouse.y) * 0.05;
          mainGroup.rotation.y = mouse.x * 0.3;
          mainGroup.rotation.x = -mouse.y * 0.2;

          if (cubeGroup) {
            cubeGroup.rotation.x += 0.006;
            cubeGroup.rotation.z += 0.008;
            cubeGroup.position.y = 1.8 + Math.cos(elapsedTime * 1.4) * 0.14;
          }
          if (planeGroup) {
            planeGroup.position.y = -1.9 + Math.sin(elapsedTime * 1.2 + 2) * 0.15;
          }
        } else {
          mainGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.15;
          mainGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.08;
        }

        laptopGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.2) * 0.1;
        icoGroup.rotation.x += 0.008;
        icoGroup.rotation.y += 0.012;
        icoGroup.position.y = 2.0 + Math.sin(elapsedTime * 1.5 + 1) * 0.15;
      }

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (isRunning) return;
      isRunning = true;
      clock.start();
      animationFrameId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clock.stop();
    };

    // IntersectionObserver to pause when off-screen
    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0]?.isIntersecting ?? false;
      if (isVisible && isTabActive) {
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.05 });
    intersectionObserver.observe(container);

    // Visibility change (tab switch)
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    startAnimation();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      updateCachedRect();
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      stopAnimation();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (handleMouseMove) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', updateCachedRect);
      }
      resizeObserver.disconnect();

      // Dispose Geometries & Materials
      baseGeo.dispose();
      baseEdgesGeo.dispose();
      lidGeo.dispose();
      lidEdgesGeo.dispose();
      displayGeo.dispose();
      icoGeo.dispose();
      icoEdgesGeo.dispose();
      paperMat.dispose();
      inkEdgeMat.dispose();
      kraftMat.dispose();
      screenMat.dispose();
      icoMat.dispose();

      if (cubeGeo) cubeGeo.dispose();
      if (cubeEdgesGeo) cubeEdgesGeo.dispose();
      if (planeShape) planeShape.dispose();
      if (planeEdgesGeo) planeEdgesGeo.dispose();
      if (planeMat) planeMat.dispose();
      if (blueLight) blueLight.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [webglSupported]);

  return (
    <div className={`relative w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-[420px] flex items-center justify-center ${className}`}>
      {webglSupported ? (
        <div
          ref={mountRef}
          className="w-full h-full cursor-default md:cursor-grab active:cursor-grabbing transition-opacity duration-500"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      ) : (
        /* Graceful 2.5D Sketchbook Fallback for non-WebGL */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
          <div className="relative w-full max-w-xs bg-white border-2 border-ink-900 rounded-lg shadow-sketch p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-ink-200 pb-2">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-ink-900" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-ink-900" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-ink-900" />
              </div>
              <span className="font-mono text-[11px] text-ink-500 font-semibold">workspace.sh</span>
            </div>
            <div className="font-mono text-xs text-left text-ink-800 space-y-1 my-3">
              <p className="text-kraft-600 font-bold">$ supratik.init()</p>
              <p className="text-emerald-700">✓ AI Models Active</p>
              <p className="text-blueprint-600">✓ Systems Online</p>
            </div>
            <div className="flex justify-between items-center text-xs font-sketch text-ink-600 pt-1 border-t border-ink-100">
              <span>✦ Sketchbook Workspace</span>
              <Sparkles className="w-3.5 h-3.5 text-kraft-500" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Hand-Drawn Annotation - Desktop Only */}
      {!isMobile && (
        <div className="absolute -top-3 right-6 hidden md:flex items-center space-x-1 font-sketch text-ink-700 text-sm bg-paper-50 px-2.5 py-1 rounded border border-ink shadow-sketch-sm rotate-2 pointer-events-none">
          <Laptop className="w-3.5 h-3.5 text-kraft-600" />
          <span>3D Workspace ✦ move cursor</span>
        </div>
      )}
    </div>
  );
};
