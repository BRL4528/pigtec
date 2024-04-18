import styled from 'styled-components/native';

export const Container = styled.View`
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 align-items: center;
 padding: 20px 30px 25px 30px;
 flex: 1;
`;

export const Header = styled.Text`
  padding-top: 30px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  padding-top: 10px;
  font-size: 14px;
  color: #7C7C8A;
  text-align: center;
  font-weight: 400;
  margin-bottom: 45px;
  max-width: 250px;
`;

export const Section = styled.View`
 margin-bottom: 30px;
 width: 100%;
`;
export const Title = styled.Text`
 font-size: 20px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 margin-bottom: 20px;
 border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
 border-bottom-width: 1px;
`;

export const TitleSelect = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 /* margin-left: 10px; */
 margin-bottom: 5px;
`;

export const SectionHeader = styled.View`
  width: 100%;
 flex-direction: row;
 justify-content: space-between;
 padding: 40px 0px 0px 25px;
 /* margin-left: 10px; */
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ButtonReturn = styled.TouchableOpacity`
 height: 56px;
 width: 56px;
 padding: 15px;
`;

export const SectionFooter = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 25px 25px 25px 25px;
`;

export const ButtonRunCount = styled.TouchableOpacity`
 /* flex: 1; */
 height: 56px;
 width: 100%;
 background-color: ${props => props.disabled ? ({ theme }) => theme.COLORS.GREEN_900 : ({ theme }) => theme.COLORS.GREEN_500};
 border-radius: 6px;
 align-items: center;
 justify-content: center;
 margin-top: 30px;
`;

export const TitleButton = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${props => props.disabled ? ({ theme }) => theme.COLORS.GRAY_300 : ({ theme }) => theme.COLORS.WHITE};
`;

