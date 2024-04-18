import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 /* align-items: center; */
 justify-content: center;
 padding: 0px 20px 20px 20px;
 /* padding: 20px; */
`;

export const Title = styled.Text`
 font-size: 20px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 margin-bottom: 20px;
 border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
 border-bottom-width: 1px;

`;
export const TitleSub = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 `;

export const Button = styled.TouchableOpacity`
 /* flex: 1; */

 height: 56px;

 background-color: ${({ theme }) => theme.COLORS.GREEN_700};
 
 border-radius: 6px;

 align-items: center;
 justify-content: center;
 margin-top: 25px;

`;

export const Section = styled.View`
 margin-bottom: 30px;
`;

export const SectionHeader = styled.View`
 width: 100%;
 flex-direction: row;
 justify-content: space-between;
 padding: 40px 0px 0px 25px;
 /* padding-right: 20px; */
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ButtonReturn = styled.TouchableOpacity`
 height: 56px;
 width: 56px;
 border-radius: 32px;
 padding-top: 10px;
`;


