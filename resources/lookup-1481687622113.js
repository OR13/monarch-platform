(function(window, undefined) {
  var dictionary = {
    "bb395869-46b5-48da-89c4-9668408feb7c": "Concierge",
    "9fd39b74-4dfb-46b8-8597-df6e6e96b481": "Identity",
    "96a06720-ecb5-4bad-ab8e-1fcdb8e185bb": "Wallet",
    "b25617ac-3c30-419a-a041-d8c339a8b931": "Loading Screen",
    "68503a7d-e959-40d2-95b6-e671729aeb29": "Sign In",
    "cc5c9bd5-aaf6-489b-8661-cede3e146593": "Side Panel",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);