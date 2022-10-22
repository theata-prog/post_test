
let test1 = "content1"
let test2 = "content2"
let test3 = "content3"
let targetURL = "https://chico-shikaku.com"
let json_asocc =
 
    {
        'test1'     : test1,
        'test2'     : test2,
        'test3'     : test3
    };
 
let json_text = JSON.stringify(json_asocc);
let testRequest = new XMLHttpRequest();
testRequest.onload = function (){ 
    let data = this.response;
    console.log(data)
}
testRequest.onerror = function (){
    console.log('Could not post');
}
testRequest.open('POST', targetURL);
testRequest.setRequestHeader('content-type', 'application/json');
testRequest.send(json_text);