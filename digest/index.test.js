const digest = require('.')

describe('digest', function(){

  it('should be a function', function(){
    expect(digest).to.be.a('function')
  })

  it('should return a promise', function(){
    expect(digest()).to.be.an.instanceof(Promise)
  })

  describe('results', function(){
    before(function(){
      return digest().then(digest => {
        this.digest = digest
      })
    })

    it('should return an object', function(){
      expect(this.digest).to.be.an('object')
    })

    it('should have keys', function(){
      expect(Object.keys(this.digest)).to.eql([
        "modules",
        "phases",
        "skillContexts",
        "skills",
        "report",
      ])
    })

    describe('.skills', function(){
      it('should be an object with keys', function(){
        const skillIds = Object.keys(this.digest.skills)
        // expect(skillIds).to.eql([])
      })
    })

    describe('.phases', function(){
      it('should be an object with keys', function(){
        const phases = Object.keys(this.digest.phases)
        expect(phases).to.eql(["0","1","2","3","4","5"])
      })

      it('should each have skills', function(){
        Object.keys(this.digest.phases).forEach(phaseNumber => {
          const phase = this.digest.phases[phaseNumber]
          expect(phase.skills).to.be.an('Array')
          expect(phase.skills).to.not.haveDuplicates()
        })
      })
    })
  })

})
