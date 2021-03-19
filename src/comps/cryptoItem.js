

function CryptoItem(props) {
    let item = props.crypto;

    return (
        <option value={props.crypto.low}>{props.crypto.up}</option>
    );
  }
  
  export default CryptoItem;
  