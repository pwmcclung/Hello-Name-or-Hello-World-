function hello(name) {
    if (name){
    let name1 = name.toLowerCase()
    let name2 = name1.charAt(0).toUpperCase() + name1.slice(1)
    return 'Hello, ' + name2 + '!';
   } else {
      return 'Hello, World!'
    }
    
  }
