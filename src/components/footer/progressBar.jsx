import styled from "styled-components"

const ProgressBar = ({ value, max, onChange, percentage = Math.floor((value * 100) / max) }) => (
  <Input
    type="range" value={value} min={0} max={max}
    style={{ "--progress-ball": `${percentage}%` }}
    onChange={event => onChange(Number(event.target.value))} />
)

export default ProgressBar

const makeLongShadow = size => {
  let offsetX = 4, shadow = `${offsetX}px 0 0 ${size} var(--progress-input-bg)`
  while (offsetX < 722) { shadow = `${shadow}, ${offsetX++}px 0 0 ${size} var(--progress-input-bg)` }
  return shadow
}

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  height: 12px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 4px;

  // Thumb
  &::-webkit-slider-thumb {
    appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transform: translateY(calc(-50% + 2px));
    box-shadow: ${makeLongShadow("-4px")};
    background: linear-gradient(
      to right,
      var(--white) var(--progress-ball),
      var(--progress-input-bg) var(--progress-ball)
    );
  }

  &::-moz-range-thumb {
    --moz-shadow-height: 0px;
    border: 0;
    appearance: none;
    height: 4px;
    width: 12px;
    border-radius: 0;
    box-shadow: ${makeLongShadow("var(--moz-shadow-height)")};
    background: linear-gradient(
      to right,
      var(--white) var(--progress-ball),
      var(--progress-input-bg) var(--progress-ball)
    );
  }

  // Bar
  &::-webkit-slider-runnable-track {
    appearance: none;
    height: 4px;
    border-radius: 4px;
    background-color: var(--white);
    overflow: hidden;
  }

  &::-moz-range-track {
    appearance: none;
    height: 4px;
    border-radius: 4px;
    background-color: var(--white);
    overflow: hidden;
  }

  // Bar and thumb on hover or active
  &:is(:hover, :active) {
    // Thumb
    &::-webkit-slider-thumb {
      background: var(--white);
    }

    &::-moz-range-thumb {
      --moz-shadow-height: -4px;
      height: 12px;
      background: var(--white);
      border-radius: 50%;
    }

    // Bar
    &::-webkit-slider-runnable-track {
      background: var(--active-progress-bar);
      overflow: visible;
    }

    &::-moz-range-track {
      background: var(--active-progress-bar);
      overflow: visible;
    }
  }
`