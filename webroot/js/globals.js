// globals.js

// make sure cookie is set for entire domain

if(typeof(SESSION_DOMAIN) === 'undefined') {
	console.error("No SESSION_DOMAIN config param");
}

console.log("SESSION_DOMAIN: ", SESSION_DOMAIN);

VITAL_COOKIE_ATTRS = {path: '/', domain: SESSION_DOMAIN, secure: COOKIE_SECURE};

VITAL_COOKIE_PREFIX = COOKIE_PREFIX;

var ENDPOINT = 'endpoint.' + APP_ID;

var vitalservice = null;

var appConfig = null;

var router = null;

var APP_IDENTIFIER = 'chat-ai-app';

$(function(){
	
	if(WEBAPP_CONNECTED) { 
		refreshLoggedInState2();
	}
	
	$(document).on('click', '[data-navigo2]', function(event){

		var href = $(this).attr('href');
		
		if( isInIFrame() ) {

			//pass to parent
			var obj = {};
			obj.origin = HTTPS_URL;
			obj.action = 'navigate';
			obj.href = href;
			window.parent.postMessage(obj, '*');
			
		} else {
			
			router.navigate(href);
		}
		
		return false;
	});
	
	if(WEBAPP_CONNECTED && typeof(VitalService) !== 'undefined') {
		
		console.log("instantiating service...");
		
		if( typeof(EVENTBUS_URL) === 'undefined') {
			console.error("No EVENTBUS_URL config param!");
		}
		
		vitalservice = new VitalService(ENDPOINT, EVENTBUS_URL, function(){
			
			console.log('connected to endpoint');
            
            init_router();
				
            if(typeof(onVitalServiceReady) === 'undefined') {
				console.warn("onVitalServiceReady not defined");
            } else {
				onVitalServiceReady();
            }
            
		}, function(err){
			console.error('couldn\'t connect to endpoint -' + err);
		});
		
	} else {
		
        console.warn("WEBAPP NOT CONNECTED or VitalService disabled");
		
		appConfig = {};
		
		init_router();
		
		if(typeof(onVitalServiceReady) === 'undefined') {
            // console.warn("onVitalServiceReady not defined");
		} else {
			onVitalServiceReady();
		}
	}
});

function refreshLoggedInStateX(){
	
	var cl = vitalservice.getCurrentLogin(); 
	
	$('.no-logged-state-visible').hide();
	
	if( cl != null ) {
		
		$('.logged-out-visible').hide();
		
		$('.logged-in-visible').show();
		
		$('.current-username').text(cl.get('username'));
		
	} else {

		$('.logged-in-visible').hide();
		
		$('.logged-out-visible').show();		
	}
}

window.addEventListener('message', function(event) {
	
	var data = event.data;
	
    // IMPORTANT: Check the origin of the data!
    if ( data.origin == HTTPS_URL ) {
        
        // The data has been sent from your site
        // The data sent with postMessage is stored in event.data

    	if(data.action == 'session_check') {
    		
    		onSessionCheckedResponse(data);
    		
    	} else if(data.action == 'logout') {
    		
    		onLogoutResponse(data);
    		
    	} else if(data.action == 'close-modal') {
    		router.navigate('');
    		
    	} else if(data.action == 'navigate') {
    		
    		var href = data.href;
    		
			router.navigate(href);
			
    	} else {
    		console.warn("Unknown iframe action: " + data.action);
    	}
    	
    } else {
        // The data hasn't been sent from your site!
        // Be careful! Do not use it.
        return;
    }
});

function refreshLoggedInState2() {
	
	//use an iframe to obtain session from other domain cookie
    
	$('#session-iframe').remove();
	
	var iframe = $('<iframe>', {src: HTTPS_URL + 'iframes/session_check.html', id: 'session-iframe'});
    
	$('head').append(iframe);
}

// callback for iframe
function onSessionCheckedResponse(obj) {
	
	$('#session-iframe').remove();
	
	$('.no-logged-state-visible').hide();
    
	//notifyParent("loginState":true,"loginID":"john@vital.ai","msg":"ok","name":"John"} );
	
	if( obj.loginState == true) {
		
		$('.logged-out-visible').hide();
		
		$('.logged-in-visible').show();
		
		$('.current-username').text(obj.loginID);
		
	} else {

		$('.logged-in-visible').hide();
		
		$('.logged-out-visible').show();
	}
}

function doLogoutIframe() {
	
	//use an iframe to obtain session from other domain cookie
	$('#logout-iframe').remove();
	
	var iframe = $('<iframe>', {src: HTTPS_URL + 'iframes/logout.html', id: 'logout-iframe'});
	$('head').append(iframe);
}

function onLogoutResponse(data) {
	
	$('#logout-iframe').remove();
	
	if(data.ok) {
		
		refreshLoggedInState2();
		
	} else {
		console.error("logout error: " , data);
	}	
}

// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),//decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (decodeURIComponent(sParameterName[0]) === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    
    return null;
};

function isNotTooLong(password, N) {
    return password.length <= N;
}
  
function isLongEnough(password, N) {
    return password.length >= N;
}

function containsLowerCase(password) {
    return /[a-z]/.test(password);
}

function containsUpperCase(password) {
    return /[A-Z]/.test(password);
}

function containsNumber(password) {
    return /\d/.test(password);
}

