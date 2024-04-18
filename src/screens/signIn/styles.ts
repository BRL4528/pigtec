import styled from 'styled-components/native';

export const Container = styled.View`
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 align-items: center;
 justify-content: center;
 flex: 1;
`;

export const Text = styled.Text`
 color: ${({ theme }) => theme.COLORS.WHITE};
 margin-bottom: 35px;
 font-size: 22px;
`;

export const SectionForm = styled.View`
 min-width: 300px;
`;
export const Image = styled.Image`
position: absolute;
width: 650px;
`;
export const ImageLogo = styled.Image`
/* position: absolute; */
max-width: 147px;
max-height: 47px;
`;

export const Button = styled.TouchableOpacity`
 /* flex: 1; */

 height: 56px;
 /* width: 256px; */

 background-color: ${({ theme }) => theme.COLORS.GREEN_700};
 
 border-radius: 6px;

 align-items: center;
 justify-content: center;

 /* margin-top: 30px; */
`;

export const Title = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextCopyright = styled.Text`
 font-size: 14px;
 color: #7C7C8A;
 margin-bottom: 5px;
`;

export const Footer = styled.View`
background-color: ${({ theme }) => theme.COLORS.GRAY_600};
width: 100%;
align-items: center;
margin-top: -10px;
padding-bottom: 15px;
`;

