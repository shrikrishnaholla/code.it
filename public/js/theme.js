var DARK_CONSOLE = {
	console 			: {
		'background-color'	: 'black',
		'color'				: '#0d0',
		'border-top'		: '1px solid white'
	},
	jqconsole_cursor	: {
    	'background-color'	: '#999'
    },
    jqconsole_blurred__jqconsole_cursor	: {
    	'background-color'	: '#666'
  	},
  	jqconsole_prompt	: {
		'color': '#0d0'
	},
	jqconsole_old_prompt : {
		'color': '#0b0'
	},
	jqconsole_input		: {
		'color': '#dd0'
	},
	jqconsole_old_input : {
		'color': '#bb0'
	}
}

var BRIGHT_CONSOLE = {
	console 			: {
		'background-color'	: 'ghostwhite',
		'color'				: 'black',
		'border-top'		: '1px solid black'
	},
	jqconsole_cursor	: {
    	'background-color'	: '#080808'
    },
    jqconsole_blurred__jqconsole_cursor	: {
    	'background-color'	: 'darkgray'
  	},
  	jqconsole_prompt	: {
		'color': '#080808'
	},
	jqconsole_old_prompt : {
		'color': 'darkgray'
	},
	jqconsole_input		: {
		'color': '#080808'
	},
	jqconsole_old_input : {
		'color': 'darkgray'
	}
}

var BLUE_CONSOLE = {
	console 			: {
		'background-color'	: 'midnightblue',
		'color'				: '#fff',
		'border-top'		: '1px solid white'
	},
	jqconsole_cursor	: {
    	'background-color'	: '#ddd'
    },
    jqconsole_blurred__jqconsole_cursor	: {
    	'background-color'	: '#dd0'
  	},
  	jqconsole_prompt	: {
		'color': '#ddd'
	},
	jqconsole_old_prompt : {
		'color': '#dd0'
	},
	jqconsole_input		: {
		'color': '#ghostwhite'
	},
	jqconsole_old_input : {
		'color': 'azure'
	}
}

var TEAL_CONSOLE = {
	console 			: {
		'background-color'	: 'teal',
		'color'				: '#ddd',
		'border-top'		: '1px solid white'
	},
	jqconsole_cursor	: {
    	'background-color'	: '#fff'
    },
    jqconsole_blurred__jqconsole_cursor	: {
    	'background-color'	: '#c0c0c0'
  	},
  	jqconsole_prompt	: {
		'color': '#fff'
	},
	jqconsole_old_prompt : {
		'color': '#c0c0c0'
	},
	jqconsole_input		: {
		'color': '#fff'
	},
	jqconsole_old_input : {
		'color': '#c0c0c0'
	}
}

var CREAM_CONSOLE = {
	console 			: {
		'background-color'	: 'cornsilk',
		'color'				: '#000',
		'border-top'		: '1px solid black'
	},
	jqconsole_cursor	: {
    	'background-color'	: '#282828'
    },
    jqconsole_blurred__jqconsole_cursor	: {
    	'background-color'	: '#484848'
  	},
  	jqconsole_prompt	: {
		'color': '#282828'
	},
	jqconsole_old_prompt : {
		'color': '#484848'
	},
	jqconsole_input		: {
		'color': '#282828'
	},
	jqconsole_old_input : {
		'color': '#484848'
	}
}


