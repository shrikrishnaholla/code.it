$(function() {
      // Creating the console.
      var header = 'This is the console.' + 
      ' Switch Languages for the relevant interpreters\n';
      window.promptsym = '';
      window.jqconsole = $('#console').jqconsole(header, promptsym);
      
      // Script to enable ace editor and bind sharejs to it
      window.editor = ace.edit("editor");
        editor.setTheme("ace/theme/textmate");
        window.hashcode = window.location.href.split('#')[1];

        sharejs.open(window.hashcode,
         'text', '/channel', 
         function (error, doc) {
            doc.attach_ace(editor);
        });

      /* Giving meaning to everything written above */
      window.jsrepl = new JSREPL({  
          input: inputCallback,  
          output: outputCallback,  
          result: resultCallback,  
          error: errorCallback,  
          progress: progressCallback,  
          timeout: {  
            time: 30000,  
            callback: timeoutCallback  
          }  
        }); 

      function Evaluate (command) {
        if (command) {
          jsrepl["eval"](command);
        } else {
          StartPrompt();
        }
      }

      function StartPrompt() {
        jqconsole.Prompt(true, Evaluate, jsrepl.checkLineEnd, true); 
      }

      function errorCallback(error) {
        if (typeof error === 'object') {
          error = error.message;
        }
        if (error[-1] !== '\n') {
          error = error + '\n';
        }
        jqconsole.Write(String(error), 'error');
        StartPrompt();
      }

      function inputCallback (callback) {
        jqconsole.Input(function(result) {
          try {
            callback(result);
          }
          catch(error) {
            jsrepl.errorCallback(error)
          }
        }); 
      }

      function outputCallback (output, cls) {
        if (output) {
          jqconsole.Write(output, cls);
        }
      }

      function resultCallback(result) {
        if (result) {
          if (result[-1] !== '\n') {
            result = result + '\n';
          }
          jqconsole.Write(promptsym + result, 'result');
        }
        StartPrompt(); // TODO
      }

      function timeoutCallback() {
        var a;
        if (a = confirm('The program is taking too long to finish. Do you want to stop it?')) {
          jqconsole.AbortPrompt();
          StartPrompt();
        }
        return a;
      }

      function progressCallback (percentage) {
        // TODO
      }

        // Abort prompt on Ctrl+Z.
        jqconsole.RegisterShortcut('Z', function() {
          jqconsole.AbortPrompt();
          StartPrompt();
        });
        
        // Move to line start Ctrl+A.
        jqconsole.RegisterShortcut('A', function() {
          jqconsole.MoveToStart();
          StartPrompt();
        });
        
        // Move to line end Ctrl+E.
        jqconsole.RegisterShortcut('E', function() {
          jqconsole.MoveToEnd();
          StartPrompt();
        });

        jqconsole.RegisterShortcut('R', function() {
          Evaluate(editor.getValue());
        });
        
        jqconsole.RegisterMatching('{', '}', 'brace');
        jqconsole.RegisterMatching('(', ')', 'paran');
        jqconsole.RegisterMatching('[', ']', 'bracket');

        // Initiate the first prompt.
        // jsrepl.loadLanguage('python', function () {  
        //   StartPrompt();
        // });

        $('.python').click(function() {
          jqconsole.Reset();
          $('#console').html('');
          var pyheader = header + 'Python 2.7.2 (default, Jul 20 2011, 02:32:18)\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Empythoned)] on linux2\n'
          promptsym = '>>> '
          jqconsole = $('#console').jqconsole(pyheader, promptsym);
          editor.getSession().setMode("ace/mode/python");
          jsrepl.loadLanguage('python', function () {  
            StartPrompt();
          });
        });
        $('.ruby').click(function() {
          jqconsole.Reset();
          $('#console').html('');
          var rubheader = header + 'Ruby 1.8.7 (2008-05-31 patchlevel 0) [x86-linux]\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Emscripted-Ruby)]\n'
          promptsym = '=> '
          jqconsole = $('#console').jqconsole(rubheader, promptsym);
          editor.getSession().setMode("ace/mode/ruby");
          jsrepl.loadLanguage('ruby', function () {  
            StartPrompt();
          });
        });
        $('.javascript').click(function() {
          jqconsole.Reset();
          $('#console').html('');
          var jsheader = header + "Native " + (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? navigator.userAgent.match(/Android/) ? 'Android' : navigator.userAgent.match(/Chrome/) ? 'Chrome' : 'WebKit' : $.browser.opera ? 'Opera' : $.browser.msie ? 'Internet Explorer' : $.browser.mozilla ? 'Mozilla Firefox' : 'Browser' : 'Unknown') + " JavaScript.\nCopyright (c) 2013 " + ((typeof navigator !== "undefined" && navigator !== null ? (_ref = navigator.vendor) != null ? _ref.replace(/\.$/, '') : void 0 : void 0) || (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? 'Apple Inc' : $.browser.opera ? 'Opera Software ASA' : $.browser.msie ? 'Microsoft' : $.browser.mozilla ? 'Mozilla Foundation' : 'Browser Vendor' : ''))+'\n'
          promptsym = '==> '
          jqconsole = $('#console').jqconsole(jsheader, promptsym);
          editor.getSession().setMode("ace/mode/javascript");
          jsrepl.loadLanguage('javascript', function () {  
            StartPrompt();
          });
        });

        $('.run').click(function() {
          Evaluate(editor.getValue());
        });

        $('.paste').click(function() {
          var lang = (editor.getSession().getMode().$id).split('/')[2];
              var ext = ''
              if(lang == 'python') {
                ext = '.py'
              } else if(lang == 'ruby') {
                ext = '.rb'
              } else {
                ext = '.js'
              }
            var filename = "ColabInterview" + window.location.href.split('#')[1] + ext;

          var dataobj = '{"description":"' + "Created using ColabInterview" + '",' +
              '"public": true,'+
              '"files": {' +
                '"'+filename + '" : {'+
                  '"content": "' + editor.getValue()+
                '"}'+
              '}}';
              
          $.ajax({
            url :'/paste',
            type: "POST",
            data: {
              "description": "the description for this gist",
              "public": true,
              "files": {
                "file1.txt": {
                  "content": "String file contents"
                }
              }
            },
            dataType : 'text',
            success : function(obj) {
              console.log(obj)
              window.open(obj.url, '_blank');
            },
            error   : function( jqXHR, textStatus, errorThrown) {
              // TODO
              console.log(textStatus+'\n'+errorThrown);
            },
            timeout : function() {
              // TODO
              console.log('timeout!!')
            }
          })
        });
        
      });