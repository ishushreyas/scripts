var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://ishushreyas.github.io/scripts/style.css';
document.body.appendChild(style);
var iframe = document.createElement('iframe');
iframe.frameBorder= 'none';
iframe.height = '80%';
iframe.width = '100%';
iframe.src='https://chat-9a308.web.app?platform='+ parent.document.URL;
var head = document.createElement('h2');
head.innerHTML = 'Comments';
var cont = document.createElement('div');
document.body.appendChild(cont);
cont.setAttribute('class', 'surface-variant cont');
cont.appendChild(head);
cont.appendChild(iframe);

