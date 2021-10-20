function() {
    var url = window.location.toString();
    var replacePII = [
      {
        rgx: /((tel=)|(telephone=)|(phone=))[\d\+\s][^&\/\?]+/gi,
        repl: 'tel-removed'
      },
      {
        rgx: /((firstname=)|(lastname=)|(surname=)|(name=))[^&\/\?]+/gi,
        repl: 'name-removed'
      },
      {
        rgx: /((username=)|(user=)|(userId=))[^&\/\?]+/gi,
        repl: 'username-removed'
      },
      {
        rgx: /((password=)|(passwd=)|(pass=))[^&\/\?]+/gi,
        repl: 'password-removed'
      },
    ];
    
    replacePII.forEach(function(regArr) {
      url = url.replace(regArr.rgx, regArr.repl);
    });
    
    return url;
  }