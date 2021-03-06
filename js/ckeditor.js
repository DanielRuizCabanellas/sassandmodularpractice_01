import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js';
import '../node_modules/@ckeditor/ckeditor5-build-classic/build/translations/es.js';

export let renderCkeditor = () => {

    window.ckeditors = [];

    document.querySelectorAll('.ckeditors').forEach(ckeditor => {

        ClassicEditor.create(ckeditor, {
            
            toolbar: {
                items: [
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'blockQuote',
                    'undo',
                    'redo'
                ]
            },
            language: 'es',
            licenseKey: '',
        })
        .then( classicEditor => {
            ckeditors[ckeditor.name] = classicEditor;
        })
        .catch( error => {
            console.error(error);
        } );
    });
}