
var LANGUAGES = {
	

	javascript	: {
		title		: 'JavaScript',
		name		: 'javascript',
		tagline		: 'The de facto language of the Web.',
		promptsym 	: 'js> ',
		about_link	: 'http://en.wikipedia.org/wiki/Javascript',
      	engine_link	: 'http://en.wikipedia.org/wiki/JavaScript_engine#JavaScript_engines',
		acemode		: 'javascript',
		header		: "Native " + (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? navigator.userAgent.match(/Android/) ? 'Android' : navigator.userAgent.match(/Chrome/) ? 'Chrome' : 'WebKit' : $.browser.opera ? 'Opera' : $.browser.msie ? 'Internet Explorer' : $.browser.mozilla ? 'Mozilla Firefox' : 'Browser' : 'Unknown') + " JavaScript.\nCopyright (c) 2013 " + ((typeof navigator !== "undefined" && navigator !== null ? (_ref = navigator.vendor) != null ? _ref.replace(/\.$/, '') : void 0 : void 0) || (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? 'Apple Inc' : $.browser.opera ? 'Opera Software ASA' : $.browser.msie ? 'Microsoft' : $.browser.mozilla ? 'Mozilla Foundation' : 'Browser Vendor' : ''))+'\n'
	},

	

	python		: {
		title		: 'Python',
		name		: 'python',
		tagline		: 'A dynamic language emphasizing readability.',
		promptsym 	: '>>> ',
		about_link	: 'http://en.wikipedia.org/wiki/Python_(programming_language)',
      	engine_link	: 'https://github.com/replit/empythoned',
		acemode		: 'python',
		header		: 'Python 2.7.2 (default, Jul 20 2011, 02:32:18)\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Empythoned)] on linux2\n'
	},

	
	ruby		: {
		title		: 'Ruby',
		name		: 'ruby',
		tagline		: 'A natural dynamic object-oriented language.',
		promptsym 	: '=> ',
		about_link	: 'http://en.wikipedia.org/wiki/Ruby_(programming_language)',
      	engine_link	: 'https://github.com/replit/emscripted-ruby',
		acemode		: 'ruby',
		header		: 'Ruby 1.8.7 (2008-05-31 patchlevel 0) [x86-linux]\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Emscripted-Ruby)]\n'
	},



	bloop		: {
		title		: 'Bloop',
		name		: 'bloop',
		tagline		: 'Nothing but bounded loops.',
		promptsym 	: 'bloop> ',
		about_link	: 'http://en.wikipedia.org/wiki/BlooP_and_FlooP',
      	engine_link	: 'https://github.com/replit/jsrepl/blob/master/extern/bloop/bloop.js',
		acemode		: 'text',
		header		: 'BlooPjs\nCopyright (c) 2005 Tim Cameron Ryan\nBased on Perl code by John Cowan, 1994\n'
	},

	brainfuck	: {
		title		: 'Brainfuck',
		name		: 'brainfuck',
		tagline		: 'A pure Turing machine controller.',
		promptsym 	: 'bf> ',
		about_link	: 'http://en.wikipedia.org/wiki/Brainfuck',
      	engine_link	: 'https://github.com/replit/bfjs',
		acemode		: 'text',
		header		: 'Brainfuck, bfjs\nCopyright (c) 2011 Amjad Masad\n'
	},

	// coffeescript: { Remains unsupported by jsREPL at the time
	// 	title		: 'CoffeeScript',
	// 	name		: 'coffee-script',
	// 	tagline		: 'Unfancy JavaScript.',
	// 	promptsym 	: 'coffee> ',
	// 	about_link	: 'http://jashkenas.github.com/coffee-script/',
 //     engine_link	: 'https://github.com/jashkenas/coffee-script/',
	// 	acemode		: 'coffee',
	// 	header		: 'CoffeeScript v1.3.1\nCopyright (c) 2011, Jeremy Ashkenas\n'
	// },

	emoticon	: {
		title		: 'Emoticon',
		name		: 'emoticon',
		tagline		: 'Programming with an extra dose of smile.',
		promptsym 	: ':-> ',
		about_link	: 'http://www.teuton.org/~stranger/code/emoticon/manual.php',
      	engine_link	: 'https://github.com/replit/emoticoffee',
		acemode		: 'text',
		header		: 'Emoticon v1.5 (emoticoffee)\nCopyright (c) 2011 Amjad Masad\n'
	},

	forth		: {
		title		: 'Forth',
		name		: 'forth',
		tagline		: 'An interactive stack-oriented language.',
		promptsym 	: '4th> ',
		about_link	: 'http://en.wikipedia.org/wiki/Forth_(programming_language)',
      	engine_link	: 'https://github.com/replit/jsrepl/blob/master/extern/jsforth/jsforth.js',
		acemode		: 'forth',
		header		: 'JS-Forth 0.5200804171342\nhttp://www.forthfreak.net/jsforth.html\nThis program is published under the GPL.\n'
	},

	kaffeine	: {
		title		: 'Kaffeine',
		name		: 'kaffeine',
		tagline		: 'Extended JavaScript for pros.',
		promptsym 	: 'kf> ',
		about_link	: 'http://weepy.github.com/kaffeine/',
      	engine_link	: 'https://github.com/weepy/kaffeine',
		acemode		: 'text',
		header		: '| |/ /__ _ / _|/ _|___(_)_ _  ___\n| \' </ _` |  _|  _/ -_) | \' \\/ -_)\n|_|\\_\\__,_|_| |_| \\___|_|_||_\\___|\nVersion 0.0.4, Copyright (c) 2010 Jonah Fox\n'
	},

	lolcode		: {
		title		: 'LOLcode',
		name		: 'lolcode',
		tagline		: 'The basic language of lolcats.',
		promptsym 	: 'lol> ',
		about_link	: 'http://lolcode.com/specs/1.2',
      	engine_link	: 'https://github.com/replit/lol-coffee',
		acemode		: 'text',
		header		: 'LOLCODE v1.2 (lol-coffee)\nCopyright (c) 2011 Max Shawabkeh\n'
	},

	lua			: {
		title		: 'Lua',
		name		: 'lua',
		tagline		: 'A lightweight multi-paradigm scripting language.',
		promptsym 	: 'lua> ',
		about_link	: 'http://en.wikipedia.org/wiki/Lua_(programming_language)',
      	engine_link	: 'https://github.com/replit/jsrepl/tree/master/extern/lua',
		acemode		: 'lua',
		header		: 'Lua 5.1  Copyright (C) 1994-2006 Lua.org, PUC-Rio\n[GCC 4.2.1 (LLVM, Emscripten 1.5)] on linux2\n'
	},

	move		: {
		title		: 'Move',
		name		: 'move',
		tagline		: 'The easy way to program the web.',
		promptsym 	: 'mov> ',
		about_link	: 'http://movelang.org/',
      	engine_link	: 'https://github.com/rsms/move',
		acemode		: 'text',
		header		: 'Move v0.4.3\nCopyright (c) 2011 Rasmus Andersson\n'
	},

	qbasic		: {
		title		: 'QBasic',
		name		: 'qbasic',
		tagline		: 'Structured programming for beginners.',
		promptsym 	: 'QB> ',
		about_link	: 'http://en.wikipedia.org/wiki/QBasic',
      	engine_link	: 'https://github.com/replit/jsrepl/tree/master/extern/qb.js',
		acemode		: 'text',
		header		: 'QBasic (qb.js)\nCopyright (c) 2010 Steve Hanov\n'
	},

	roy			: {
		title		: 'Roy',
		name		: 'roy',
		tagline		: 'Small functional language that compiles to JavaScript.',
		promptsym 	: 'roy> ',
		about_link	: 'http://roy.brianmckenna.org/',
      	engine_link	: 'https://github.com/pufuwozu/roy',
		acemode		: 'text',
		header		: 'Roy 0.1.3\nCopyright (C) 2011 Brian McKenna\n'
	},

		scheme		: {
		title		: 'Scheme',
		name		: 'scheme',
		tagline		: 'An elegant dynamic dialect of Lisp.',
		promptsym 	: 'scheme> ',
		about_link	: 'http://en.wikipedia.org/wiki/Scheme_(programming_language)',
      	engine_link	: 'https://github.com/yhara/biwascheme',
		mode		: 'scheme',
		header		: 'BiwaScheme Interpreter version 0.5.7\nCopyright (C) 2007-2010 Yutaka HARA and the BiwaScheme team\n'
	},

	traceur		: {
		title		: 'Traceur',
		name		: 'traceur',
		tagline		: 'The JavaScript of tomorrow.',
		promptsym 	: 'tc> ',
		about_link	: 'http://wiki.ecmascript.org/doku.php?id=harmony:harmony',
      	engine_link	: 'http://code.google.com/p/traceur-compiler/',
		acemode		: 'text',
		header		: 'Traceur Compiler v0.10\nCopyright (c) 2011 Google Inc.\n'
	},

	unlambda	: {
		title		: 'Unlambda',
		name		: 'unlambda',
		tagline		: 'Functional purity given form.',
		promptsym 	: 'unλ> ',
		about_link	: 'http://en.wikipedia.org/wiki/Unlambda',
      	engine_link	: 'https://github.com/replit/unlambda-coffee',
		acemode		: 'text',
		header		: 'Unlambda v2.0 (unlambda-coffee)\nCopyright (c) 2011 Max Shawabkeh\n'
	}


};

/* Creation of DOM elements */
var options = "";
$.each(LANGUAGES, function(key, value) {
	
	options += "<li><a href='#' class='" + value.name + "'><span>" + value.title + "</span></a></li>\n";
	
});

$('#language_menu').html(options);
