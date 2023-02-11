export function getCommentBox(boxId){
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://ishushreyas.github.io/scripts/style.css';
document.body.appendChild(style);
var iframe = document.createElement('iframe');
iframe.frameBorder= 'none';
iframe.height = '80%';
iframe.width = '100%';
iframe.src='https://chat-9a308.web.app?platform='+ parent.document.URL;
var cont = document.createElement('div');
document.getElementById(boxId).appendChild(cont);
cont.setAttribute('class', 'surface-variant cont');
cont.appendChild(iframe);
}
