import { ethers } from 'hardhat'

async function main() {
  const DiscoveryLogger = await ethers.getContractFactory('DiscoveryLogger')
  const discoveryLogger = await DiscoveryLogger.deploy()

  await discoveryLogger.deployed()

  console.log('Discovery Logger deployed to:', discoveryLogger.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
