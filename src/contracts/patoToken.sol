// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
//import "../contracts/TransactionFee.sol";

contract TuviellaToken is ERC20, ERC20Burnable, ERC20Pausable, AccessControlEnumerable {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
  bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

  uint public maxSupply = 100000000 ether;
  uint public supply = 0;
  

  /**
   * @dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the
   * account that deploys the contract and mint 1million tokens to master chef address
   *
   * See {ERC20-constructor}.
   */
  constructor(address masterChef) ERC20('Pato Verde', 'PATO') {
    uint initial = 1000000 ether;
    _mint(masterChef, initial);
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());

    _setupRole(MINTER_ROLE, _msgSender());
    _setupRole(PAUSER_ROLE, _msgSender());

    lastTransfer = _msgSender();
  }

  /**
   * @dev Creates `amount` new tokens for `to`.
   *
   * See {ERC20-_mint}.
   *
   * Requirements:
   *
   * - the caller must have the `MINTER_ROLE`.
   */
  function mint(address to, uint256 amount) public virtual {
    require(hasRole(MINTER_ROLE, _msgSender()), "Mint: must have minter role to mint");
    require((supply + amount) <= maxSupply, "Max supply alcanzado");
    supply = supply + amount;
    _mint(to, amount);
  }

  /**
   * @dev Pauses all token transfers.
   *
   * See {ERC20Pausable} and {Pausable-_pause}.
   *
   * Requirements:
   *
   * - the caller must have the `PAUSER_ROLE`.
   */
  function pause() public virtual {
    require(hasRole(PAUSER_ROLE, _msgSender()), "Pause: must have pauser role to pause");
    _pause();
  }

  /**
   * @dev Unpauses all token transfers.
   *
   * See {ERC20Pausable} and {Pausable-_unpause}.
   *
   * Requirements:
   *
   * - the caller must have the `PAUSER_ROLE`.
   */
  function unpause() public virtual {
    require(hasRole(PAUSER_ROLE, _msgSender()), "UnPause: must have pauser role to unpause");
    _unpause();
  }

  function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Pausable){ }

  function transfer(address sender, address recipient, uint256 amount) internal virtual override(ERC20){ 
       
    super._transfer(sender, recipient, amount);
  }



}