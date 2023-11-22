import styled from 'styled-components/native';

export const TitleContainer = styled.View`
  padding-top: 10px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ColumnTop = styled.View<{
  separator: Boolean | undefined;
  flex: number;
}>`
  flex: ${({flex}) => flex};
  padding: 5px 0px;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 5px;
  border-right-width: ${({separator}) => (separator ? 1 : 0)}px;
  border-color: rgba(100, 100, 100, 0.3);
`;

export const ColumnTopContainer = styled.View`
  border-width: 1px;
  border-color: rgba(100, 100, 100, 0.3);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  flex-direction: row;
`;

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: rgba(100, 100, 100, 0.3);
  border-right-width: 1px;
  border-left-width: 1px;
`;

export const ItemColumn = styled.View<{
  separator: Boolean | undefined;
  flex: number;
}>`
  flex: ${({flex}) => flex};
  justify-content: flex-start;
  flex-direction: row;
  padding: 5px 0px;
  padding-left: 5px;
  border-right-width: ${({separator}) => (separator ? 1 : 0)}px;
  border-color: rgba(100, 100, 100, 0.3);
`;
