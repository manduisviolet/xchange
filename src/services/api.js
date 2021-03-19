export const URL_API = "http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb";


export const doApiGet = async (_url) => {
    try {
      let resp = await fetch(_url);
      let data = await resp.json();
      return data;
    }
    catch (err) {
      console.log(err);
      alert("there problem , come back tommrow!")
      return err;
    }
  }

export const doApiMethod = async (_url, _method, _body) => {
    try {
      let resp = await fetch(_url, {
        method: _method,
        body: JSON.stringify(_body),
        headers: {
          'content-type': "application/json"
        }
      })
      let data = await resp.json();
      return data;
    }
    catch (err) {
      console.log(err);
      alert("there problem")
      return err;
    }
  }