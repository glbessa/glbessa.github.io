import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 grid = vUv * vec2(38.0, 24.0);
    vec2 cell = fract(grid) - .5;
    float dot = 1.0 - smoothstep(.06, .1, length(cell));
    float wave = sin(grid.x * .8 + grid.y * .55 - uTime * 1.2) * .5 + .5;
    float flicker = sin(grid.x * 2.3 + grid.y * 4.7 + uTime) * .5 + .5;
    float reveal = smoothstep(0.0, 1.8, uTime - length(vUv - .5) * 1.2);
    float opacity = dot * (.025 + wave * .13 + flicker * .035) * reveal;
    gl_FragColor = vec4(.55, .36, .98, opacity);
  }
`;

function DotMatrix() {
  const material = useRef();
  const { viewport } = useThree();
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }) => {
    material.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function HeroCanvasReveal() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <DotMatrix />
      </Canvas>
    </div>
  );
}
