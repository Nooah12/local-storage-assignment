'use client'

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import screens from '@/utils/breakpoints';

// CSS
const StyledMainContent = styled.main`
    background-color: #ffa5a5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100%;
    width: 100%;
    text-align: center;

    .container {
        background-color: #e4e4e4;
        padding: 20px;
        border-radius: 40px;
    }

    input {
        padding: 8px;
        width: 80%;
        border-radius: 5px;
        border: dashed 1px;
    }

    button {
        padding: 10px 30px;
        cursor: pointer;
        margin: 24px auto;
        background: #333;
        color: #fff;
        border-radius: 10px;
        display: block;

        &:hover {
            background: #e3e3e3;
            color: #333;
        }
    }

    .favNum {
        font-weight: 700;
        display: block;
        margin-top: 16px;
    }

    @media only screen and ${screens.md} { 
        input {
            padding: 12px;
            width: auto;
        }

        .container {
            padding: 32px;
        }
    }
`

const MainContent = () => {
    const [inputValue, setInputValue] = useState<number | ''>('');
  
    const [favNumber, setFavNumber] = useState<number | null>(null);
  
    // useEffect to load the value from localStorage when the component mounts??
    useEffect(() => {
      const storedNumber = localStorage.getItem('favNumber');
      if (storedNumber) {
        setFavNumber(JSON.parse(storedNumber));
      }
    }, []);
  
    // save the value to localStorage and display it
    const handleClick = () => {
      if (inputValue !== '') {
        localStorage.setItem('favNumber', JSON.stringify(inputValue));
        setFavNumber(inputValue);
        setInputValue(''); // Clear the input after saving?
      }
    };
  
    return (
        <StyledMainContent>
            <div className='container'>
                <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                placeholder="Enter a number"
                />
                <button onClick={handleClick}>Save</button>
        
                {/* Display the favorite number only after it has been saved */}
                {favNumber !== null && (
                <div>Favorite Number: <span className='favNum'>{favNumber}</span></div>
                )}
            </div>
        </StyledMainContent>
    );
}

export default MainContent