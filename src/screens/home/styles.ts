import styled from 'styled-components/native';

interface PropsButton {
  color?: string;
}

export const Container = styled.View`
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 align-items: center;
 /* justify-content: center; */
 padding-top: 20px;

`;
export const Section = styled.View`
 align-items: center;
 justify-content: center;
 flex-direction: row;
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 /* padding: 24px; */
 padding-bottom: 24px;
`;
export const SectionList = styled.View`
 align-items: center;
 flex-direction: row;
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 /* padding: 24px; */
 padding-bottom: 24px;
`;

export const SectionFlag = styled.View`
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 max-height: 380px;
 margin-top: -35px;
`;
export const ContainerFlag = styled.View`
 flex: 1;
 justify-content: center;
 flex-direction: row;
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 padding: 30px;
 padding-top: 100px;
`;

export const TextCount = styled.Text`
 color: ${({ theme }) => theme.COLORS.YELLOW};
 font-size: 74px;
 margin-bottom: 15px;
`;

export const TextFps = styled.Text`
 color: #fff;
`;
export const TextFlag = styled.Text`
 color: #fff;
 margin-left: 10px;
`;

export const Button = styled.TouchableOpacity<PropsButton>`
 /* flex: 1; */

 height: 56px;
 width: 56px;

 background-color: ${(props) => props.color === 'green' ?  ({ theme }) => theme.COLORS.GREEN_200 : ''}; 
 border-radius: 32px;

 align-items: center;
 justify-content: center;
 text-align: center;
 margin-top: 30px;
 margin: 15px;
`;
export const ButtonYellow = styled.TouchableOpacity`
 /* flex: 1; */

 height: 56px;
 width: 56px;

 background-color: ${({ theme }) => theme.COLORS.YELLOW};
 
 border-radius: 32px;

 align-items: center;
 justify-content: center;

 margin-top: 30px;
 margin: 15px;
`;

export const Title = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ButtonBlue = styled.TouchableOpacity`
 /* flex: 1; */

 height: 56px;
 width: 56px;

 background-color: ${({ theme }) => theme.COLORS.BLUE_500};
 
 border-radius: 32px;

 align-items: center;
 justify-content: center;

 margin-top: 30px;
 margin: 15px;
`;
export const ButtonRed = styled.TouchableOpacity`
 /* flex: 1; */

 height: 56px;
 width: 56px;

 background-color: ${({ theme }) => theme.COLORS.RED};
 
 border-radius: 32px;

 align-items: center;
 justify-content: center;

 margin-top: 30px;
 margin: 15px;
`;

export const SectionCamera = styled.View`
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
 padding-top: 30px;
`;

export const TitleNameProd = styled.Text`
 font-size: 16px;
 color: ${({ theme }) => theme.COLORS.GRAY_250};
 margin-top: -15px;
 margin-bottom: 15px;
`;
