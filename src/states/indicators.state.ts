import { IIndicator } from '../models/IIndicator.interface';
import { IIndicatorExtended } from '../models/IIndicatorExtended.interface';

export const indicatorsState: IIndicatorExtended[] = [
  {
    id: '1',
    title: 'Уровень карналита в силосной башне №1',
    value: 1065,
    minValue: 0,
    maxValue: 2000,
    countDirection: 'up'
  },
  {
    id: '2',
    title: 'Уровень карналита в силосной башне №2',
    value: 998,
    minValue: 0,
    maxValue: 1000,
    countDirection: 'up'
  },
  {
    id: '3',
    title: 'Уровень карналита в силосной башне №3',
    value: 578,
    minValue: 0,
    maxValue: 1000,
    countDirection: 'up'
  },
  {
    id: '4',
    title: 'Уровень карналита в силосной башне №4',
    value: 967,
    minValue: 0,
    maxValue: 1000,
    countDirection: 'down'
  },
  {
    id: '5',
    title: 'Уровень карналита в силосной башне №5',
    value: 1365,
    minValue: 0,
    maxValue: 2000,
    countDirection: 'up'
  },
  {
    id: '6',
    title: 'Уровень карналита в силосной башне №6',
    value: 1143,
    minValue: 0,
    maxValue: 2000,
    countDirection: 'up'
  },
  {
    id: '7',
    title: 'Уровень карналита в силосной башне №7',
    value: 856,
    minValue: 0,
    maxValue: 2000,
    countDirection: 'down'
  },
  {
    id: '8',
    title: 'Уровень карналита в силосной башне №8',
    value: 0,
    minValue: 0,
    maxValue: 1000,
    countDirection: 'up'
  }
];
