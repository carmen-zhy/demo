const Event = require('events').EventEmitter;

let ev = new Event();

//ev监听   解除耦合
ev.on('blue', (a,b,c,d)=>{
  console.log('接收到1个事件：', a, b, c, d);
});

ev.on('blue', (a,b,c,d)=>{
  console.log('接收到2个事件：', a, b, c, d);
});

//ev触发
ev.emit('blue', 12,5,8,99);
