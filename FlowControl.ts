let myDictionary = {a:"value1", b:"value2",c:"value3"};

for(var key in myDictionary)
{
    console.log(key + "=" + myDictionary[key]);
}