/**
 * Created by alexanderlerma on 2/27/17.
 */
export class Temperature {

  private _name: string
  private _temperature: number

  constructor(name: string, temperature: number) {
    this._name = name;
    this._temperature = temperature;
  }

  get name(): string {
    return this._name;
  }

  get temperature(): number {
    return this._temperature;
  }
}
