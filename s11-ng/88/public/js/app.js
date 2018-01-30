angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);

function ctrlFunc() {
	this.message = 'howdy';

	this.people = [
		{
			name: 'larry'
		},
		{
			name: 'tim'
		},
		{
			name: 'bob'
		}
	];
}