import { keyframes } from "styled-components"

export const grow = keyframes`
  from {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(0.4);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.8);
  }
`

export const shake = keyframes`
	0% { transform: translate(0); }
	10% { transform: translate(-2px, -2px); }
	20% { transform: translate(2px, -2px); }
	30% { transform: translate(-2px, 2px); }
	40% { transform: translate(2px, 2px); }
	50% { transform: translate(-2px, -2px); } 
	60% { transform: translate(2px, -2px); }
	70% { transform: translate(-2px, 2px); }
	80% { transform: translate(-2px, -2px); }
	90% { transform: translate(2px, -2px); }
	100% { transform: translate(0); }
`