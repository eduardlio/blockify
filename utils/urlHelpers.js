const urlHelpers = (() => {
    // from https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
  const isValidUrl = urlString => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return urlPattern.exec(urlString);
  }

  /**
   *
   * Sourced from https://github.com/ogt/valid-url/
   * Expression is direct from RFC 3986
   * and can be found at https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * Given an example input: https://old.reddit.com/r/coffee?page=2#12
   * 0: "https://old.reddit.com/r/coffee?page=2#12"
   * 1: "https" scheme
   * 2: "old.reddit.com" host
   * 3: "/r/coffee" path
   * 4: "page=2" query
   * 5: "12" fragment
   */
  var splitUri = function(uri) {
    var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return splitted;
  };

  function uriSplitToObject(splitResult) {
    const [ match, scheme, host, path, query, fragment ] = splitResult
    return { match, scheme, host, path, query, fragment }
  }

  function uriToObject(uri) {
    const split = splitUri(uri)
    return uriSplitToObject(split)
  }

  // function compareUris(source, input) {
  //   if(!input) {
  //     return false;
  //   }
  //   const src = uriToObject(source)
  //   const inp = uriToObject(input)
  //   const schemeMatch = src.scheme === '*' || src.scheme === inp.scheme
  //   const pathMatch = src.path === '*' || src.path === inp.path
  //   const hostMatch =
  // }
  return {
    isValidUrl
  }
})()