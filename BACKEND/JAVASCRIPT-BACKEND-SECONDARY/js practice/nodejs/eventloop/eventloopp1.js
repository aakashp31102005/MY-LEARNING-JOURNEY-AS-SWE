console.log("start")
const fs=require("fs");
const path=require("path")


setTimeout(() => {
    console.log("timer picked")
}, 0);

const file=fs.readFile(path.resolve(__dirname,"hello.txt"),(err,data)=>{
    console.log(data.toString())})

setImmediate(() => {
  console.log('setImmediate callback');
});


const net = require('net');


// prepare a small file to read (synchronous on startup)
const fname = path.join(__dirname, 'el_demo.txt');
fs.writeFileSync(fname, 'hello event loop\n', 'utf8');

// Helper logger with phase tag
function L(s){ console.log(s); }

// --- synchronous start
L('1. start (sync)');

process.nextTick(()=> L('2. nextTick (microtask - process.nextTick)'));
Promise.resolve().then(()=> L('3. promise.then (microtask - microtask queue)'));

setTimeout(()=> L('4. setTimeout (timers phase) - main'), 0);
setImmediate(()=> L('5. setImmediate (check phase) - main'));

fs.readFile(fname, 'utf8', (err, data) => {
  if (err) throw err;
  L('6. fs.readFile callback (poll phase)');

  process.nextTick(()=> L('7. nextTick inside fs callback'));
  Promise.resolve().then(()=> L('8. promise inside fs callback'));

  setTimeout(()=> L('9. setTimeout inside fs callback (timers)') , 0);
  setImmediate(()=> L('10. setImmediate inside fs callback (check)'));

  const start = Date.now();
  const busy = () => {
    while (Date.now() - start < 5) {} // busy for ~5 ms
    L('11. small busy loop finished (runs on main JS thread)');
  };
  busy();
});

const srv = net.createServer(socket => {
  socket.write('hi\n');
  socket.destroy();
});

srv.listen(0, () => {
  const addr = srv.address();
  L(`12. server listening on port ${addr.port} (listen callback)`);

  setImmediate(()=> L('13. setImmediate inside listen callback (check)'));
  setTimeout(()=> L('14. setTimeout inside listen callback (timers)'), 0);

  srv.close(() => {
    L('15. server.close callback (close callbacks phase)');
  });

  const client = net.createConnection(addr.port, '127.0.0.1', () => {
    L('16. client connected (triggers server connection)'); 
    client.on('data', d => {}); // ignore
    client.end();
  });

  client.on('end', ()=> L('17. client connection ended'));
  client.on('error', err => {
    L(`client connection error: ${err.message}`);
  });
});


L('18. end of top-level sync code');

/*
TOP-LEVEL SYNC
  ├─ run sync code (call stack)
  ├─ schedule microtasks (process.nextTick & Promise.then)
  ├─ schedule macrotasks:
  |     - timers (setTimeout)
  |     - I/O (fs.readFile) -> poll phase
  |     - check (setImmediate)
  └─ finish top-level sync

EVENT LOOP PHASES (repeating)
  1) timers (expired setTimeout callbacks)
  2) pending callbacks (system callbacks like some TCP errors)
  3) idle, prepare (internal)
  4) poll (retrieve I/O results -> fs.readFile callbacks run here)
  5) check (setImmediate callbacks)
  6) close callbacks (server/socket close events)
Microtasks (process.nextTick & Promise callbacks) run:
  - Immediately after the current JavaScript stack completes and
  - **before** the event loop proceeds to the next macrotask phase.
**/