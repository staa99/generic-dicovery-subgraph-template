import { expect } from 'chai'
import { ethers } from 'hardhat'
import { hexlify } from 'ethers/lib/utils'

describe('DiscoveryLogger', function () {
  it('Should emit NewDiscovery on discovery logging', async function () {
    const DiscoveryLogger = await ethers.getContractFactory('DiscoveryLogger')
    const discoveryLogger = await DiscoveryLogger.deploy()
    await discoveryLogger.deployed()

    const addr = '0x1a2b3c4d5e6f7e8d9c0b9a8b7c6d5e4f3e2d1c2b'
    const chainId = 1
    const locator = hexlify(ethers.utils.toUtf8Bytes('bafkrei...'))
    await expect(discoveryLogger.logDiscovery(addr, chainId, locator))
      .to.emit(discoveryLogger, 'NewDiscovery')
      .withArgs(addr, chainId, locator)
  })
})
