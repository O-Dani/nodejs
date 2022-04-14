var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
 
function templateHTML(title,list,body){ //template이란 재사용할수있는 껍대기
  return`
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <a href="/create">create</a>
            ${body}
          </body>
          </html>
          `;

}

function templateList(filelist){
  var list = '<ul>';
  var i =0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
 
        fs.readdir('./data',function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title,list,`<h2>${title}</h2><p>${description}</p>`);
          response.writeHead(200);
          response.end(template);
        });
 
 
      } else {
        fs.readdir('./data', function(error, filelist){
          var list=templateList(filelist);
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else if(pathname === '/create'){
      fs.readdir('./data',function(error, filelist){
        var title = 'Web-Create';
        var list = templateList(filelist);
        var template = templateHTML(title,list,`
<<<<<<< HEAD
        <form action="http://localhost:3000/create_process" method="post"> <!-- with method 은밀하게 서버로 보냄,main.js가 켜져있어야됨
        post 방법으로 전송된 데이터-->
          <p><input type='text' name="title" placeholder="텍스트"></p> <!--텍스트 입력 -->
          <p>
              <textarea name="description" placeholder="description"></textarea> <!--텍스트 영역 -->
=======
        <form action="http://localhost:3000/process_create" method="post"> <!-- with method 은밀하게 서버로 보냄,main.js가 켜져있어야됨-->
          <p><input type='text' name="title" placeholer="텍스트"></p> <!--텍스트 입력 -->
          <p>
              <textarea></textarea> <!--텍스트 영역 -->
>>>>>>> ceb9c038ddccca99be4d9f31dd964af2e8894c54
          </p>
          <p>
              <input type="submit">
          </p>
<<<<<<< HEAD
        </form>
=======
          </form>
>>>>>>> ceb9c038ddccca99be4d9f31dd964af2e8894c54
        `);
        response.writeHead(200);
        response.end(template);
      });

<<<<<<< HEAD
    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        consel.log(post);

      });

      response.writeHead(200);
      response.end('success');

    }
=======
    } 
>>>>>>> ceb9c038ddccca99be4d9f31dd964af2e8894c54
    else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);