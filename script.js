$('.chatbox').css({
    'position': 'fixed',
    'bottom': '0',
    'right': '30px',
    'width': '300px',
    'height': '400px',
    'background-color': '#fff',
    'font-family': 'Lato, sans-serif',
    '-webkit-transition': 'all 600ms cubic-bezier(0.19, 1, 0.22, 1)',
    'transition': 'all 600ms cubic-bezier(0.19, 1, 0.22, 1)',
    'display': '-webkit-flex',
    'display': 'flex',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
});

$('.chatbox--tray').css({
    'bottom': '-350px'
});

$('.chatbox--closed').css({
    'bottom': '-400px'
});

$('.chatbox .form-control:focus').css({
    'border-color': '#1f2836'
});

$('.chatbox__title,        .chatbox__body').css({
    'border-bottom': 'none'
});

$('.chatbox__title').css({
    'min-height': '50px',
    'padding-right': '10px',
    'background-color': '#1f2836',
    'border-top-left-radius': '4px',
    'border-top-right-radius': '4px',
    'cursor': 'pointer',
    'display': '-webkit-flex',
    'display': 'flex',
    '-webkit-align-items': 'center',
    'align-items': 'center'
});

$('.chatbox__title h5').css({
    'height': '50px',
    'margin': '0 0 0 15px',
    'line-height': '50px',
    'position': 'relative',
    'padding-left': '20px',
    '-webkit-flex-grow': '1',
    'flex-grow': '1'
});

$('.chatbox__title h5 a').css({
    'color': '#fff',
    'max-width': '195px',
    'display': 'inline-block',
    'text-decoration': 'none',
    'white-space': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis'
});

$('.chatbox__title h5:before').css({
    'content': '',
    'display': 'block',
    'position': 'absolute',
    'top': '50%',
    'left': '0',
    'width': '12px',
    'height': '12px',
    'background': '#4CAF50',
    'border-radius': '6px',
    '-webkit-transform': 'translateY(-50%)',
    'transform': 'translateY(-50%)'
});

$('.chatbox__title__tray,        .chatbox__title__close').css({
    'width': '24px',
    'height': '24px',
    'outline': '0',
    'border': 'none',
    'background-color': 'transparent',
    'opacity': '0.5',
    'cursor': 'pointer',
    '-webkit-transition': 'opacity 200ms',
    'transition': 'opacity 200ms'
});

$('.chatbox__title__tray:hover,        .chatbox__title__close:hover').css({
    'opacity': '1'
});

$('.chatbox__title__tray span').css({
    'width': '12px',
    'height': '12px',
    'display': 'inline-block'
});

$('.chatbox__title__close svg').css({
    'vertical-align': 'middle',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.2px'
});

$('.chatbox__body,        .chatbox__credentials').css({
    'padding': '15px',
    'border-top': '0',
    'background-color': '#f5f5f5',
    'border-left': '1px solid #ddd',
    'border-right': '1px solid #ddd',
    '-webkit-flex-grow': '1',
    'flex-grow': '1'
});

$('.chatbox__credentials').css({
    'display': 'none'
});

$('.chatbox__credentials .form-control').css({
    '-webkit-box-shadow': 'none',
    'box-shadow': 'none'
});

$('.chatbox__body').css({
    'overflow-y': 'auto'
});

$('.chatbox__body__message').css({
    'position': 'relative'
});

$('.chatbox__body__message p').css({
    'padding': '15px',
    'border-radius': '4px',
    'font-size': '14px',
    'background-color': '#fff',
    '-webkit-box-shadow': '1px 1px rgba(100, 100, 100, 0.1)',
    'box-shadow': '1px 1px rgba(100, 100, 100, 0.1)'
});

$('.chatbox__body__message img').css({
    'width': '40px',
    'height': '40px',
    'border-radius': '4px',
    'border': '2px solid #fcfcfc',
    'position': 'absolute',
    'top': '15px'
});

$('.chatbox__body__message--left p').css({
    'margin-left': '15px',
    'padding-left': '30px',
    'text-align': 'left'
});

$('.chatbox__body__message--left img').css({
    'left': '-5px'
});

$('.chatbox__body__message--right p').css({
    'margin-right': '15px',
    'padding-right': '30px',
    'text-align': 'right'
});

$('.chatbox__body__message--right img').css({
    'right': '-5px'
});

$('.chatbox__message').css({
    'padding': '15px',
    'min-height': '50px',
    'outline': '0',
    'resize': 'none',
    'border': 'none',
    'font-size': '12px',
    'border': '1px solid #ddd',
    'border-bottom': 'none',
    'background-color': '#fefefe'
});

$('.chatbox--empty').css({
    'height': '262px'
});

$('.chatbox--empty.chatbox--tray').css({
    'bottom': '-212px'
});

$('.chatbox--empty.chatbox--closed').css({
    'bottom': '-262px'
});

$('.chatbox--empty .chatbox__body,        .chatbox--empty .chatbox__message').css({
    'display': 'none'
});

$('.chatbox--empty .chatbox__credentials').css({
    'display': 'block'
});

$('.jua_message').css({
    'word-break': 'break-all'
});