function containsSpecialChar(password) {
    // For special characters, you can define your own range. Here, I'm considering these: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
    return /[!\"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]/.test(password);
}

function containsNoSpacesOrControlChars(password) {
    // Checks if password contains any whitespace or control characters
    return !/\s|[\x00-\x1F\x7F]/.test(password);
}

function validatePasswordString(password, N, MAX) {
    
    if (!isNotTooLong(password, MAX)) {
        console.log("Password must be equal to or under " + N + " characters long.");
        return false;
    }
    
    if (!isLongEnough(password, N)) {
        console.log("Password should be at least " + N + " characters long.");
        return false;
    }
    
    if (!containsLowerCase(password)) {
        console.log("Password should contain at least one lower case character.");
        return false;
    }
    
    if (!containsUpperCase(password)) {
        console.log("Password should contain at least one upper case character.");
        return false;
    }
    
    if (!containsNumber(password)) {
        console.log("Password should contain at least one numeric character.");
        return false;
    }
    
    if (!containsSpecialChar(password)) {
        console.log("Password should contain at least one special character.");
        return false;
    }
    
    if (!containsNoSpacesOrControlChars(password)) {
        console.log("Password should not contain spaces, whitespace, or control characters.");
        return false;
    }
    
    console.log("Password is valid.");
    
    return true;
}
  
function openPasswordResetConfirmModal(code) {
	
	initPasswordResetConfirmModal(code);
	
	var modal = $('#password-reset-confirm-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	var url = HTTPS_URL + 'iframes/password-reset-confirm.html';
	
	if(code != null && code.length > 0) {
		url += ('?code=' + encodeURIComponent(code));
	}
	
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('password-reset-confirm-modal');
	}
}

function initPasswordResetConfirmModal(code) {

	var p = $('#password-reset-confirm-modal');
	    
    var successForm = p.find('.success-form');
    
	var successEl = p.find('.request-success');
			
    var errorForm = p.find('.error-form');
    
	var errorEl = p.find('.request-error');
			
	var theForm = p.find('.new-password-form');
			
	var inputEmail = p.find('.input-email');
			
	var inputPassword = p.find('.input-password');
	
    var inputPasswordRepeat = p.find('.input-password-repeat');

    var resetButton = p.find('.email-reset-button');

    inputPassword.on('blur', function() {
        
        var newPasswordTest = inputPassword.val();
            
        var valid = validatePasswordString(newPasswordTest, 8, 128);

        var errorDiv = p.find('.password-validation-error');
    
        if(valid == false) {
            
            errorDiv.text('The password does not meet the required criteria.');
        }
        else {
            
            errorDiv.text('');
        }
    });
    
	
    var matchFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
             
        var errorDiv = p.find('.password-validation-error-two');
    
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            
            valid = false;
        }
        
        if(valid == false) {
            
            if (inputPasswordRepeat.hasClass('visited')) {
            
                errorDiv.text('The password and repeated password do not match.');
            }
        }
        else {
            
            errorDiv.text('');
        }
    }
    
    var passwordValidFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
     
        // var resetButton = p.find('.email-reset-button');
        
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            valid = false;
        }
        
        var contentValid = validatePasswordString(newPasswordTest, 8, 128);

        if(contentValid == false) {    
            valid = false;   
        }
        var disabled = false;
        
        if(valid == false) { 
            disabled = true;
        }
        
        // resetButton.prop("disabled", disabled);
        
        if(disabled == true) {
            resetButton.addClass('button-disabled');    
        }
        else {
            resetButton.removeClass('button-disabled');
        }
        
        if(valid == true) {
            resetButton.removeClass('btn-danger');
            resetButton.addClass('btn-primary');
        }
        else {
            
            if (inputPasswordRepeat.hasClass('visited')) {
                resetButton.removeClass('btn-primary');
                resetButton.addClass('btn-danger');
            }
            else {
                
                if(contentValid == false) {
                    resetButton.removeClass('btn-primary');
                    resetButton.addClass('btn-danger');
                }                
            }
        }
    }
    
    var visitedFunction = function() {    
        inputPasswordRepeat.addClass('visited'); 
    }
    
    inputPasswordRepeat.on('blur', visitedFunction );
    
    inputPassword.on('blur', passwordValidFunction  );
    
    inputPasswordRepeat.on('blur', passwordValidFunction );

    inputPassword.on('blur', matchFunction );

    inputPasswordRepeat.on('blur', matchFunction );
    
    var loginButton = p.find('.go-to-login');
    
    loginButton.click(function() {
                
        // in iframe, so must talk to parent
        // window.parent.location.href = "/login";
        
        // if this was a link could just use
        // data-navigo2
        // in the a tag 
        
        var obj = {};
        obj.origin = HTTPS_URL;
        obj.action = 'navigate';
        obj.href = '/login';
        window.parent.postMessage(obj, '*'); 
    });
    
    var confirmationCodeForm = p.find('.confirmation-code-form');
    
    var confirmCodeInput = p.find('.reset-confirmation-code');
    
    confirmCodeInput.val(code);
    
	var initialized = p.hasClass('initialized');
	
	if(!initialized) {
		
		theForm.find('.return-aware').keyup(function(e) {
			if(e.which == 13) {
				
				resetButton.click();
                
				return false;
			}
		});
		
		p.addClass('initialized');
	}
			
	// resetButton.removeAttr('disabled');
			
	if(code == null || code == '') {
				
		// initialMessage.hide();
				
		errorEl.text("No code parameter");
				
		return;		
	}
    
    var passwordResetConfirmButton = p.find('#password-reset-confirm-button');
    
    passwordResetConfirmButton.click(function(){
		
        let data = { 
            passwordResetConfirmCode: code,
            requestType: 'verify'
        };
                
        let endpoint = WEBAPP_URL + 'passwordresetconfirm';
        
        fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
            console.log(data);
          
            var status = data["status"];
          
            if(status === "ok") {
              
              var message = data["message"];
              
              confirmationCodeForm.hide()
                  
              inputEmail.val('marc@vital.ai');
		
		      inputPassword.val('');
		
		      inputPasswordRepeat.val('');
		    
              theForm.show();
          }
          else {
              
                if(status === "warn") {
              
                    var message = data["message"];
              
                }
                 else {
                     
                    console.error(data);
    
                    var message = data["message"];
                } 
          }
      })
    .catch(error => { 
      
      console.error(error);
    
    });

    });
    
	if(!initialized) {
	
		p.find('.login-button-el').click(function(){
			
			router.navigate('/login');
			
		});
		
		resetButton.click(function(){
		
            // if($(this).prop('disabled')) {
            //    return; 
            // }
            
            if($(this).hasClass('button-disabled')) {
                return; 
            }
            
            // prevent double clicks
			resetButton.attr('disabled', 'disabled');

			inputPassword.attr('disabled', 'disabled');
            
			inputPasswordRepeat.attr('disabled', 'disabled');

			successEl.text('');	
            
			errorEl.text('');
			
            var newPassword = inputPassword.val();
            
            var newPasswordRepeat = inputPasswordRepeat.val();
            
            var valid = validatePasswordString(newPassword, 8, 128);

            // console.log('Password: ' + newPassword + ' has validation: ' + valid);

			var data = {
                
				passwordResetConfirmCode: code,
				password:       newPassword,
				passwordRepeat: newPasswordRepeat,
                requestType: 'complete'
			};
            
            let endpoint = WEBAPP_URL + 'passwordresetconfirm';
        
            fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response =>  response.json() )
            .then(
            
                data => { 
          
                    console.log(data);
          
                    var status = data["status"];
          
                    if(status === "ok") {
              
                        var message = data["message"];
              
                        theForm.hide();    
			
                        successForm.show();    
                
			             successEl.text('');
                    }
                    else {
              
                        if(status === "warn") {
              
                            var message = data["message"];
                        }
                        else {
                     
                            console.error(data);
    
                            var message = data["message"];

                            errorForm.show();
                        } 
                    }
                })
            .catch(error => { 
      
                console.error(error);
            });

        });

    }
	
} // end initPasswordResetConfirmModal

