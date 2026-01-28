export interface INetHelpers {
  FindLanDevices(skipNameResolution?: boolean): Promise<Array<string>>
}
