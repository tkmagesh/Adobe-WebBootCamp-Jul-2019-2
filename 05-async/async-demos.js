(function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering the add service`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
				var result = x + y;
			console.log(`	[@Service] returning result`);
			return result;
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering the add service`);
		var result = addAsync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addAsyncClient'] = addAsyncClient;

})();