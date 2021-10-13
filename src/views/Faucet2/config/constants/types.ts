export type SerializedBigNumber = string;

export interface Address {
  1: string; // ETH
  56: string; // BSC
  97?: string; // BSC TEST
  137?: string; // POLYGON
  80001?: string; // MUMBAI
}

export enum NetworkNames {
  ETH = 'eth',
  Bsc = 'bsc',
  BSCTest = 'bscTestnet',
  Polygon = 'polygon',
  Mumbai = 'mumbai'
}

export enum NetworkId {
  Eth = 1,
  Bsc = 56,
  BscTestnet = 97,
  Polygon = 137,
  Mumbai = 80001
}

export const NetworksById: { [networkId in NetworkId]: string } = {
  [NetworkId.Eth]: 'eth',
  [NetworkId.Bsc]: 'bsc',
  [NetworkId.BscTestnet]: 'bscTestnet',
  [NetworkId.Polygon]: 'polygon',
  [NetworkId.Mumbai]: 'mumbai'
};

export interface NetworkConfig {
  id: NetworkId;
  name: NetworkNames;
  displayName: string;
}

export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
};
