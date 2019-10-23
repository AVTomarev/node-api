import { IIndicator } from './IIndicator.interface';
import { CountDirection } from './CountDirection.type'; 

export interface IIndicatorExtended extends IIndicator {
  countDirection: CountDirection; 
}