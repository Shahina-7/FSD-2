import http from 'http';

const server = http.createServer((req,res) => {
 if(req.method==='POST' && req.url==='/Students'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Student Created</h1>');
    res.end();
 }
 else if(req.method==='GET' && req.url==='/Students'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>All Students</h1>');
    res.end();
 }
 else if(req.method==='GET' && req.url?.startsWith('/Students')){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Student Details</h1>');
    res.end();
 }
 else if(req.method==='PUT' && req.url?.startsWith('/Students')){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Student Updated</h1>');
    res.end();
 }
 else if(req.method==='DELETE' && req.url?.startsWith('/Students')){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Student Deleted</h1>');
    res.end();
 }
 else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write('<h1>Page Not Found</h1>');
    res.end();
 }
});
server.listen(1000,()=>{
    console.log('Server is running on http://localhost:1000/Students/1');
})