function openLoginModal() {
	
	$('.modal').modal('hide');
	
	var modal = $('#login-modal');
	
	var dataTargetURL = ( WEBAPP_URL ) ;
	
	modal.find('iframe').removeAttr('src'); 
	
	modal.find('iframe').attr('src', HTTPS_URL + 'iframes/login.html?targetURL=' +  encodeURIComponent(dataTargetURL));
	
	modal.attr('data-target-url', dataTargetURL);
	
	if(isInIFrame()) {
		
	} else {
		
		modal.modal({});
	}

	return false;	
}

function openResetPasswordModal() {
	
	initResetPasswordModal();
	
	var modal = $('#reset-password-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	modal.find('iframe').attr('src', HTTPS_URL + 'iframes/reset-password.html');
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('reset-password-modal');	
	}
}

function initResetPasswordModal() {
	
	var m = $('#reset-password-modal');
	
	var successEls = m.find('.on-success');
	successEls.hide();
	
	var initialEls = m.find('.initial');
	initialEls.show();
	
	var resetButton = m.find('#email-reset-button');
	
	var modalStatus = m.find('.request-status');
	modalStatus.empty();
	
	var modalActive = m.find('.modal-active');
	modalActive.removeAttr('disabled');
	
	var inputEmail = m.find('#reset-input-email');
	inputEmail.val('');
	
	if(m.hasClass('initialized')) {
		return;
	}
	
	m.addClass('initialized');

	var successEl = m.find('.request-success');
    
	var errorEl = m.find('.request-error');
	
	inputEmail.keyup(function(e) {
	    if(e.which == 13) {
	    	//doSignup();
	    	resetButton.click();
		    return false;
	    }
	});
	
	resetButton.click(function(){
		
		modalStatus.empty();
	
		var _email = $.trim(inputEmail.val());
		
		if(_email.length < 1) return;

		modalActive.attr('disabled', 'disabled');

        let data = { resetEmail: _email};
                
        let endpoint = WEBAPP_URL + 'resetpassword';
        
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
                console.log(data);
          
                var status = data["status"];
          
                if(status === "ok") {
              
                    var message = data["message"];
              
                    modalActive.removeAttr('disabled');
		
			        initialEls.hide();
                    
			         successEls.show();
			
			         successEl.text(message);
			
			         inputEmail.val('');
                }
                else {
              
                    if(status === "warn") {
              
                        var message = data["message"];
              
                        modalActive.removeAttr('disabled');

                        initialEls.hide();
                        
                        successEls.show();
			
                        successEl.text(message);
			
                        inputEmail.val('');
                    
                    
                    }
                    else {
                     
                        console.error(data);
    
                        var message = data["message"];

                        modalActive.removeAttr('disabled');

                        errorEl.text(message);
                        
                        inputEmail.val('');
                    } 
                }
            })
            .catch(error => { 
      
                console.error(error);
    
                modalActive.removeAttr('disabled');
            
                errorEl.text('An error occurred during the reset request.');
			
                inputEmail.val('');
            });
        	
    });
}

function openUnlockLoginModal() {
	
	initUnlockLoginModal();
	
	var modal = $('#unlock-login-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	modal.find('iframe').attr('src', HTTPS_URL + 'iframes/unlock-login.html');
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('unlock-login-modal');
	}
}

