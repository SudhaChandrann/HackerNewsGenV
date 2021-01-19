import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  private data: Item[] = []
  private carasoulData: Item[] = [];
  constructor() { }

  getData()
  {
    return this.data;
  }

  setData(data: Item[])
  {
    this.data = data;
  }

  getCarasoulData()
  {
    return this.carasoulData;
  }

  setCarasoulData(data: Item[])
  {
    this.carasoulData = data;
  }
}
