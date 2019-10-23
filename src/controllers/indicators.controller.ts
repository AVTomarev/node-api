import WebSocket from 'ws';
import { IIndicator } from '../models/IIndicator.interface';
import { indicatorsState } from '../states/indicators.state';
import { IIndicatorExtended } from '../models/IIndicatorExtended.interface';
import { CountDirection } from '../models/CountDirection.type';

export const indicatorsController = (ws: WebSocket) => {
  let iState = indicatorsState;

  const interval = setInterval(() => {
    iState = modifyState(iState);
    
    const simplifyedState = simplifyState(iState);

    const jsonAsStr = JSON.stringify(simplifyedState);

    ws.send(jsonAsStr);
  }, 5000);

  ws.on('close', () => {
    clearInterval(interval);
  });
}

function simplifyState(state: IIndicatorExtended[]): IIndicator[] {
  return state.map((indicator) => {
    return {
      title: indicator.title,
      id: indicator.id,
      value: indicator.value,
      minValue: indicator.minValue,
      maxValue: indicator.maxValue,
    }
  });
}

function modifyState(state: IIndicatorExtended[]): IIndicatorExtended[] {
  return state.map((indicator) => {
    const {
      value,
      minValue,
      maxValue,
      countDirection
    } = indicator;
    let newCountDirection: CountDirection;
    let newValue;

    const maxOffset = 10;
    if (countDirection === 'up') {

      const diff = maxValue - value;
      newValue = diff > maxOffset ?
        value + maxOffset :
        value + diff;

    } else {

      const diff = value - minValue;
      newValue = diff > maxOffset ?
        value - maxOffset : 
        value - diff;
    }

    if (countDirection === 'up' && newValue === maxValue) {

      newCountDirection = 'down';
    } else if (countDirection === 'down' && newValue === minValue) {

      newCountDirection = 'up';
    } else {

      newCountDirection = countDirection;
    }

    return {
      minValue,
      maxValue,
      value: newValue,
      countDirection: newCountDirection,
      title: indicator.title,
      id: indicator.id
    };
  });
}