function initUnlockLoginModal() {
	
	var m = $('#unlock-login-modal');
	
	var successEls = m.find('.on-success');
    
	successEls.hide();
	
	var initialEls = m.find('.initial');
    
	initialEls.show();
	
	var resetButton = m.find('#email-unlock-button');
	
	var modalStatus = m.find('.request-status');
    
	modalStatus.empty();
	
	var modalActive = m.find('.modal-active');
    
	modalActive.removeAttr('disabled');
	
	var inputEmail = m.find('#unlock-input-email');
    
	inputEmail.val('');
	
	if(m.hasClass('initialized')) {
		return;
	}
	
	m.addClass('initialized');
	
	var successEl = m.find('.request-success');
    
	var errorEl = m.find('.request-error');
	
	inputEmail.keyup(function(e) {
	    if(e.which == 13) {
	    	//doSignup();
	    	resetButton.click();
		    return false;
	    }
	});
	
	resetButton.click(function(){
		
		modalStatus.empty();
	
		var _email = $.trim(inputEmail.val());
		
		if(_email.length < 1) return;

		modalActive.attr('disabled', 'disabled');

        let data = { unlockEmail: _email };
                
        let endpoint = WEBAPP_URL + 'unlocklogin';
        
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
                console.log(data);
          
                var status = data["status"];
          
                if(status === "ok") {
              
                    var message = data["message"];
              
                    modalActive.removeAttr('disabled');
		
                    initialEls.hide();
                    
                    successEls.show();
			
                    successEl.text(message);
			
                    inputEmail.val('');
                }
                else {
              
                    if(status === "warn") {
              
                        var message = data["message"];
              
                        modalActive.removeAttr('disabled');

                        initialEls.hide();

                        successEls.show();
			
                        successEl.text(message);
			
                        inputEmail.val('');
                    }
                    else {
                     
                        console.error(data);
    
                        var message = data["message"];

                        modalActive.removeAttr('disabled');

                        errorEl.text(message);
                      
                        inputEmail.val('');
                    }
                }
            })
            .catch(error => { 
      
                console.error(error);
    
                modalActive.removeAttr('disabled');
            
                errorEl.text('An error occurred during the unlock request.');
			
                inputEmail.val('');
  
            });	
	});	
}

function openAcceptAccountInviteModal(code) {
	
	initAcceptAccountInviteModal(code);
	
	var modal = $('#accept-account-invite-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	var link = '?';
	
	var url = HTTPS_URL + 'iframes/accept-account-invite.html';
    
	if(code != null && code.length > 0) {
		url += '?code=' + code;
		link = '&';
	}
    
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {	
		openModal('accept-account-invite-modal');
	}
}

function initAcceptAccountInviteModal(code) {
	    
	var w = $('#accept-account-invite-modal');
	
    var confirmationCodeForm = w.find('.acceptinvite-verify-code-form');
    
    var successForm = w.find('.success-form');
    
	var successEl = w.find('.request-success');
			
    var errorForm = w.find('.error-form');
    
	var errorEl = w.find('.request-error');
    
    var theForm = w.find('.new-account-form');
			
	var inputEmail = w.find('.input-email');
			
	var inputPassword = w.find('.input-password');
	
    var inputPasswordRepeat = w.find('.input-password-repeat');
    
    var createAccountButton = w.find('.create-account-button');

	var success = w.find('.success');
    
	var successHide = w.find('.success-hide');
    
	var error   = w.find('.error');
	
	success.hide();
    
	successHide.show();
    
	error.hide();
	
	w.find('.no-input').hide();
    
	w.find('.input-ok').hide();
	
	if(code == null || code == '') {
		w.find('.no-input').show();
		return;
	}
	
    w.find('.account-invite-code').val(code);
    
	w.find('.input-code').val(code);
	
	w.find('.input-ok').show();
			
	error.empty();
    
	error.hide();

    successHide.hide();
  
    inputPassword.on('blur', function() {
        
        var newPasswordTest = inputPassword.val();
            
        var valid = validatePasswordString(newPasswordTest, 8, 128);

        var errorDiv = w.find('.password-validation-error');
    
        if(valid == false) {
            
            errorDiv.text('The password does not meet the required criteria.');
        }
        else {
            
            errorDiv.text('');
        }
    });
    
    var matchFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
             
        var errorDiv = w.find('.password-validation-error-two');
    
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            
            valid = false;
        }
        
        if(valid == false) {
            
            if (inputPasswordRepeat.hasClass('visited')) {
            
                errorDiv.text('The password and repeated password do not match.');
            }
        }
        else {
            
            errorDiv.text('');
        }
    }
    
    var passwordValidFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
             
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            valid = false;
        }
        
        var contentValid = validatePasswordString(newPasswordTest, 8, 128);

        if(contentValid == false) {    
            valid = false;   
        }
        var disabled = false;
        
        if(valid == false) { 
            disabled = true;
        }
        
        // createAccountButton.prop("disabled", disabled);
        
        if(disabled == true) {
            createAccountButton.addClass('button-disabled');    
        }
        else {
            createAccountButton.removeClass('button-disabled');
        }
        
        if(valid == true) {
            createAccountButton.removeClass('btn-danger');
            createAccountButton.addClass('btn-primary');
        }
        else {
            
            if (inputPasswordRepeat.hasClass('visited')) {
                createAccountButton.removeClass('btn-primary');
                createAccountButton.addClass('btn-danger');
            }
            else {
                
                if(contentValid == false) {
                    createAccountButton.removeClass('btn-primary');
                    createAccountButton.addClass('btn-danger');
                }                
            }
        }
    }
    
    var visitedFunction = function() {    
        inputPasswordRepeat.addClass('visited'); 
    }
    
    inputPasswordRepeat.on('blur', visitedFunction );
    
    inputPassword.on('blur', passwordValidFunction  );
    
    inputPasswordRepeat.on('blur', passwordValidFunction );

    inputPassword.on('blur', matchFunction );

    inputPasswordRepeat.on('blur', matchFunction );
    
    var loginButton = w.find('.go-to-login');
    
    loginButton.click(function() {
                
        // in iframe, so must talk to parent
        // window.parent.location.href = "/login";
        
        // if this was a link could just use
        // data-navigo2
        // in the a tag 
        
        var obj = {};
        obj.origin = HTTPS_URL;
        obj.action = 'navigate';
        obj.href = '/login';
        window.parent.postMessage(obj, '*'); 
    });
    
    var initialized = w.hasClass('initialized');
	
	if(!initialized) {
		
		theForm.find('.return-aware').keyup(function(e) {
			if(e.which == 13) {
				
				createAccountButton.click();
                
				return false;
			}
		});
		
		w.addClass('initialized');
	}
			
	// createAccountButton.removeAttr('disabled');
			
	if(code == null || code == '') {
        
		errorEl.text("No code parameter");
				
		return;		
	}

    var verifyAccountInviteButton = w.find('#account-invite-confirm-button');
    
    verifyAccountInviteButton.click(function(){
		
        let data = { 
            acceptAccountInviteCode: code,
            requestType: 'verify'
        };
                
        let endpoint = WEBAPP_URL + 'acceptaccountinvite';
        
        fetch(endpoint, {
            method: "POST",  
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
            console.log(data);
          
            var status = data["status"];
          
            if(status === "ok") {
              
              var message = data["message"];
                      
              confirmationCodeForm.hide()
                  
              inputEmail.val('marc@vital.ai');
		
		      inputPassword.val('');
		
		      inputPasswordRepeat.val('');
		    
              theForm.show();        
          }
          else {
              
                if(status === "warn") {
              
                    var message = data["message"];
                                 
                }
                 else {
                     
                    console.error(data);
    
                    var message = data["message"];

                } 
          }
      })
    .catch(error => { 
      
        console.error(error);
    
    });

    });
   
    
    if(!initialized) {
	
		w.find('.login-button-el').click(function(){
			
			router.navigate('/login');	
		});
		
		createAccountButton.click(function(){
		
            // if($(this).prop('disabled')) {
            //    return; 
            // }
            
            if($(this).hasClass('button-disabled')) {
                return; 
            }
            
            // prevent double clicks
			createAccountButton.attr('disabled', 'disabled');

			inputPassword.attr('disabled', 'disabled');
            
			inputPasswordRepeat.attr('disabled', 'disabled');

			successEl.text('');
            
			errorEl.text('');
			
            var newPassword = inputPassword.val();
            
            var newPasswordRepeat = inputPasswordRepeat.val();
            
            var valid = validatePasswordString(newPassword, 8, 128);

            if(valid == false) {
                
                return;
            }
            
			var data = {
				passwordResetConfirmCode: code,
				password:       newPassword,
				passwordRepeat: newPasswordRepeat,
                requestType: 'complete'
			};
            
            let endpoint = WEBAPP_URL + 'acceptaccountinvite';
        
            fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response =>  response.json() )
            .then(
            
                data => { 
          
                    console.log(data);
          
                    var status = data["status"];
          
                    if(status === "ok") {
              
                        var message = data["message"];
              
                        theForm.hide();    
            
                        successForm.show();    
                
			             successEl.text('');
                    }
                    else {
              
                        if(status === "warn") {
              
                            var message = data["message"];
                        }
                        else {
                     
                            console.error(data);
    
                            var message = data["message"];

                            errorForm.show();
                        }
                    }
                })
                .catch(error => { 
      
                    console.error(error);
                });
        });
    }    
}

