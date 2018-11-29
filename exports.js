const bip39 = require("bip39");

const formSubmit = () => {
  const mnemonic = document.getElementById("mnemonic").value;
  const entropy = document.getElementById("entropy").value;
  // alert(`mnemonic '${mnemonic}' entropy '${entropy}' `);
  try {
    if((entropy.length == 0) && (mnemonic.length > 0)) {
      // alert(`creating entropy from mnemonic '${mnemonic}'`);
      document.getElementById("entropy").value  = bip39.mnemonicToEntropy(mnemonic);
    } 
    if((mnemonic.length == 0) && (entropy.length > 0)) {
      //alert(`creating mnemonic from entropy '${entropy}'`);
      document.getElementById("mnemonic").value = bip39.entropyToMnemonic(entropy);
    } 
  } catch(error) {
    alert(error);
  }
  return false;
}

module.exports = {
    formSubmit : formSubmit
};
