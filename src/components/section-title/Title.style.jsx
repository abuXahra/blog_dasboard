import styled from 'styled-components'


export const TitleWrapper = styled.div`
width: 100%;
color: ${({ tColor }) => tColor || ''};
hr{
    border: ${({ hrLB }) => hrLB || '1.5px'} solid ${({ hrCl }) => hrCl || '#000'};
    margin-top: 5px;
    margin-bottom: ${({ mb }) => mb || '20px'} ;
}

`