function openAcceptMemberInviteModal(code) {
	
	initAcceptMemberInviteModal(code);
	
	var modal = $('#accept-member-invite-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	var link = '?';
	
	var url = HTTPS_URL + 'iframes/accept-member-invite.html';
    
	if(code != null && code.length > 0) {
		url += '?code=' + code;
		link = '&';
	}
	
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('accept-member-invite-modal');
    }
}

function initAcceptMemberInviteModal(code) {
	
	var w = $('#accept-member-invite-modal');
		
    var confirmationCodeForm = w.find('.acceptinvite-verify-code-form');
    
    var successForm = w.find('.success-form');
    
	var successEl = w.find('.request-success');
			
    var errorForm = w.find('.error-form');
    
	var errorEl = w.find('.request-error');
    
    var theForm = w.find('.new-member-form');
			
	var inputEmail = w.find('.input-email');
			
	var inputPassword = w.find('.input-password');
	
    var inputPasswordRepeat = w.find('.input-password-repeat');
    
    var createAccountButton = w.find('.create-member-button');

	var success = w.find('.success');
    
	var successHide = w.find('.success-hide');
    
	var error   = w.find('.error');
	
	success.hide();
    
	successHide.show();
    
	error.hide();
	
	w.find('.no-input').hide();
    
	w.find('.input-ok').hide();
	
	if(code == null || code == '') {
		w.find('.no-input').show();
		return;
	}
	
    w.find('.member-invite-code').val(code);
    
	w.find('.input-code').val(code);
	
	w.find('.input-ok').show();
			
	error.empty();
    
	error.hide();

    successHide.hide();
  
    inputPassword.on('blur', function() {
        
        var newPasswordTest = inputPassword.val();
            
        var valid = validatePasswordString(newPasswordTest, 8, 128);

        var errorDiv = w.find('.password-validation-error');
    
        if(valid == false) {
            
            errorDiv.text('The password does not meet the required criteria.');
        }
        else {
            
            errorDiv.text('');
        }
    });
    
    var matchFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
             
        var errorDiv = w.find('.password-validation-error-two');
    
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            
            valid = false;
        }
        
        if(valid == false) {
            
            if (inputPasswordRepeat.hasClass('visited')) {
            
                errorDiv.text('The password and repeated password do not match.');
            }
        }
        else {
            
            errorDiv.text('');
        }
    }
    
    var passwordValidFunction = function() {
        
        var newPasswordTest = inputPassword.val();
        
        var newPasswordRepeatTest = inputPasswordRepeat.val();
             
        var valid = true;
        
        if(newPasswordTest != newPasswordRepeatTest) {
            valid = false;
        }
        
        var contentValid = validatePasswordString(newPasswordTest, 8, 128);

        if(contentValid == false) {    
            valid = false;   
        }
        var disabled = false;
        
        if(valid == false) { 
            disabled = true;
        }
        
        // createAccountButton.prop("disabled", disabled);
        
        if(disabled == true) {
            createAccountButton.addClass('button-disabled');    
        }
        else {
            createAccountButton.removeClass('button-disabled');
        }
        
        if(valid == true) {
            createAccountButton.removeClass('btn-danger');
            createAccountButton.addClass('btn-primary');
        }
        else {
            
            if (inputPasswordRepeat.hasClass('visited')) {
                createAccountButton.removeClass('btn-primary');
                createAccountButton.addClass('btn-danger');
            }
            else {
                
                if(contentValid == false) {
                    createAccountButton.removeClass('btn-primary');
                    createAccountButton.addClass('btn-danger');
                }                
            }
        }
    }
    
    var visitedFunction = function() {    
        inputPasswordRepeat.addClass('visited'); 
    }
    
    inputPasswordRepeat.on('blur', visitedFunction );
    
    inputPassword.on('blur', passwordValidFunction  );
    
    inputPasswordRepeat.on('blur', passwordValidFunction );

    inputPassword.on('blur', matchFunction );

    inputPasswordRepeat.on('blur', matchFunction );
    
    var loginButton = w.find('.go-to-login');
    
    loginButton.click(function() {
                
        // in iframe, so must talk to parent
        // window.parent.location.href = "/login";
        
        // if this was a link could just use
        // data-navigo2
        // in the a tag 
        
        var obj = {};
        obj.origin = HTTPS_URL;
        obj.action = 'navigate';
        obj.href = '/login';
        window.parent.postMessage(obj, '*'); 
    });
    
    var initialized = w.hasClass('initialized');
	
	if(!initialized) {
		
		theForm.find('.return-aware').keyup(function(e) {
			if(e.which == 13) {
				
				createAccountButton.click();
                
				return false;
			}
		});
		
		w.addClass('initialized');
	}
			
	// createAccountButton.removeAttr('disabled');
			
	if(code == null || code == '') {
        
		errorEl.text("No code parameter");
				
		return;		
	}

    var verifyAccountInviteButton = w.find('#member-invite-confirm-button');
    
    verifyAccountInviteButton.click(function(){
		
        let data = { 
            acceptAccountInviteCode: code,
            requestType: 'verify'
        };
                
        let endpoint = WEBAPP_URL + 'acceptmemberinvite';
        
        fetch(endpoint, {
            method: "POST",  
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
            console.log(data);
          
            var status = data["status"];
          
            if(status === "ok") {
              
              var message = data["message"];
                      
              confirmationCodeForm.hide()
                  
              inputEmail.val('marc@vital.ai');
		
		      inputPassword.val('');
		
		      inputPasswordRepeat.val('');
		    
              theForm.show();        
          }
          else {
              
                if(status === "warn") {
              
                    var message = data["message"];
                                 
                }
                 else {
                     
                    console.error(data);
    
                    var message = data["message"];

                } 
          }
      })
    .catch(error => { 
      
        console.error(error);
    
    });

    });
   
    
    if(!initialized) {
	
		w.find('.login-button-el').click(function(){
			
			router.navigate('/login');	
		});
		
		createAccountButton.click(function(){
		
            // if($(this).prop('disabled')) {
            //    return; 
            // }
            
            if($(this).hasClass('button-disabled')) {
                return; 
            }
            
            // prevent double clicks
			createAccountButton.attr('disabled', 'disabled');

			inputPassword.attr('disabled', 'disabled');
            
			inputPasswordRepeat.attr('disabled', 'disabled');

			successEl.text('');
            
			errorEl.text('');
			
            var newPassword = inputPassword.val();
            
            var newPasswordRepeat = inputPasswordRepeat.val();
            
            var valid = validatePasswordString(newPassword, 8, 128);

            if(valid == false) {
                
                return;
            }
            
			var data = {
				passwordResetConfirmCode: code,
				password:       newPassword,
				passwordRepeat: newPasswordRepeat,
                requestType: 'complete'
			};
            
            let endpoint = WEBAPP_URL + 'acceptmemberinvite';
        
            fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response =>  response.json() )
            .then(
            
                data => { 
          
                    console.log(data);
          
                    var status = data["status"];
          
                    if(status === "ok") {
              
                        var message = data["message"];
              
                        theForm.hide();    
            
                        successForm.show();    
                
			             successEl.text('');
                    }
                    else {
              
                        if(status === "warn") {
              
                            var message = data["message"];
                        }
                        else {
                     
                            console.error(data);
    
                            var message = data["message"];

                            errorForm.show();
                        }
                    }
                })
                .catch(error => { 
      
                    console.error(error);
                });
        });
    }  
}


