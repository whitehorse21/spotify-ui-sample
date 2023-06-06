import styled from "styled-components"

const ModalInput = ({ name, type, value, maxLength, placeholder, required, reference, onKeyDown, onChange, element }) => {
  let inputCharacterAlert = ""

  if (value.length === maxLength || (value.length === 0 && required)) {
    inputCharacterAlert = "limit"
  } else if ((value.length * 100) / maxLength >= 90) {
    inputCharacterAlert = "advice"
  }

  return (
    <Container className={`input-wrapper`}>
      <label htmlFor={name}>{name}</label>
      {element !== "textarea" ? (
        <input
          id={name}
          value={value}
          type={type || "text"}
          ref={reference}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)} />
      ) : (
        <textarea
          id={name}
          value={value}
          ref={reference}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)}></textarea>
      )}
      <span className={`character-length ${inputCharacterAlert}`}>
        {value.length}/{maxLength}
      </span>
    </Container>
  )
}

export default ModalInput

const Container = styled.div`
  position: relative;
  
  label {
    font-size: var(--fs-11);
    position: absolute;
    top: 0;
    left: 1rem;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity .2s;
  }

  &:focus-within label {
    opacity: 1;
  }

  input {
    padding: 0 1.2rem;
    height: 4rem;
  }

  textarea {
    padding: 0.8rem 0.8rem 2.2rem;
    resize: none;

    ::-webkit-scrollbar {
      width: 12px;
      max-height: 50%;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  & :is(input, textarea) {
    background-color: var(--white-op-01);
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100%;
    color: var(--white);
    font-size: var(--fs-14);
    font-family: "Spotify Circular Book", sans-serif;
  }

  & :is(input, textarea):focus {
    background-color: #333;
    border: 1px solid #535353;
    outline: none;
  }

  .character-length {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    right: 0.8rem;
    bottom: 0;
    font-size: var(--fs-16);
    font-family: "Spotify Circular Light", sans-serif;
    border-radius: 2px;
    padding: 0 0.4rem;
    background-color: #2e77d0;
  }

  .character-length:is(.visible, .limit) {
    opacity: 1;
    visibility: visible;
  }

  .character-length.limit {
    background-color: #ff0000;
  }
`