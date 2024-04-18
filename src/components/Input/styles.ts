import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction: column;
`;

export const InputNatite = styled.TextInput`
 /* margin-bottom: 30px; */

 color: ${(props) => props.editable ? ({ theme }) => theme.COLORS.WHITE  : ({ theme }) => theme.COLORS.GRAY_300};
 border-color: ${({ theme }) => theme.COLORS.GRAY_300};
 border-radius: 6px;
 height: 50px;
 /* margin: 12px; */
 border-width: 1px;
 padding: 10px;
 margin-bottom: 15px;
 font-size: 16px;
`;

export const Title = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 margin-bottom: 5px;
`;


