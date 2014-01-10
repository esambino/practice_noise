var fnames = new Array();var ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';var err_style = '';
jQuery(document).ready( function(jQuery) {  
	
	
    jQuery('#mc_embed_signup .txt').focus(function(){  
        element = jQuery(this);
        if(element.attr('def') == element.val()){
            element.val('');
            return true;
        }
    }); 

    jQuery('#mc_embed_signup .txt').blur(function(){
        element = jQuery(this);
        if( '' == element.val()){
            element.val(element.attr('def'));
            return true
        }
    });

	
    var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
    var mce_validator = jQuery("#mc-embedded-subscribe-form").validate(options);
    options = { url: 'http://noiseinternational.us2.list-manage1.com/subscribe/post-json?u=0f1a343ad74c08038e638fc75&id=83635b5bc7&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
        beforeSubmit: function(){
            jQuery('#mce_tmp_error_msg').remove();
            jQuery('.datefield','#mc_embed_signup').each(
                function(){
                    var txt = 'filled';
                    var fields = new Array();
                    var i = 0;
                    jQuery(':text', this).each(
                        function(){
                            fields[i] = this;
                            i++;
                        });
                    jQuery(':hidden', this).each(
                        function(){
                            if ( fields[0].value=='MM' && fields[1].value=='DD' && fields[2].value=='YYYY' ){
                                this.value = '';
                            } else if ( fields[0].value=='' && fields[1].value=='' && fields[2].value=='' ){
                                this.value = '';
                            } else {
                                this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
                            }
                        });
                });
            return mce_validator.form();
        }, 
        success: mce_success_cb
    };
    jQuery('#mc-embedded-subscribe-form').ajaxForm(options);

});
function mce_success_cb(resp){
    jQuery('#mce-success-response').hide();
    jQuery('#mce-error-response').hide();      
    $('#mc_embed_signup').animate({
        height: '0px'
    }, 500, function(){ $('#mc_embed_signup').hide(); });
    jQuery('#subscribeBtn').removeClass('active');

    if (resp.result=="success"){
        jQuery('#mc-embedded-subscribe-form').each(function(){
            this.reset();
        });
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ',2);
            if (parts[1]==undefined){
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]){
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e){
            index = -1;
            msg = resp.msg;
        }
        try{
            if (index== -1){                   
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<div id="'+err_id+'" style="'+err_style+'"> '+msg+'</div>';

                var input_id = '#mc_embed_signup';
                var f = jQuery(input_id);
                if (ftypes[index]=='address'){
                    input_id = '#mce-'+fnames[index]+'-addr1';
                    f = jQuery(input_id).parent().parent().get(0);
                } else if (ftypes[index]=='date'){
                    input_id = '#mce-'+fnames[index]+'-month';
                    f = jQuery(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-'+fnames[index];
                    f = jQuery().parent(input_id).get(0);
                }
                if (f){
                    jQuery(f).append(html);
                    jQuery(input_id).focus();
                } else {                                              
                }
            }
        } catch(e){                    
        }
    }
}