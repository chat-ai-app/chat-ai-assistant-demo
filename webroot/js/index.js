//UI PART
$(function(){
	
	login_initui();
	
	if( !isInIFrame() ) {
		
	}
	
	$('.close-modal').click(function(){
		
		if(isInIFrame()) {

			var obj = {};
			obj.origin = HTTPS_URL;
			obj.action = 'close-modal';
			window.parent.postMessage(obj, '*');
			
		} else {
			
			router.navigate('');	
		}
		
	});
	
});

function isInIFrame() {
	return window.location.href.indexOf('/iframes/') >= 0;
}

function login_initui() {
	
	var loginForm = $('#login-form');
	
	var loginButton = loginForm.find('#login-button');

	var usernameEl = $('#UserName');
	var passwordEl = $('#Password');
	
	var rolesCheckEnabled = window.ROLES_CHECK_ENABLED == true;
	
	$(usernameEl).keypress(function(e) {
	    if(e.which == 13) {
	    	doLogin();
	    }
	});
	
	$(passwordEl).keypress(function(e) {
		if(e.which == 13) {
			doLogin();
		}
	});
	
	var inputEls = loginForm.find('.modal-active');
	
	var statusEls = loginForm.find('.status');
    
	var loginError = loginForm.find('.login-error');
    
	var loginSuccess = loginForm.find('.login-success');
	
	function doLogin(){
		
		statusEls.empty();
		
		var username = usernameEl.val();
		var password = passwordEl.val();
	
		if(username.length == 0 || password.length == 0) {
			return;
		}
		
		inputEls.attr('disabled', 'disabled');
    
        vitalservice.callFunction(VitalServiceWebsocketImpl.vitalauth_login, {loginType: 'Login', username: username, password: password}, function(success){
		    	
			if(rolesCheckEnabled) {
				
				var loginObject = success.first();
				
				var roleURIs = loginObject.get('roleURIs');
				
				if(roleURIs == null || roleURIs.indexOf('role:ai.haley.role.access.webapp') < 0) {
					
					console.error("Missing role:ai.haley.role.access.webapp");
					
					inputEls.removeAttr('disabled');
					
					loginError.text("This login does not have a webapp role.");
                    
					vitalservice.callFunction(VitalServiceWebsocketImpl.vitalauth_logout, {}, function(logoutSuccess){
						
						console.info("Logout response: ", logoutSuccess);

					}, function(logoutError) {
						
						console.error("Logout error: ", logoutError);
					});
					
					return;	
				}
			}
						
			console.log("Logged in successfully, checking account: ", success);
			
			vitalservice.callFunction('account.get', {}, function(rl){
				
				console.log('Account verified - proceeding');
				
				loginSuccess.text('Logged in successfully');
				
				setTimeout(function(){
					
					var modal = $('#login-modal');
					
					var targetURL = modal.attr('data-target-url');
					
					modal.modal('hide');
					
					passwordEl.val('');
					
					statusEls.empty();
					
                    // refreshLoggedInState();
					
					inputEls.removeAttr('disabled');
					
					//detect if in iframe
					if(isInIFrame()) {
						targetURL = getUrlParameter('targetURL')
						window.top.location.href = targetURL;
					} else {
						window.location.href = targetURL;
					}
					
				}, 1000);
				
			}, function(error){
				
				console.error("Account verification error: ", error);
				
				inputEls.removeAttr('disabled');
				
				loginError.text(error);
				
				vitalservice.callFunction(VitalServiceWebsocketImpl.vitalauth_logout, {}, function(logoutSuccess){
					
					console.info("Logout response: ", logoutSuccess);

				}, function(logoutError) {
					
					console.error("Logout error: ", logoutError);
				});
			});
			
		}, function(error){
			
			inputEls.removeAttr('disabled');
			
			loginError.text(error);
			
			console.error(error);
		});
	};
	
	loginButton.click(doLogin);
	
	$('.logout-button').click(function(){
		
		//logout with jsonp call
		doLogoutIframe();
	});
	
	$('.signup-button').click(function(){
		
		// router.navigate('/signup');
		
         window.location.href = '/signup.html'
        
		return false;
	})
	
	$('.join-waiting-list-button').click(function(){
		
		//router.navigate('/requestinvitationcode');
		
        window.location.href = '/signup.html'
        
		return false;
	});
	
	$('.haley-button').click(function(){
		
		window.location.href = WEBAPP_URL;
		
		return false;
	});
	
	$('.main-login-link , .account-login-link').click(function(){
		
		if(typeof(WEBAPP_URL) === 'undefined') {
			console.error("WEBAPP_URL is config param missing");
			return false;
		}
		
		var isMainLogin = $(this).hasClass('main-login-link');
		
		var dataTargetURL = isMainLogin ? ( WEBAPP_URL ) : (WEBAPP_URL + 'account/');
		
		if(isInIFrame()) {
			
			var cl = vitalservice.getCurrentLogin(); 
			 
			if( cl != null ) {
	
				//proceed with event
				window.location.href = dataTargetURL;
				
				return false;
			}
		}
		
		$('.modal').modal('hide');
		
		var modal = $('#login-modal');
		
		modal.find('iframe').removeAttr('src'); 
		
		modal.find('iframe').attr('src', HTTPS_URL + 'iframes/login.html?targetURL=' +  encodeURIComponent(dataTargetURL));
		
		modal.attr('data-target-url', dataTargetURL);
		
		modal.modal({});
		
		return false;	
	});	
}