function openConfirmLoginEmailModal(template, code) {
	
    console.log('Code: ' + code);
    
    console.log('Template: ' + template);

    initConfirmLoginEmailModal(template, code);
 
	var modal = $('#confirm-login-email-modal');
	    
	modal.find('iframe').removeAttr('src'); 

	var link = '?';
	
	var url = HTTPS_URL + 'iframes/confirm-login-email.html';
    
	if(code != null && code.length > 0) {
		url += '?code=' + code;
		link = '&';
	}
	
    if(template != null && template.length > 0) {
		url += link + 'template=' + template;
		link = '&';
	}
	
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('confirm-login-email-modal');	
	}
}


function initConfirmLoginEmailModal(template, code) {
	
    console.log('Init Code: ' + code);
    
    console.log('Init Template: ' + template);

    
	var w = $('#confirm-login-email-modal');
	
    var confirmForm = w.find('.confirmlogin-verify-code-form');
    
    var verifyCodeMessage = w.find('.verify-code-message');
    
    if(template == 'unlock') {
        
        verifyCodeMessage.text('Verify Code to unlock login.');
        
        verifyCodeMessage.show();
    }
    
    if(template == 'changelogin') {
        
        verifyCodeMessage.text('Verify Code to confirm changing your login.');
        
        verifyCodeMessage.show();
    }
    
	var success = w.find('.success');
    
	var successHide = w.find('.success-hide');
    
	var error = w.find('.error');
	
	success.hide();
    
	successHide.show();
    
	error.hide();
	
	w.find('.no-input').hide();
    
	w.find('.input-ok').hide();
	
	if(code == null || code == '') {
		w.find('.no-input').show();
		return;
	}
	
    var loginButton = w.find('.go-to-login');
    
    loginButton.click(function() {
                
        // in iframe, so must talk to parent
        // window.parent.location.href = "/login";
        
        // if this was a link could just use
        // data-navigo2
        // in the a tag 
        
        var obj = {};
        obj.origin = HTTPS_URL;
        obj.action = 'navigate';
        obj.href = '/login';
        window.parent.postMessage(obj, '*'); 
    });
    
    
    var confirmLoginInput = w.find('.confirm-login-code');
    
    confirmLoginInput.val(code);

    
	// w.find('.input-code').val(code);
	
	// w.find('.input-ok').show();
			
	// var code = w.find('.input-code').val();

	error.empty();
    
	error.hide();
	
    successHide.hide();

    success.find('.text-success').text('ConfirmLoginEmail');
			
    success.show();
    
    var confirmLoginEmailButton = w.find('#confirm-login-email-button');
    
    confirmLoginEmailButton.click(function(){
		
        let data = { 
            confirmLoginEmailCode: code,
            confirmLoginEmailTemplate: template
        };
                
        let endpoint = WEBAPP_URL + 'confirmloginemail';
        
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
            console.log(data);
          
            var status = data["status"];
          
            if(status === "ok") {
              
              var message = data["message"];
                
              if(template == 'unlock') {    
                
                  confirmForm.hide();
                  
                  var successForm = w.find('.unlock-success-form');    
                
                  successForm.show();  
              }
                
            
             if(template == 'changelogin') {    
                
                  confirmForm.hide();
                  
                  var successForm = w.find('.changelogin-success-form');    
                
                  successForm.show();
             }
                
                
                
            }
            else {
              
                if(status === "warn") {
              
                    var message = data["message"];
                    
                    confirmForm.hide();

                    var errorForm = w.find('.error-form');
                    
                    errorForm.show();
                    
                    
                }
                else {
                     
                    console.error(data);
    
                    var message = data["message"];
                    
                    confirmForm.hide();

                    var errorForm = w.find('.error-form');
                    
                    errorForm.show();
                    
                } 
            }
        })
        .catch(error => { 
      
            console.error(error);
        });

    });
}

