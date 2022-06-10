//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @dev This contract is designed for logging discovered accounts
 * and a link to associated information on chain for indexers to
 * pick up easily. Discoveries can be chained as new information
 * is discovered about the accounts.
 *
 * @author staa99
 */
contract DiscoveryLogger {
    /**
     * @dev A new account has been discovered on chain identified by chainId.
     * Additional data about the discovery can be located with _locator.
     */
    event NewDiscovery(address indexed _addr, uint64 _chainId, bytes _locator);

    address admin;

    constructor() {
        admin = msg.sender;
    }

    function logDiscovery(address _addr, uint64 _chainId, bytes calldata _locator) external {
        require(msg.sender == admin, "UNAUTHORIZED");
        emit NewDiscovery(_addr, _chainId, _locator);
    }
}
