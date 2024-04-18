import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
 /* flex: 1; */
 height: 56px;
 width: 100%;
 background-color: ${({ theme }) => theme.COLORS.GREEN_700};
 border-radius: 6px;
 align-items: center;
 justify-content: center;
 margin-top: 30px;
`;

export const Title = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
`;