var EDITOR_THEMES = {
	'ambiance'					: {
		name	: 'Ambiance',
		theme 	: DARK_CONSOLE
	},

	'chaos'						: {
		name	: 'Chaos', 
		theme 	: DARK_CONSOLE
	},

	'chrome'					: {
		name	: 'Chrome', 
		theme 	: BRIGHT_CONSOLE
	},

	'clouds'					: {
		name	: 'Clouds', 
		theme 	: BRIGHT_CONSOLE
	},

	'clouds_midnight'			: {
		name	: 'Clouds at Midnight',
		theme 	: DARK_CONSOLE
	},

	'cobalt'					: {
		name	: 'Cobalt', 
		theme 	: BLUE_CONSOLE
	},

	'crimson_editor'			: {
		name	: 'Crimson Editor', 
		theme 	: BRIGHT_CONSOLE
	},

	'dawn'						: {
		name	: 'Dawn', 
		theme 	: BRIGHT_CONSOLE
	},

	'dreamweaver'				: {
		name	: 'Dreamweaver', 
		theme 	: BRIGHT_CONSOLE
	},

	'eclipse'					: {
		name	: 'Eclipse',
		theme 	: BRIGHT_CONSOLE
	},

	'github'					: {
		name 	: 'Github', 
		theme 	: BRIGHT_CONSOLE
	},

	'idle_fingers'				: {
		name	: 'Idle Fingers', 
		theme 	: DARK_CONSOLE
	},

	'kr'						: {
		name	: 'Kr', 
		theme 	: DARK_CONSOLE
	},

	'merbivore'					: {
		name 	: 'Merbivore', 
		theme 	: DARK_CONSOLE
	},

	'merbivore_soft'			: {
		name 	: 'Soft Merbivore',
		theme 	: DARK_CONSOLE
	},

	'mono_industrial'			: {
		name 	: 'Industrial Mono', 
		theme 	: DARK_CONSOLE
	},

	'monokai'					: {
		name 	: 'Monokai', 
		theme 	: DARK_CONSOLE
	},

	'pastel_on_dark'			: {
		name 	: 'Pastel On Dark',
		theme 	: DARK_CONSOLE
	},

	'solarized_dark'			: {
		name 	: 'Dark Solarized', 
		theme 	: TEAL_CONSOLE
	},

	'solarized_light'			: {
		name 	: 'Light Solarized',
		theme 	: CREAM_CONSOLE
	},

	'terminal'					: {
		name 	: 'Terminal',
		theme 	: DARK_CONSOLE
	},

	'textmate'					: {
		name 	: 'Textmate',
		theme 	: BRIGHT_CONSOLE
	},

	'tomorrow'					: {
		name 	: 'Tomorrow',
		theme 	: BRIGHT_CONSOLE
	},

	'tomorrow_night'			: {
		name 	: 'Tomorrow Night',
		theme 	: DARK_CONSOLE
	},

	'tomorrow_night_blue'		: {
		name 	: 'Tomorrow Blue Night',
		theme 	: BLUE_CONSOLE
	},

	'tomorrow_night_bright'		: {
		name 	: 'Tomorrow Bright Night',
		theme 	: DARK_CONSOLE
	},

	'tomorrow_night_eighties'	: {
		name 	: "Tomorrow Eighties' Night",
		theme 	: DARK_CONSOLE
	},

	'twilight'					: { 
		name 	: 'Twilight',
		theme 	: DARK_CONSOLE
	},

	'vibrant_ink'				: {
		name 	: 'Vibrant Ink',
		theme 	: DARK_CONSOLE
	},

	'xcode'						: {
		name 	: 'xCode',
		theme 	: BRIGHT_CONSOLE
	}
};

$(function() {
	$('body').css({'height': $(document).height()});

	/* Create Elements in DOM */
	var options = "";
	$.each(EDITOR_THEMES, function(key, value) {
		if (key === 'xcode') {
			options += "<li class='last'><a href='#' class='" + key + "'><span>" + value.name + "</span></a></li>\n";
		}
		else {
			options += "<li><a href='#' class='" + key + "'><span>" + value.name + "</span></a></li>\n";
		}

		$('.theme').html(options);
		$('.theme').css({'max-height': $(window).height() - 100, 'overflow':'auto'});
	});

	/* Register Event Handlers for newly created elements */
	$.each(EDITOR_THEMES, function(key, value) {
		$('.'+key).click(function() {
			editor.setTheme('ace/theme/'+key);
			$('#console').css(value.theme.console);
			$('.jqconsole-cursor').css(value.theme.jqconsole_cursor);
			$('.jqconsole-blurred .jqconsole-cursor').css(value.theme.jqconsole_blurred__jqconsole_cursor);
			$('.jqconsole-prompt').css(value.theme.jqconsole_prompt);
			$('.jqconsole-old-prompt').css(value.theme.jqconsole_old_prompt);
			$('.jqconsole-input').css(value.theme.jqconsole_input);
			$('.jqconsole-old-input').css(value.theme.jqconsole_old_input);
		});
	});
});