function openModal(modalID) {
	
	$('.modal').modal('hide');
	
	if(modalID != null) {
		
		$('#' + modalID).modal({});
		
	}
}

function init_router() {
	
	if(router != null) {
		console.warn("router already initialized");
		return;
	}
	
	if(router != null) {
		return;
	}
	
	var port = '' + window.location.port;
	
	if(port.length > 0) port = ':' + port;
		
	var urlPrefix = PREFIX;
	
	if(urlPrefix.substring(urlPrefix.length -1, urlPrefix.length ) === '/') {
		urlPrefix = urlPrefix.substring(0, urlPrefix.length -1);
	}
	
	var rootURL = window.location.protocol + '//' + window.location.hostname + port + urlPrefix;
	console.log('root URL: ', rootURL);
	
	if(typeof(Navigo) !== 'undefined') {
		
		router = new Navigo(rootURL, false);
		
		router.on({
            /*
            '/confirmemail/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                console.log("Navigate: /confirmemail/:code , code = " + code);
			  
                openConfirmEmailModal(code);
			  
		      },

            '/confirmemail': function(params) {
			  
                console.log("Navigate: /confirmemail");
			  
                openConfirmEmailModal(null);
			  
		      },
		    */
            
            /*
		  '/requestinvitationcode' : function(params) {
			
			  console.log("Navigate: /requestinvitationcode");
			  
			  openRequestInvitationModal();
			  
		  },
		    */
            
            /*
		  '/signup/:code' : function(params) {
			
			  console.log("Navigate: /signup/:code , code = ", params.code);
			  
			  openSignupModal(params.code);
			  
		  },
		  */
            
            '/login' : function(params) {
			  
                console.log("Navigate: /login");
			  
                openLoginModal();
            },
		  
            '/passwordresetconfirm/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                console.log("Navigate: /passwordresetconfirm/:code , code = ", code);
			  
                openPasswordResetConfirmModal(code);
            },
		  
            '/passwordresetconfirm': function(params) {
			
                console.log("Navigate: /passwordresetconfirm");
			  
                openPasswordResetConfirmModal(null);
			  
            },

            '/resetpassword' : function(params) {
			
                console.log("Navigate: /resetpassword");
			  
                openResetPasswordModal();
			  
            },
			
            '/unlocklogin' : function(params) {
			
                console.log("Navigate: /unlocklogin");
			  
                openUnlockLoginModal(); 
            },    
            
            '/signup' : function(params) {
			  
                console.log('Navigate: /signup');
	
                window.location.href = '/signup.html'
              
                // openSignupModal(null);  
            },
             
            '/acceptaccountinvite/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                console.log("Navigate: /acceptaccountinvite/:code , code = " + code);
			  
                openAcceptAccountInviteModal(code);
            },    
            
            '/acceptmemberinvite/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                console.log("Navigate: /acceptmemberinvite/:code , code = " + code);
			  
                openAcceptMemberInviteModal(code);
            },       
            
            '/confirmloginemail/:template/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                var template = decodeURIComponent(params.template);

                console.log("Navigate: /confirmloginemail/:template/:code , template = " + template + " code = " + code);
			  
                openConfirmLoginEmailModal(template, code);
            },    
            /*
            '/confirmloginemail/:code': function(params) {
			  
                var code = decodeURIComponent(params.code);
			  
                console.log("Navigate: /confirmloginemail/:code , code = " + code);
			  
                openConfirmLoginEmailModal(code);  
            },       
            */
            
            '*': function (params) {
			  
                console.log('Navigate: *');
			  
                //close modal
                openModal(null);  
            }
	   });
		
    } else {
		console.info("no router");
	}	
}

/*
function openSignupModal(code) {
	
	//init signup modal
	initSignupModal(code);
	
	var modal = $('#signup-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	var url = HTTPS_URL + 'iframes/signup.html';
	if(code != null && code.length > 0) {
		url += '?code=' + code;
	}
	
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('signup-modal');
	}
}
*/

