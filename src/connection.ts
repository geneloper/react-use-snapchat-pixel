const connectionScript = () => {
  // @ts-ignore
  (function(e: any,t: any,n: any){
    if(e.snaptr) return;
    var a: any = e.snaptr = function() {
        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
    };
    a.queue = [];
    var s = 'script';
    var r = t.createElement(s); 
    r.async = true;
    r.src = n;
    var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
})(window, document, 'https://sc-static.net/scevent.min.js');
};

export default connectionScript;
