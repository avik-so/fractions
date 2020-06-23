async function ohHttpRequest(options: any, external: boolean, cb) {
  let headers = options.headers ? options.headers : {};
  modifyHeader(headers);
  if (external) {
    headers = removeJwtTokens(headers);
  }
  options.headers = headers;
  return request(options, (err, res, body) => {
    return cb(err, res, body);
  });
}

export async function internalOHRequest(options: any, cb) {
  return ohHttpRequest(options, false, cb);
}

export async function externalOHRequest(options: any, cb) {
  return ohHttpRequest(options, true, cb);
}

export function httpRequest(options: HttpRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        return reject(error);
      } else {
        if (response.statusCode === 200) {
          return resolve(body);
        } else {
          return reject(response);
        }
      }
    });
  });
}
