"use strict";

let chai = require("chai");
let should = chai.should();
let expect = chai.expect;
let chaiHttp = require("chai-http");
let server = require("../index");

const convertWords = require("../algorithm.js");

chai.use(chaiHttp);



describe("phonewords function test", function() {

  it("should return an array of strings", function() {
    let data = convertWords.findWords("234");
    expect(data).to.be.a("array");
    expect(data[0]).to.be.a("string");
  });

  it("should should compute N solutions", function() {
    expect(convertWords.findWords('0')).to.have.lengthOf(1); //empty string
    expect(convertWords.findWords('1')).to.have.lengthOf(1); //empty string
    expect(convertWords.findWords('3')).to.have.lengthOf(3);
    expect(convertWords.findWords('7')).to.have.lengthOf(4);
    expect(convertWords.findWords('93')).to.have.lengthOf(12);
    expect(convertWords.findWords('467')).to.have.lengthOf(36);
    expect(convertWords.findWords('235971')).to.have.lengthOf(432);
  });

});

describe("endpoint test", () => {
  //endpoint will fail on first run do to heroku free dyno sleeping.
  it("it should properly return the combinations", done => {
    chai
      .request("https://phone-to-words.herokuapp.com")
      .post("/convert")
      .send({
        number: '34567'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});
