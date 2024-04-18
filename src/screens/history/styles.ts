import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 /* padding-top: 10px; */
 align-items: center;
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

export const TitleNotHistory = styled.Text`
 color: #7C7C8A;
`;