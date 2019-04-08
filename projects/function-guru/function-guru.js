//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for(var key in object){
        arr.push(object[key]);
    }
    return arr;
    
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    var str = "";
    for(var key in data)
    {
        str = str+ key+" ";
    }
    str = str.substring(0, str.length - 1);
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   var str = "";
    for(var key in object)
    {
        if(typeof object[key]==="string")
        str = str+ object[key]+" ";
    }
    str = str.substring(0, str.length - 1);
    return str;
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection))
    {
        return "array";
    }
    
    return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   var first = string.substring(0,1);
    var rest = string.substring(1,string.length);
    var firstUp = first.toUpperCase();
    var done = firstUp+rest;
  return done;
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var toRet = "";
    var arr = string.split(' ');
    
    for(var i = 0; i < arr.length; i++) {
        toRet += capitalizeWord(arr[i] + " ");
    }
    return toRet.slice(0, toRet.length-1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var bool = false;
    for(var key in object) {
        if (key == 'name') {
            bool = true;
            break;
        }
    }
    if(bool)
  return "Welcome " + capitalizeWord(object['name']) + "!";
  return "No Name";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var boolName = false;
    var boolSpec = false;
    for(var key in object) {
        if (key == 'name') {
            boolName = true;
        }
        if(key == 'species') {
            boolSpec = true;
        }
    }
    if(boolSpec && boolName) 
    return capitalizeWord(object['name']) + " is a " + capitalizeWord(object['species']);
    return "Missing Info";
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    for(var key in object) {
        if(key === 'noises' && object[key].length > 0) {
            return valuesToString(object[key]);
        }
    }
    
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arr = string.split(' ');
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(valuesToString(object['friends']).indexOf(name)===-1){
        return false;
    }
    return true;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
        var notFriends = [];
    for (var i = 0; i < array.length; i++)
    {
        if (!(name === array[i].name))
        {
          if(!isFriend(name, array[i]))
          {
              notFriends.push(array[i].name);
          }
        }
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  
  return object;
  
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++) {
        delete object[array[i]];
    }
    
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var toReturn = [];
    for(var k = 0; k < array.length; k++) {
        if(toReturn.indexOf(array[k]) == -1) {
            toReturn.push(array[k]);
        }
    }
    return toReturn;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}