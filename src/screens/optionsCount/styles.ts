import styled from 'styled-components/native';

export const Container = styled.View`
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 align-items: center;
 padding-top: 20px;
 flex: 1;
`;

export const Header = styled.Text`
padding-top: 80px;
font-size: 24px;
color: #fff;
max-width: 250px;
text-align: center;
font-weight: 700;
`;

export const SubTitle = styled.Text`
padding-top: 10px;
font-size: 14px;
color: #7C7C8A;
text-align: center;
font-weight: 400;
margin-bottom: 25px;
`;

export const TextOpt = styled.Text`
 color: #fff;
 font-size: 16px;
 margin-left: 10px;
`;

export const SectionList = styled.View`
 align-items: center;
 flex-direction: row;

`;

export const TouchableButton = styled.TouchableOpacity`
 width: 350px;
 /* height: 100px; */
 background-color: ${({ theme }) => theme.COLORS.GRAY_500};
 padding: 25px;
 margin: 5px;
 border-radius: 6px;
 align-items: flex-start;
`;

export const ExitButton = styled.TouchableOpacity`
 font-size: 14px;
 color: #7C7C8A;
 margin-bottom: 25px;
 flex-direction: row;
 align-items: center;
`;

export const TextExit = styled.Text`
 color: ${({ theme }) => theme.COLORS.RED_DARK};
 margin-right: 10px;
`;

export const TextSections = styled.Text`
margin-top: 10px;
 margin-bottom: 15px;
 color: #7C7C8A;
`;
