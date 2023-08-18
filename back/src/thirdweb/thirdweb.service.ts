import { Injectable } from '@nestjs/common';
import { Astar } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import * as dotenv from 'dotenv';

//const contract = await sdk.getContract("0xD16Ec4BFc7D94cb0eA96a8aF75122A598E80e15d");

@Injectable()
export class ThirdwebService {
  private sdk: ThirdwebSDK;

  constructor() {
    dotenv.config();
    this.sdk = new ThirdwebSDK(Astar, {
        secretKey: process.env.SecretKey,
      });
  }
}
