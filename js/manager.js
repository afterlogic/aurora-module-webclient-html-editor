'use strict';

module.exports = function (oAppData) {
	require('modules/%ModuleName%/js/enums.js');
	
	return {
		getHtmlEditorConstructor: function () {
			return require('modules/%ModuleName%/js/views/CHtmlEditorView.js');
		}
	};
};