/*
function initSignupModal(code) {

	if(code == null) code = '';
	
	var m = $('#signup-modal');
	
	m.find('input').val('');
	
	var signupActive = m.find('.signup-active');
	signupActive.removeAttr('disabled');
	
	var signupStatus = m.find('.signup-status');
	signupStatus.empty();
	
	var inputInvitationCode = m.find('#signup-invitation-code');
	
	var invitationCodeRequestsEnabled = appConfig.get('invitationCodeRequestsEnabled');
	
	if(!invitationCodeRequestsEnabled) {
		m.find('.invitation-row').remove();
	} else {
		inputInvitationCode.val(code);
	}
	
	if(m.hasClass('initialized')) return;
	
	m.addClass('initialized');
	
	
	m.find('#signup-confirm-button').click(function(event){
	
		signupStatus.empty();
		
		var invitationCode = invitationCodeRequestsEnabled ? inputInvitationCode.val() : null;
		
		var customerID = m.find('#signup-customer-id').val();
		
		var name = m.find('#signup-name').val();
		
		var email = m.find('#signup-email').val();
		
		var password = m.find('#signup-password').val();
		
		var passwordRepeat = m.find('#signup-password-repeat').val();

		signupActive.attr('disabled', 'disabled');
		
		vitalservice.callFunction('customers.signup', {
			invitationCode: invitationCode,
			customerID: customerID,
			customerName: name,
			email: email,
			password: password,
			passwordRepeat: passwordRepeat
			
		}, function(response) {
			
			signupStatus.empty();
			m.find('.signup-success').text(response.status.message);
			
			signupActive.removeAttr('disabled');
			
			m.find('input').val('');
			
		}, function(error){
			
			signupStatus.empty();
			m.find('.signup-error').text(error);
			
			signupActive.removeAttr('disabled');
			
		});
	});
}
*/

/*

function openRequestInvitationModal() {
	
	//init modal first
	initRequestInvitationModal();
	
	var modal = $('#request-invitation-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	modal.find('iframe').attr('src', HTTPS_URL + 'iframes/request-invitation.html');
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('request-invitation-modal');
		
	}
	
	
}
*/

/*
function initRequestInvitationModal() {
	
	var m = $('#request-invitation-modal'); 
	
	var successEls = m.find('.on-success');
	successEls.hide();
	
	var initialEls = m.find('.initial');
	initialEls.show();
	
	var invitationStatus = m.find('.invitation-status');
	invitationStatus.empty();
	
	var invitationActive = m.find('.invitation-active');
	invitationActive.removeAttr('disabled');
	
	var emailInput = m.find('#invitation-code-email');
	emailInput.val('');
	
	var successMsg = m.find('.invitation-success');
	var errorMsg = m.find('.invitation-error');
	
	var b = m.find('#request-invitation-code-button');
	
	
	
	if(m.hasClass('initialized')) return;
	
	m.addClass('initialized');

	
	emailInput.keypress(function(e) {
	    if(e.which == 13) {
	    	b.click();
	    }
	});
	
	b.click(function(event){
		
		invitationActive.attr('disabled', 'disabled');
		
		invitationStatus.empty();
		
        
		var email = $.trim( emailInput.val() );
	
		vitalservice.callFunction('customers.request.invitation', {email: email, appIdentifier: APP_IDENTIFIER}, function(invitationSuccess){
			
			console.log('invitation status: ', invitationSuccess);
			
			emailInput.val('');
			
			initialEls.hide();
			successEls.show();
			
			invitationActive.removeAttr('disabled');
			
			invitationStatus.empty();
			successMsg.text(invitationSuccess.status.message);
			
		}, function(error){
			
			invitationActive.removeAttr('disabled');
			
			invitationStatus.empty();
			errorMsg.text(error);
			
		});
		
		
	});	
}
*/

/*
function openConfirmEmailModal(code) {
	
	initConfirmEmailModal(code);
	
	var modal = $('#confirm-email-modal');
	
	modal.find('iframe').removeAttr('src'); 
	
	var link = '?';
	
	var url = HTTPS_URL + 'iframes/confirm-email.html';
    
	if(code != null && code.length > 0) {
		url += '?code=' + code;
		link = '&';
	}
	
	modal.find('iframe').attr('src', url);
	
	if(isInIFrame()) {
		
	} else {
		
		openModal('confirm-email-modal');	
	}
}

function initConfirmEmailModal(code) {
	
	var w = $('#confirm-email-modal');
	
	var success = w.find('.success');
    
	var successHide = w.find('.success-hide');
    
	var error   = w.find('.error');
	
	success.hide();
    
	successHide.show();
    
	error.hide();
	
	w.find('.no-input').hide();
    
	w.find('.input-ok').hide();
	
	if(code == null || code == '') {
		w.find('.no-input').show();
		return;
	}
	
	w.find('.input-code').val(code);
	
	w.find('.input-ok').show();
			
	var code = w.find('.input-code').val();
	
	error.empty();
	
    error.hide();
	
    error.hide();
    
    successHide.hide();

    success.find('.text-success').text('ConfirmEmail');
			
    success.show();
    
    var confirmEmailButton = w.find('#confirm-email-button');
    
    confirmEmailButton.click(function(){
		
        let data = { confirmEmailCode: code};
                
        let endpoint = WEBAPP_URL + 'confirmemail';
        
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response =>  response.json() )
        .then(
            
            data => { 
          
            console.log(data);
          
            var status = data["status"];
          
            if(status === "ok") {
              
                var message = data["message"];
            }
            else {
              
                if(status === "warn") {
              
                    var message = data["message"];
                }
                else {
                     
                    console.error(data);
    
                    var message = data["message"];
                }
            }
        })
        .catch(error => { 
      
            console.error(error);
        });

    });
}
*/

