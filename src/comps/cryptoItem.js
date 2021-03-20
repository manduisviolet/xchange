

function CryptoItem(props) {

    return (
        <option value={props.crypto.low}>{props.crypto.up}</option>
    );
  }
  
  export default CryptoItem;
  