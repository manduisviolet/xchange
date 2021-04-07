export const URL_API = "/json/money.json";


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