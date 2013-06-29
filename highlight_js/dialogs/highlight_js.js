CKEDITOR.dialog.add( 'highlight_js', function( editor ) {
    return {
        title: "test",
        minWidth: 800,
        minHeight: 500,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'select',
                        id: 'code_lan',
                        label: 'Select code language',
                        items: [
                                [ 'Auto' ],
                                [ 'Bash' ],
                                [ 'Diff' ],
                                [ 'JSON' ],
                                [ 'C#' ],
                                [ 'HTML' ],
                                [ 'JAVA' ],
                                [ 'Python' ],
                                [ 'C++' ],
                                [ 'HTTP' ],
                                [ 'JavaScript' ],
                                [ 'Ruby' ],
                                [ 'CSS' ],
                                [ 'PHP' ],
                                [ 'ini' ],
                                [ 'SQL' ],
                                [ 'Perl' ]
                              ],
                        'default': 'Auto',
                        onChange: function( api ) {
                        // this = CKEDITOR.ui.dialog.select
                         alert( 'Current value: ' + this.getValue() );
                        }
                    },
                    {
                        type: 'textarea',
                        id: 'pre_code',
                        rows: 22,
                        style: "width: 100%"
                        /*setup: function(data) {
                            if (data.code)
                                this.setValue(data.code);
                        },
                        commit: function(data) {
                            data.code = this.getValue();
                        }*/
                    }
                ]
            }

        ],
        onOk: function() {
            var dialog = this;

            var pre = editor.document.createElement( 'pre' );
            var code = editor.document.createElement( 'code' );
            var code_class = dialog.getValueOf( 'tab-basic', 'code_lan' ).toLowerCase();

            if(code_class !== "auto"){
                code.setAttribute( 'class', code_class );
            }

            code.setText( dialog.getValueOf( 'tab-basic', 'pre_code' ) );

            pre.append(code);

            editor.insertElement(pre);
        }
    };
});
