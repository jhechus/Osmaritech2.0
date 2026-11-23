import { CounterDirective } from './counter.directive';
import { DrawSvgDirective } from './draw-svg.directive';
import { MagneticDirective } from './magnetic.directive';
import { ParallaxDirective } from './parallax.directive';
import { RevealDirective } from './reveal.directive';
import { SplitWordsDirective } from './split-words.directive';
import { TiltDirective } from './tilt.directive';

export { useGsap } from './use-gsap';

/** Importa esto en `imports` de un componente para tener todas las directivas de movimiento. */
export const MOTION = [RevealDirective, ParallaxDirective, CounterDirective, TiltDirective, MagneticDirective, SplitWordsDirective, DrawSvgDirective] as const;
