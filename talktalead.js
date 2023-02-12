var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://ishushreyas.github.io/scripts/style.css';
document.body.appendChild(style);
var iframe = document.createElement('iframe');
iframe.frameBorder= 'none';
iframe.height = '60%';
iframe.width = '100%';
iframe.src='https://chat-9a308.web.app?platform='+ parent.document.URL;
var head = document.createElement('h2');
head.innerHTML = 'Comments';
head.setAttribute('class', 'secondary-text');
var cont = document.createElement('div');
document.body.appendChild(cont);
cont.setAttribute('class', 'background');
cont.style = 'margin: 12px; padding: 12px; border-radius:22px; text-align: center; box-shadow:3px 3px 9px rgb(0,0,0,0.3); max-height: 70%; overflow: scroll;';
cont.appendChild(head);
cont.appendChild(iframe);

