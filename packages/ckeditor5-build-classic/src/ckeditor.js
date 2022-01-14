/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
//import AutoSave from '@ckeditor/ckeditor5-autosave/src/autosave';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';

import LocalFile from '../plugins/localfile/src/localfile';
import AutoSave from '../plugins/localfile/src/autosave';
import '../theme/custom.css';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	Table,
	TableToolbar,
	AutoSave,
	CodeBlock,
	Font,
	Alignment,
	ListStyle,

	LocalFile
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'outdent',
			'indent',
			'alignment',
			'numberedList',
			'bulletedList',
			'|',
			'codeblock',
			'localFile',
			'insertTable',
			'mediaEmbed',
			'link',
			'|',
			'blockQuote',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	mediaEmbed: {
		previewsInData: true,
		extraProviders: [
			{
				 name: 'extraProvider',
				 url: /^(\.\.\/[\s\S]+)/,// /^(file:[\s\S]+)/,
				 html: match => {
					const fileName = match[0];
					return (
						'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
						'<video style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" controls><source src="'+ fileName + '"></video>' +
						'</div>'
					);
				}
			}
		]
	},
	codeBlock: {
		languages: [
			{ language: 'auto', label: '自动检测语言', class: '' }, // The default language.
			{ language: 'plaintext', label: 'Plain text' },
			{ language: 'bash', label: 'Bash' },
			{ language: 'c', label: 'C' },
			{ language: 'cs', label: 'C#' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'diff', label: 'Diff' },
			{ language: 'erlang', label: 'Erlang' },
			{ language: 'go', label: 'Go' },
			{ language: 'xml', label: 'HTML/XML' },
			{ language: 'json', label: 'JSON' },
			{ language: 'java', label: 'Java' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'kotlin', label: 'Kotlin' },
			{ language: 'less', label: 'Less' },
			{ language: 'lua', label: 'Lua' },
			{ language: 'makefile', label: 'Makefile' },
			{ language: 'markdown', label: 'Markdown' },
			{ language: 'objectivec', label: 'Objective-C' },
			{ language: 'php', label: 'PHP' },
			{ language: 'perl', label: 'Perl' },
			{ language: 'python', label: 'Python' },
			{ language: 'ruby', label: 'Ruby' },
			{ language: 'rust', label: 'Rust' },
			{ language: 'scss', label: 'SCSS' },
			{ language: 'sql', label: 'SQL' },
			{ language: 'shell', label: 'Shell Session' },
			{ language: 'swift', label: 'Swift' },
			{ language: 'typescript', label: 'TypeScript' },
			{ language: 'vbnet', label: 'Visual Basic .NET' },
			{ language: 'yaml', label: 'YAML' }
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn'
};
