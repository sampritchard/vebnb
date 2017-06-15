//var assert = require('assert')
var mongoose = require('mongoose')
var chai = require('chai')
var Space = require('../models/space').Space;
var expect = chai.expect;

describe('Spaces', function() {
	// before((done)=>{
	// 	mongoose.createConnection('mongodb://localhost/test_2');
	// 	mongoose.connection
	// 		.once('open', ()=>{ done(); })
	// 		.on('error', (error)=> {
	// 			console.warn('Error', error);
	// 		});
	// });

	beforeEach((done)=>{
		mongoose.connection.collections.spaces.drop(()=>{
			done();
			});
	});

	describe('Creating space', ()=>{
		it('saves a space with an address', (done) => {
			var space = new Space({name: 'The Best Place', price: 40, address: 'Fake 22'})
			space.save()
				.then(function() {
					Space.find({}, function(err, spaces) {
						expect(spaces[0].address).to.equal('Fake 22')
						expect(spaces[0].name).to.equal('The Best Place')
						expect(spaces[0].price).to.equal(40)
						done();
					});
				});
		});
	});
});
