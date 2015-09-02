Ext.onReady(function(){
    var win;
    var button = Ext.get('show-btn');

    button.on('click', function(){
        // create the window on the first click and reuse on subsequent clicks
        if(!win){
            win = new Ext.Window({
                applyTo:'hello-win',
                layout:'fit',
                width:500,
                height:300,
                closeAction:'hide',
                plain: true,

                items: new Ext.TabPanel({
                    applyTo: 'hello-tabs',                    
                    activeTab:0,
                    deferredRender:false,
                    border:false,
					items:[
						{
							title		: 'Tab A',
							layout		: 'fit'
						},
						{
							title		: 'Tab B',
							layout		: 'fit'
						}
					]
                }),

                buttons: [
					{
						text:'Submit',
						disabled:true
					},{
						text: 'Close',
						handler: function(){
							win.hide();
						}
					}
				]
            });
        }
        win.show(this);
    });
});